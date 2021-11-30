const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>Hello raju doing awesome server with node.js </h1>");
  res.end();
});

myServer.listen(port, host, () => {
  console.log(`Server is running successfully at http://${host}:${port}`);
});
