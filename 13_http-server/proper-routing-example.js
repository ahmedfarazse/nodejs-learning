
const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Home Page");
  }

  else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page");
  }

  else if (req.method === "GET" && req.url === "/api/user") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
      name: "Ahmed",
      role: "Software Engineer"
    }));
  }

  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Route Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});