# Node.js Runtime & V8

## Introduction

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

Node.js is commonly used for backend and server-side development.

Node.js uses the V8 JavaScript engine to execute JavaScript code.

---

## What is a Runtime Environment?

A runtime environment provides the environment and required features needed to execute a programming language.

JavaScript is a programming language, while Node.js provides a runtime environment where JavaScript can run outside the browser.

---

## What is V8?

V8 is a JavaScript engine developed by Google.

Its main job is to execute JavaScript code.

V8 is used by:

* Google Chrome
* Node.js

V8 is not limited to browsers.

---

## JavaScript vs V8 vs Node.js

```text
JavaScript = Programming Language

V8 = JavaScript Engine

Node.js = JavaScript Runtime Environment
```

Node.js uses V8 to execute JavaScript and provides additional Node.js APIs.

---

## Node.js and V8

Node.js uses the V8 engine to execute JavaScript.

```text
JavaScript Code
       ↓
    Node.js
       ↓
      V8
       ↓
JavaScript Execution
```

V8 handles JavaScript execution, while Node.js provides the runtime environment and Node.js-specific APIs.

---

## Browser JavaScript vs Node.js

### Browser

The browser provides browser-specific APIs such as:

```javascript
window
document
localStorage
```

### Node.js

Node.js provides APIs and built-in modules such as:

```javascript
fs
path
process
http
events
```

Node.js does not normally provide browser DOM objects such as `window` and `document`.

---

## Node.js Built-in APIs

Node.js provides built-in modules that allow JavaScript to perform tasks outside the browser.

For example:

```javascript
const fs = require("fs");
```

The `fs` module is used to work with files.

`fs` is provided by Node.js, not by the V8 engine.

---

## Process Object

Node.js provides a global `process` object.

Example:

```javascript
console.log(typeof process);
```

Output:

```text
object
```

`process` provides information and control related to the current Node.js process.

---

## Browser Objects in Node.js

The following browser objects are not normally available in Node.js:

```javascript
console.log(typeof window);
console.log(typeof document);
```

Output:

```text
undefined
undefined
```

`window` and `document` belong to the browser environment and DOM.

---

## Node.js is Not Only for Backend

Node.js is commonly used for backend development, but it can also be used for:

* CLI tools
* Automation scripts
* Development tools
* File handling
* Server-side applications

---

## Best Practices

* Understand the difference between JavaScript, V8, and Node.js.
* Do not confuse Node.js with the V8 engine.
* Understand which APIs belong to the browser and which belong to Node.js.
* Learn Node.js built-in modules before depending heavily on external packages.

---

## Common Mistakes

* Thinking Node.js and V8 are the same thing.
* Thinking V8 only works inside browsers.
* Assuming browser APIs such as `window` and `document` are available in Node.js.
* Thinking Node.js itself is a programming language.

---

## Interview Questions

* What is Node.js?
* What is a JavaScript runtime environment?
* What is V8?
* What is the difference between Node.js and V8?
* Does Node.js use V8?
* Is V8 only used in browsers?
* Why is `document` not available in Node.js?
* What is the difference between browser APIs and Node.js APIs?
* Is Node.js a programming language?

---

## Quick Revision

* JavaScript → Programming language
* V8 → JavaScript engine
* Node.js → JavaScript runtime environment
* Node.js uses V8 to execute JavaScript
* Node.js provides its own APIs and built-in modules
* `window` and `document` are browser/DOM concepts
* `fs`, `path`, `process`, and `http` are Node.js concepts
