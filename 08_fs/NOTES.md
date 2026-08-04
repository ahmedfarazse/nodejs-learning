# Node.js File System (fs) Module

## Introduction

`fs` stands for File System.

It is a built-in Node.js module used to work with files and directories.

---

## Importing the fs Module

```javascript
const fs = require("fs");
```

---

## writeFile()

`fs.writeFile()` is used to create a file or replace the existing content of a file.

```javascript
fs.writeFile("notes.txt", "Node.js FS Module", (err) => {
  if (err) throw err;
  console.log("File created");
});
```

If the file does not exist, it is created.

If the file already exists, its existing content is replaced.

---

## readFile()

`fs.readFile()` is used to read the content of a file asynchronously.

```javascript
fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

The file content is available through `data`.

---

## appendFile()

`fs.appendFile()` adds new content to the end of an existing file.

```javascript
fs.appendFile("notes.txt", "\nLearning Node.js FS", (err) => {
  if (err) throw err;
  console.log("Content appended");
});
```

It does not replace the existing content.

---

## rename()

`fs.rename()` is used to rename a file or move it to another location.

```javascript
fs.rename("notes.txt", "node-notes.txt", (err) => {
  if (err) throw err;
  console.log("File renamed");
});
```

---

## unlink()

`fs.unlink()` is used to delete a file.

```javascript
fs.unlink("node-notes.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
```

---

## Synchronous Methods

Node.js also provides synchronous versions of many `fs` methods.

Synchronous operations block execution until the operation is completed.

---

## writeFileSync()

Creates a file or replaces its content synchronously.

```javascript
fs.writeFileSync("sync.txt", "Hello from Sync");
```

---

## readFileSync()

Reads a file synchronously.

```javascript
const data = fs.readFileSync("sync.txt", "utf8");

console.log(data);
```

The result is returned directly.

---

## Asynchronous vs Synchronous

### Asynchronous

```javascript
fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

The operation is asynchronous and uses a callback to handle the result.

### Synchronous

```javascript
const data = fs.readFileSync("notes.txt", "utf8");

console.log(data);
```

The program waits until the file operation is completed.

---

## Common Methods

* `fs.writeFile()` → Creates or replaces file content
* `fs.readFile()` → Reads file content asynchronously
* `fs.appendFile()` → Adds content to the end of a file
* `fs.rename()` → Renames or moves a file
* `fs.unlink()` → Deletes a file
* `fs.writeFileSync()` → Creates or replaces content synchronously
* `fs.readFileSync()` → Reads content synchronously

---

## Best Practices

* Handle errors when working with file operations.
* Prefer asynchronous methods for normal server-side operations.
* Use synchronous methods carefully because they block execution.
* Use meaningful file names.
* Avoid unnecessary file operations.

---

## Interview Questions

* What is the `fs` module?
* What does `fs` stand for?
* Is `fs` a built-in module?
* What does `fs.writeFile()` do?
* What is the difference between `writeFile()` and `appendFile()`?
* What does `fs.readFile()` do?
* What does `fs.unlink()` do?
* What does `fs.rename()` do?
* What is the difference between asynchronous and synchronous `fs` methods?
* What is the difference between `readFile()` and `readFileSync()`?

---

## Quick Revision

`fs` → File System module.

`writeFile()` → Create or replace content.

`readFile()` → Read content asynchronously.

`appendFile()` → Add content at the end.

`rename()` → Rename or move a file.

`unlink()` → Delete a file.

`readFileSync()` → Read content synchronously.

Async → Does not block execution while waiting.

Sync → Blocks execution until the operation completes.
