const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getDetails") {
    res.end(
      JSON.stringify({
        name: "vikas thulasi",
        age: 24,
      })
    );
  }
  res.end("hello world");
});

server.listen(1111);
