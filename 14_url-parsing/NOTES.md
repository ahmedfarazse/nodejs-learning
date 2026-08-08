# Node.js URL Parsing

## Introduction

URL parsing means breaking a URL into its different parts so that the application can understand the path and query parameters.

Example:

```text
http://localhost:3000/products?id=10&category=mobile
```

---

## URL Parts

The URL contains different parts:

```text
http://localhost:3000/products?id=10
                      ↑        ↑
                   pathname   query
```

* `pathname` → `/products`
* Query parameter → `id=10`

---

## URL Module

Node.js provides the built-in `url` module for working with URLs.

```javascript id="n7p3xs"
const { URL } = require("url");
```

---

## Creating a URL Object

```javascript id="c2w8qa"
const url = new URL(
  "http://localhost:3000/products?id=10"
);
```

---

## pathname

`url.pathname` returns the path portion of the URL.

```javascript id="e4x6pk"
console.log(url.pathname);
```

Output:

```text
/products
```

---

## searchParams

`url.searchParams` is used to work with query parameters.

```javascript id="h8q2vm"
console.log(url.searchParams.get("id"));
```

Output:

```text
10
```

---

## Multiple Query Parameters

Example URL:

```text
http://localhost:3000/products?id=10&category=mobile
```

Code:

```javascript id="r5n1wb"
const url = new URL(
  "http://localhost:3000/products?id=10&category=mobile"
);

console.log(url.pathname);
console.log(url.searchParams.get("id"));
console.log(url.searchParams.get("category"));
```

Output:

```text
/products
10
mobile
```

---

## URL Parsing with HTTP Server

A URL can be parsed from the incoming HTTP request.

```javascript id="v3k7jd"
const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {

  const url = new URL(
    req.url,
    `http://${req.headers.host}`
  );

  console.log("Path:", url.pathname);
  console.log("ID:", url.searchParams.get("id"));

  res.end("Request received");

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Request:

```text
http://localhost:3000/products?id=10
```

Output:

```text
Path: /products
ID: 10
```

---

## Query Parameters

A query parameter is a key-value pair in the URL.

Example:

```text
?id=10
```

* Parameter name → `id`
* Parameter value → `10`

Multiple parameters:

```text
?id=10&category=mobile
```

---

## Important Methods and Properties

* `new URL()` → Creates a URL object
* `url.pathname` → Returns the URL path
* `url.searchParams` → Works with query parameters
* `searchParams.get()` → Gets a query parameter value
* `req.url` → Provides the requested URL
* `req.headers.host` → Provides the host information

---

## Best Practices

* Use the `URL` class to parse URLs clearly.
* Use `searchParams.get()` to access query values.
* Don't manually split URLs when the `URL` API can handle them.
* Validate query parameters before using them in application logic.

---

## Interview Questions

* What is URL parsing?
* What is `pathname`?
* What are query parameters?
* What does `searchParams.get()` do?
* What does `new URL()` do?
* How can you parse `req.url` in a Node.js server?
* What is the difference between pathname and query parameters?

---

## Quick Revision

URL parsing → Breaks a URL into useful parts.

`new URL()` → Creates a URL object.

`pathname` → URL path.

`searchParams` → Handles query parameters.

`searchParams.get()` → Gets a query parameter value.

`req.url` → Requested URL.
