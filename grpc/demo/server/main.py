from concurrent import futures
import argparse
import logging
import sys

import grpc

import schema_pb2
import schema_pb2_grpc

logger = logging.getLogger(__file__)

class Auth(schema_pb2_grpc.AuthServiceServicer):
    def Login(self, request, context):
        logger.info("username: %s" % request.username)
        logger.info("password: %s" % request.password)

        return schema_pb2.LoginResponse(access_token="123123123")

def serve(args):
    address = "%s:%d" % (args.host, args.port)

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    schema_pb2_grpc.add_AuthServiceServicer_to_server(Auth(), server)
    server.add_insecure_port(address)
    server.start()

    logger.info("serving gRPC at %s" % address)

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.fatal("server terminated")
        sys.exit(1)

def main():
    logger.setLevel(logging.DEBUG)

    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    ch.setFormatter(logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s"))

    logger.addHandler(ch)

    parser = argparse.ArgumentParser(description="Authentication server")
    parser.add_argument("--host", default="localhost", help="host to bind gRPC server")
    parser.add_argument("--port", default=0, type=int, help="port to bind gRPC server")

    args = parser.parse_args()

    if not args.host:
        logger.fatal("--host not provided")
        sys.exit(1)

    if not args.port:
        logger.fatal("--port not provided")
        sys.exit(1)

    serve(args)

if __name__ == "__main__":
    main()
