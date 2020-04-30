const util = require("util");
const grpc = require("grpc");

const todoMessages = require("./todo/schema_pb");
const todoServices = require("./todo/schema_grpc_pb");

async function main() {
  const todoClient = new todoServices.TodoServiceClient(
    "localhost:5000",
    grpc.credentials.createInsecure()
  );

  const todo = new todoMessages.Todo()
    .setDescription("my description")
    .setStatus(1);
  const todoNewRequest = new todoMessages.NewTodoRequest().setTodo(todo);

  const newTodo = util.promisify(todoClient.newTodo.bind(todoClient));
  try {
    const newTodoResponse = await newTodo(todoNewRequest);

    console.log(newTodoResponse.toObject());
  } catch (err) {
    console.log(err);
  }

  const todoRequest = new todoMessages.GetTodoRequest().setId(
    newTodoResponse.getId()
  );

  const getTodo = util.promisify(todoClient.getTodo.bind(todoClient));
  const todoResponse = await getTodo(todoRequest);

  console.log("todoResponse:", todoResponse.toObject());

  // const authClient = new authServices.AuthServiceClient(
  //   "localhost:5001",
  //   grpc.credentials.createInsecure()
  // );

  // const authRequest = new authMessages.LoginRequest()
  //   .setUsername("pinheirolucas")
  //   .setPassword("qwe123");

  // const login = util.promisify(authClient.login.bind(authClient));
  // const authResponse = await login(authRequest);

  // console.log("authResponse:", authResponse.toObject());
}

main();
