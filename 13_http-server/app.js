

const http = require("http");


// create server 

const server = http.createServer((req, res) => {
  res.end("Hello Ahmed Faraz");
});


// listen server

server.listen(3000, () => {
  console.log("Server running on port 3000");
});




// Example by req.url routing

const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("Home Page");
  } 
  else if (req.url === "/about") {
    res.end("About Page");
  } 
  else if (req.url === "/contact") {
    res.end("Contact Page");
  } 
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});






// Example by req.method

const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.end("Home Page");
  }
  else if (req.method === "GET" && req.url === "/about") {
    res.end("About Page");
  }
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});





// HTTP status codes

// 200 → Request successful
// 201 → Resource successfully created
// 400 → Bad request
// 404 → Resource/page not found
// 500 → Server-side error


// Example

const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Home Page");
  }

  else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page");
  }

  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});





// Example by res.setHeader()

// 1. Plain Text

res.setHeader("Content-Type", "text/plain");
res.end("Hello Ahmed");



// 2. HTML

res.setHeader("Content-Type", "text/html");
res.end("<h1>Home Page</h1>");


// 3. JSON

res.setHeader("Content-Type", "application/json");

res.end(JSON.stringify({
  name: "Ahmed",
  age: 22
}));


