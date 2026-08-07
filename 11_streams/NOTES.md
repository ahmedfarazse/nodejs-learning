# Node.js Streams

## Introduction

Streams allow data to be processed in small chunks instead of loading the complete data into memory at once.

Streams are useful when working with:

* Large files
* Network data
* Uploads
* Downloads

---

## Types of Streams

Node.js streams have four main types:

### Readable Stream

Used to read data.

### Writable Stream

Used to write data.

### Duplex Stream

Can both read and write data.

### Transform Stream

Can read and write data while also transforming the data.

---

## Readable Stream

`fs.createReadStream()` creates a readable stream for reading a file in chunks.

```javascript id="r8y2xk"
const fs = require("fs");

const readStream = fs.createReadStream("large.txt", "utf8");
```

---

## data Event

The `data` event is triggered when a chunk of data is received.

```javascript id="v5q7zn"
readStream.on("data", (chunk) => {
  console.log("Chunk:", chunk);
});
```

A `chunk` is a small portion or block of data.

---

## Writable Stream

`fs.createWriteStream()` creates a writable stream for writing data.

```javascript id="j2f6pd"
const writeStream = fs.createWriteStream("copy.txt");
```

---

## pipe()

`pipe()` connects a readable stream to a writable stream and transfers data between them.

```javascript id="x9k4mw"
const readStream = fs.createReadStream("large.txt");

const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream);
```

The data from `large.txt` is read in chunks and written to `copy.txt`.

---

## end Event

The `end` event is triggered when all data has been read from a readable stream.

```javascript id="n6t3qa"
readStream.on("end", () => {
  console.log("Reading complete");
});
```

---

## Buffer vs Stream

### Buffer

Buffer is used to handle binary or raw data in memory.

### Stream

Stream processes data continuously in smaller chunks.

---

## Important Methods and Events

* `fs.createReadStream()` → Creates a readable stream
* `fs.createWriteStream()` → Creates a writable stream
* `data` → Triggered when a chunk is received
* `end` → Triggered when reading is complete
* `pipe()` → Connects readable and writable streams
* `chunk` → Small portion of data

---

## Best Practices

* Use streams when handling large amounts of data.
* Avoid loading unnecessarily large files completely into memory.
* Use `pipe()` when transferring data between compatible streams.
* Handle stream events properly.

---

## Interview Questions

* What are streams in Node.js?
* Why are streams useful for large files?
* What is a Readable Stream?
* What is a Writable Stream?
* What is a Duplex Stream?
* What is a Transform Stream?
* What is a chunk?
* What does `pipe()` do?
* What does the `data` event do?
* What does the `end` event do?
* What is the difference between Buffer and Stream?

---

## Quick Revision

Stream → Processes data in chunks.

Readable → Reads data.

Writable → Writes data.

Duplex → Reads and writes.

Transform → Reads, writes, and transforms data.

Chunk → Small portion of data.

`pipe()` → Transfers data from Readable to Writable.

`data` → Chunk received.

`end` → Reading completed.
