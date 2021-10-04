const http = require("http");
const { route } = require("next/dist/next-server/server/router");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
