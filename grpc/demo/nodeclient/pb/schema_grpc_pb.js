// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_schema_LoginRequest(arg) {
  if (!(arg instanceof schema_pb.LoginRequest)) {
    throw new Error('Expected argument of type schema.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_LoginRequest(buffer_arg) {
  return schema_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_LoginResponse(arg) {
  if (!(arg instanceof schema_pb.LoginResponse)) {
    throw new Error('Expected argument of type schema.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_LoginResponse(buffer_arg) {
  return schema_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/schema.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.LoginRequest,
    responseType: schema_pb.LoginResponse,
    requestSerialize: serialize_schema_LoginRequest,
    requestDeserialize: deserialize_schema_LoginRequest,
    responseSerialize: serialize_schema_LoginResponse,
    responseDeserialize: deserialize_schema_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
