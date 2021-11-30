const http = require("http");
const port = 8080;
const fs = require("fs");
const host = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  const handleReadFile = (statuscode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      if (data) {
        res.writeHead(statuscode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } else {
        console.log(err);
      }
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./contact.html");
  }
});

myServer.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
