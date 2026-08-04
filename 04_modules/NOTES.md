# Node.js Modules

## Introduction

A module is a separate file or unit of code that contains specific functionality.

Instead of keeping all application code in one file, modules allow us to organize code into multiple files based on functionality.

---

## Why Use Modules?

Modules help to:

* Organize code
* Improve readability
* Reuse code
* Separate different responsibilities
* Make applications easier to maintain

---

## Types of Node.js Modules

Node.js modules can be divided into three main types:

### Built-in Modules

Built-in modules are provided by Node.js and do not need to be installed separately.

Examples:

```javascript
fs
path
http
events
```

---

### Local Modules

Local modules are modules created by the developer within the application.

Example:

```text
app.js
math.js
```

The `math.js` file can contain mathematical functionality that can be used inside `app.js`.

---

### Third-Party Modules

Third-party modules are external packages created by other developers.

They are commonly installed using npm.

Example:

```text
express
```

---

## CommonJS

CommonJS is a module system commonly used in Node.js.

### Export

```javascript
module.exports = {
  add,
  subtract
};
```

### Import

```javascript
const math = require("./math");
```

CommonJS uses:

```text
Import → require()

Export → module.exports
```

---

## ES Modules

Node.js also supports the modern JavaScript ES Module system.

### Export

```javascript
export const add = (a, b) => {
  return a + b;
};
```

### Import

```javascript
import { add } from "./math.js";
```

ES Modules use:

```text
Import → import

Export → export
```

---

## CommonJS vs ES Modules

| CommonJS                         | ES Modules                      |
| -------------------------------- | ------------------------------- |
| `require()`                      | `import`                        |
| `module.exports`                 | `export`                        |
| Common in older Node.js projects | Modern JavaScript module system |

---

## Built-in Module Example

```javascript
const fs = require("fs");
```

In this example:

* `fs` is a Node.js built-in module.
* `require("fs")` loads the module.
* `require()` is part of the CommonJS module system.

---

## Module Organization

Instead of putting everything in one file:

```text
app.js
```

A project can be organized into multiple modules:

```text
app.js
math.js
user.js
database.js
```

Each module can handle a specific responsibility.

---

## Best Practices

* Keep modules focused on a specific responsibility.
* Use meaningful module and file names.
* Reuse functionality through modules instead of duplicating code.
* Keep the module system consistent within a project.
* Avoid putting unrelated functionality into the same module.

---

## Common Mistakes

* Confusing a module type with a module system.
* Confusing CommonJS with ES Modules.
* Using `require()` and `import` without understanding their module systems.
* Forgetting to export functionality before trying to import it.
* Mixing module systems without proper project configuration.

---

## Interview Questions

* What is a module?
* Why are modules used in Node.js?
* What are the types of Node.js modules?
* What are built-in modules?
* What are local modules?
* What are third-party modules?
* What is CommonJS?
* What is ES Modules?
* What is the difference between `require()` and `import`?
* What is the difference between `module.exports` and `export`?
* Is `fs` a built-in module or a module system?

---

## Quick Revision

* Module → Separate unit/file containing specific functionality
* Built-in → Provided by Node.js
* Local → Created by the developer
* Third-party → External package
* CommonJS → `require()` + `module.exports`
* ES Modules → `import` + `export`
* `fs` → Built-in Node.js module
* `require("fs")` → Loads the `fs` module
