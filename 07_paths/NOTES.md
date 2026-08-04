# Node.js Path Module

## Introduction

`path` is a built-in Node.js module used to work with file and directory paths.

---

## Importing the Path Module

```javascript
const path = require("path");
```

---

## path.join()

`path.join()` is used to join multiple path parts into a single path.

```javascript
path.join("folder", "files", "app.js");
```

---

## path.basename()

`path.basename()` returns the last part of a path, usually the file name.

```javascript
path.basename("/users/ahmed/app.js");
```

Output:

```text
app.js
```

---

## path.dirname()

`path.dirname()` returns the directory path from a given path.

```javascript
path.dirname("/users/ahmed/app.js");
```

Output:

```text
/users/ahmed
```

---

## path.extname()

`path.extname()` returns the extension of a file.

```javascript
path.extname("app.js");
```

Output:

```text
.js
```

---

## path.parse()

`path.parse()` breaks a path into different components such as directory, base name, and extension.

```javascript
path.parse("/users/ahmed/app.js");
```

---

## process.cwd() vs path

`process.cwd()` returns the current working directory.

The `path` module provides methods to create, join, and analyze paths.

---

## Important Methods

* `path.join()` → Joins multiple path parts
* `path.basename()` → Returns the last part of a path
* `path.dirname()` → Returns the directory path
* `path.extname()` → Returns the file extension
* `path.parse()` → Breaks a path into components

---

## Interview Questions

* What is the Node.js `path` module?
* Is `path` a built-in module?
* What does `path.join()` do?
* What does `path.basename()` return?
* What does `path.dirname()` return?
* What does `path.extname()` return?
* What does `path.parse()` do?
* What is the difference between `process.cwd()` and the `path` module?

---

## Quick Revision

`path` → Works with file and directory paths.

`path.join()` → Joins paths.

`path.basename()` → Returns the last part of a path.

`path.dirname()` → Returns the directory path.

`path.extname()` → Returns the file extension.

`path.parse()` → Breaks a path into components.
