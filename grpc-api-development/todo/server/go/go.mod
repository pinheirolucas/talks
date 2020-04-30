module server

go 1.14

require (
	github.com/golang/protobuf v1.3.4
	github.com/lib/pq v1.3.0
	github.com/pkg/errors v0.9.1
	google.golang.org/grpc v1.28.0
	schema v0.0.0-00010101000000-000000000000
)

replace schema => ../../pb/go
