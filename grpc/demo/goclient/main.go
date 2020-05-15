package main

import (
	"client/pb"
	"context"
	"flag"
	"fmt"
	"os"

	"google.golang.org/grpc"
)

var (
	host string
	port int
)

func main() {
	flag.StringVar(&host, "host", "localhost", "")
	flag.IntVar(&port, "port", 5000, "")
	flag.Parse()

	address := fmt.Sprintf("%s:%d", host, port)
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer conn.Close()

	client := pb.NewAuthServiceClient(conn)

	loginResponse, err := client.Login(context.Background(), &pb.LoginRequest{
		Username: "go",
		Password: "qwe123",
	})
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(
		"user authenticated with the access token:",
		loginResponse.AccessToken,
	)
}
