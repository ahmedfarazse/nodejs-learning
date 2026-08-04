# Node.js Process

## Introduction

`process` is a global object in Node.js that provides information about the currently running Node.js process and allows us to control it.

---

## Global Object

The `process` object is available globally in Node.js.

It does not need to be imported.

```javascript
console.log(process);
```

---

## process.argv

`process.argv` is used to access command-line arguments passed to a Node.js program.

Example:

```javascript
console.log(process.argv);
```

If we run:

```text
node app.js Ahmed 22
```

The arguments can be accessed through `process.argv`.

---

## process.env

`process.env` is used to access environment variables.

Environment variables can contain configuration values such as:

* API keys
* Database URLs
* Port numbers
* Environment settings

Example:

```javascript
console.log(process.env.NODE_ENV);
```

Sensitive values should not be written directly inside source code.

---

## process.cwd()

`process.cwd()` returns the current working directory path.

Example:

```javascript
console.log(process.cwd());
```

---

## process.exit()

`process.exit()` can terminate the currently running Node.js process.

Example:

```javascript
process.exit(0);
```

Exit code `0` generally indicates successful termination.

A non-zero exit code generally indicates an error or failure.

---

## Important Concepts

* `process` → Global Node.js object
* `process.argv` → Command-line arguments
* `process.env` → Environment variables
* `process.cwd()` → Current working directory
* `process.exit()` → Terminates the process

---

## Interview Questions

* What is the `process` object in Node.js?
* Is `process` a global object?
* Does `process` need to be imported?
* What is `process.argv`?
* What is `process.env`?
* What does `process.cwd()` return?
* What does `process.exit()` do?
* What does exit code `0` generally indicate?

---

## Quick Revision

`process` is a global Node.js object.

`process.argv` handles command-line arguments.

`process.env` accesses environment variables.

`process.cwd()` returns the current working directory.

`process.exit()` terminates the running process.
