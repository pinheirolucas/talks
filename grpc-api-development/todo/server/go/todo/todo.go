package todo

import (
	"context"
	"database/sql"
	"strings"

	"schema"

	"github.com/pkg/errors"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

type Server struct {
	db *sql.DB
}

func NewServer(db *sql.DB) (*Server, error) {
	if db == nil {
		return nil, errors.New("nil db")
	}

	if err := db.Ping(); err != nil {
		return nil, errors.Wrap(err, "failed to ping the database")
	}

	return &Server{
		db: db,
	}, nil
}

func (s *Server) NewTodo(ctx context.Context, in *schema.NewTodoRequest) (*schema.NewTodoResponse, error) {
	if in == nil || in.Todo == nil {
		return nil, grpc.Errorf(codes.InvalidArgument, "empty input sent")
	}

	if strings.TrimSpace(in.Todo.Description) == "" {
		return nil, grpc.Errorf(codes.InvalidArgument, "empty description")
	}

	if in.Todo.Status == schema.TodoStatus_UNKNOWN {
		return nil, grpc.Errorf(codes.InvalidArgument, "UNKNOWN status")
	}

	var id sql.NullString

	err := s.db.QueryRow(`
		insert into todo (description, status)
		values ($1, $2)
		returning id
	`, in.Todo.Description, in.Todo.Status).Scan(&id)
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "todo not added: %v", err)
	}

	todo := &schema.Todo{
		Description: in.Todo.Description,
		Status:      in.Todo.Status,
	}

	if id.Valid {
		todo.Id = id.String
	}

	return &schema.NewTodoResponse{Todo: todo}, nil
}
func (s *Server) GetTodo(ctx context.Context, in *schema.GetTodoRequest) (*schema.GetTodoResponse, error) {
	if in == nil {
		return nil, grpc.Errorf(codes.InvalidArgument, "empty input sent")
	}

	if strings.TrimSpace(in.Id) == "" {
		return nil, grpc.Errorf(codes.InvalidArgument, "id not provided")
	}

	var (
		id          sql.NullString
		description sql.NullString
		status      sql.NullInt32
	)

	err := s.db.QueryRow(`
		select
			id,
			description,
			status
		from todo
		where id=$1
	`, in.Id).Scan(
		&id,
		&description,
		&status,
	)
	switch err {
	case nil:
		// continue
	case sql.ErrNoRows:
		return nil, grpc.Errorf(codes.NotFound, "todo not found")
	default:
		return nil, grpc.Errorf(codes.Internal, "unknown error: %v", err)
	}

	todo := new(schema.Todo)

	if id.Valid {
		todo.Id = id.String
	}

	if description.Valid {
		todo.Description = description.String
	}

	if status.Valid {
		todo.Status = schema.TodoStatus(status.Int32)
	}

	return &schema.GetTodoResponse{Todo: todo}, nil
}
func (s *Server) ListTodo(ctx context.Context, in *schema.ListTodoRequest) (*schema.ListTodoResponse, error) {
	return nil, nil
}
func (s *Server) SetTodo(ctx context.Context, in *schema.SetTodoRequest) (*schema.SetTodoResponse, error) {
	return nil, nil
}
func (s *Server) DelTodo(ctx context.Context, in *schema.DelTodoRequest) (*schema.DelTodoResponse, error) {
	return nil, nil
}
