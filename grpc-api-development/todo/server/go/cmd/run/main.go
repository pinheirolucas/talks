package main

import (
	"database/sql"
	"flag"
	"fmt"
	"net"
	"os"
	"strings"

	"schema"
	"server/todo"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
)

func main() {
	var (
		host   string
		dbconn string
		port   int
	)

	flag.StringVar(&host, "host", "localhost", "host to bind gRPC server")
	flag.IntVar(&port, "port", 0, "port to bind gRPC server")
	flag.StringVar(&dbconn, "dbconn", "", "connection string to postgres database")
	flag.Parse()

	if strings.TrimSpace(host) == "" {
		fmt.Println("-host not provided")
		os.Exit(1)
	}

	if port == 0 {
		fmt.Println("-port not provided")
		os.Exit(1)
	}

	if strings.TrimSpace(dbconn) == "" {
		fmt.Println("-dbconn not provided")
		os.Exit(1)
	}

	address := fmt.Sprintf("%s:%d", host, port)

	ln, err := net.Listen("tcp", address)
	if err != nil {
		fmt.Printf("failed to listen: %v", err)
		os.Exit(1)
	}

	gs := grpc.NewServer()

	db, err := sql.Open("postgres", dbconn)
	if err != nil {
		fmt.Printf("failed to connect to postgres: %v", err)
		os.Exit(1)
	}

	ts, err := todo.NewServer(db)
	if err != nil {
		fmt.Printf("failed to create a todo server")
		os.Exit(1)
	}

	schema.RegisterTodoServiceServer(gs, ts)

	fmt.Println("serving gRPC at", address)
	if err := gs.Serve(ln); err != nil {
		fmt.Printf("failed to serve: %v", err)
		os.Exit(1)
	}
}
