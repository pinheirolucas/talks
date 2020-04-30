// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_schema_pb = require('../todo/schema_pb.js');

function serialize_schema_DelTodoRequest(arg) {
  if (!(arg instanceof todo_schema_pb.DelTodoRequest)) {
    throw new Error('Expected argument of type schema.DelTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DelTodoRequest(buffer_arg) {
  return todo_schema_pb.DelTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DelTodoResponse(arg) {
  if (!(arg instanceof todo_schema_pb.DelTodoResponse)) {
    throw new Error('Expected argument of type schema.DelTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DelTodoResponse(buffer_arg) {
  return todo_schema_pb.DelTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetTodoRequest(arg) {
  if (!(arg instanceof todo_schema_pb.GetTodoRequest)) {
    throw new Error('Expected argument of type schema.GetTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetTodoRequest(buffer_arg) {
  return todo_schema_pb.GetTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetTodoResponse(arg) {
  if (!(arg instanceof todo_schema_pb.GetTodoResponse)) {
    throw new Error('Expected argument of type schema.GetTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetTodoResponse(buffer_arg) {
  return todo_schema_pb.GetTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ListTodoRequest(arg) {
  if (!(arg instanceof todo_schema_pb.ListTodoRequest)) {
    throw new Error('Expected argument of type schema.ListTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ListTodoRequest(buffer_arg) {
  return todo_schema_pb.ListTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ListTodoResponse(arg) {
  if (!(arg instanceof todo_schema_pb.ListTodoResponse)) {
    throw new Error('Expected argument of type schema.ListTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ListTodoResponse(buffer_arg) {
  return todo_schema_pb.ListTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_NewTodoRequest(arg) {
  if (!(arg instanceof todo_schema_pb.NewTodoRequest)) {
    throw new Error('Expected argument of type schema.NewTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_NewTodoRequest(buffer_arg) {
  return todo_schema_pb.NewTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_NewTodoResponse(arg) {
  if (!(arg instanceof todo_schema_pb.NewTodoResponse)) {
    throw new Error('Expected argument of type schema.NewTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_NewTodoResponse(buffer_arg) {
  return todo_schema_pb.NewTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SetTodoRequest(arg) {
  if (!(arg instanceof todo_schema_pb.SetTodoRequest)) {
    throw new Error('Expected argument of type schema.SetTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SetTodoRequest(buffer_arg) {
  return todo_schema_pb.SetTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SetTodoResponse(arg) {
  if (!(arg instanceof todo_schema_pb.SetTodoResponse)) {
    throw new Error('Expected argument of type schema.SetTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SetTodoResponse(buffer_arg) {
  return todo_schema_pb.SetTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  newTodo: {
    path: '/schema.TodoService/NewTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_schema_pb.NewTodoRequest,
    responseType: todo_schema_pb.NewTodoResponse,
    requestSerialize: serialize_schema_NewTodoRequest,
    requestDeserialize: deserialize_schema_NewTodoRequest,
    responseSerialize: serialize_schema_NewTodoResponse,
    responseDeserialize: deserialize_schema_NewTodoResponse,
  },
  getTodo: {
    path: '/schema.TodoService/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_schema_pb.GetTodoRequest,
    responseType: todo_schema_pb.GetTodoResponse,
    requestSerialize: serialize_schema_GetTodoRequest,
    requestDeserialize: deserialize_schema_GetTodoRequest,
    responseSerialize: serialize_schema_GetTodoResponse,
    responseDeserialize: deserialize_schema_GetTodoResponse,
  },
  listTodo: {
    path: '/schema.TodoService/ListTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_schema_pb.ListTodoRequest,
    responseType: todo_schema_pb.ListTodoResponse,
    requestSerialize: serialize_schema_ListTodoRequest,
    requestDeserialize: deserialize_schema_ListTodoRequest,
    responseSerialize: serialize_schema_ListTodoResponse,
    responseDeserialize: deserialize_schema_ListTodoResponse,
  },
  setTodo: {
    path: '/schema.TodoService/SetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_schema_pb.SetTodoRequest,
    responseType: todo_schema_pb.SetTodoResponse,
    requestSerialize: serialize_schema_SetTodoRequest,
    requestDeserialize: deserialize_schema_SetTodoRequest,
    responseSerialize: serialize_schema_SetTodoResponse,
    responseDeserialize: deserialize_schema_SetTodoResponse,
  },
  delTodo: {
    path: '/schema.TodoService/DelTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_schema_pb.DelTodoRequest,
    responseType: todo_schema_pb.DelTodoResponse,
    requestSerialize: serialize_schema_DelTodoRequest,
    requestDeserialize: deserialize_schema_DelTodoRequest,
    responseSerialize: serialize_schema_DelTodoResponse,
    responseDeserialize: deserialize_schema_DelTodoResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
