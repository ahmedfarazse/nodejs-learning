const { URL } = require("url");

const url = new URL(
  "http://localhost:3000/products?id=10&category=mobile"
);

console.log("Path:", url.pathname);

console.log("ID:", url.searchParams.get("id"));

console.log("Category:", url.searchParams.get("category"));



// Example

const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);

  console.log("Path:", url.pathname);
  console.log("ID:", url.searchParams.get("id"));

  res.end("Request received");

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});