# Node.js HTTP Server

## Introduction

Node.js provides the built-in `http` module for creating HTTP servers.

An HTTP server receives requests from clients and sends responses back.

---

## Importing the HTTP Module

```javascript
const http = require("http");
```

---

## Creating a Server

`http.createServer()` creates an HTTP server.

```javascript
const server = http.createServer((req, res) => {
  res.end("Hello Ahmed Faraz");
});
```

### Request and Response

* `req` → Represents the client's request.
* `res` → Represents the server's response.

---

## Starting the Server

`server.listen()` starts the server on a specific port.

```javascript
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

The server can then be accessed at:

```text
http://localhost:3000
```

---

## Request URL

`req.url` provides the requested URL/path.

```javascript
console.log(req.url);
```

Example:

```text
/
```

```text
/about
```

---

## Request Method

`req.method` provides the HTTP method used by the client.

```javascript
console.log(req.method);
```

Common methods:

* `GET` → Used to retrieve data
* `POST` → Used to send/create data

---

## Routing

Routing allows the server to provide different responses for different URLs.

```javascript
if (req.method === "GET" && req.url === "/") {
  res.end("Home Page");
}
else if (req.method === "GET" && req.url === "/about") {
  res.end("About Page");
}
```

---

## Status Codes

Status codes describe the result of an HTTP request.

Common status codes:

* `200` → Request successful
* `201` → Resource successfully created
* `400` → Bad request
* `404` → Resource not found
* `500` → Server-side error

Example:

```javascript
res.statusCode = 200;
```

Not found:

```javascript
res.statusCode = 404;
res.end("Page Not Found");
```

---

## Response Headers

`res.setHeader()` is used to set response headers.

```javascript
res.setHeader("Content-Type", "text/plain");
```

The `Content-Type` tells the client what type of data the response contains.

### Plain Text

```javascript
res.setHeader("Content-Type", "text/plain");
res.end("Hello Ahmed");
```

### HTML

```javascript
res.setHeader("Content-Type", "text/html");
res.end("<h1>Home Page</h1>");
```

### JSON

```javascript
res.setHeader("Content-Type", "application/json");
```

---

## JSON Response

JavaScript objects need to be converted to a JSON string before sending them as an HTTP response.

```javascript
res.setHeader("Content-Type", "application/json");

res.end(JSON.stringify({
  name: "Ahmed",
  role: "Software Engineer"
}));
```

`JSON.stringify()` converts a JavaScript object into a JSON string.

---

## Complete Basic HTTP Server

```javascript
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
```

---

## HTTP Request Flow

```text
Client
   ↓
HTTP Request
   ↓
Node.js Server
   ↓
Process Request
   ↓
HTTP Response
   ↓
Client
```

---

## Important Concepts

* `http` → Built-in Node.js HTTP module
* `createServer()` → Creates an HTTP server
* `req` → Client request
* `res` → Server response
* `req.url` → Requested URL/path
* `req.method` → HTTP method
* `res.end()` → Sends/completes response
* `res.statusCode` → Sets HTTP status code
* `res.setHeader()` → Sets response headers
* `Content-Type` → Defines response data type
* `JSON.stringify()` → Converts object to JSON string
* `listen()` → Starts server on a port

---

## Quick Revision

HTTP module → Create HTTP servers.

`req` → Request.

`res` → Response.

`req.url` → URL/path.

`req.method` → HTTP method.

`res.end()` → Send response.

`res.statusCode` → Response status.

`res.setHeader()` → Response headers.

`JSON.stringify()` → Object → JSON string.

`server.listen()` → Start server.
