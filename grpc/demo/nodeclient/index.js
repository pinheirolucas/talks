const util = require("util");
const grpc = require("grpc");

const authMessages = require("./pb/schema_pb");
const authServices = require("./pb/schema_grpc_pb");

async function main() {
  const authClient = new authServices.AuthServiceClient(
    "localhost:5000",
    grpc.credentials.createInsecure()
  );

  const loginRequest = new authMessages.LoginRequest()
    .setUsername("pinheirolucas")
    .setPassword("qwe123");

  const login = util.promisify(authClient.login.bind(authClient))
  try {
    const resp = await login(loginRequest);

    console.log(resp.toObject());
  } catch (err) {
    console.log(err);
  }
}

main();
