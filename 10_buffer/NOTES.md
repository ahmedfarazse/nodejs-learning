# Node.js Buffer

## Introduction

`Buffer` is used in Node.js to work with binary or raw data.

Buffers are commonly useful when working with:

* Files
* Images
* Videos
* Network data
* Raw bytes

---

## Creating a Buffer with Buffer.from()

`Buffer.from()` creates a Buffer from existing data.

```javascript id="p4w3k2"
const buffer = Buffer.from("Ahmed Faraz");

console.log(buffer);
```

The output represents the string as bytes.

---

## Converting Buffer to String

`buffer.toString()` converts Buffer data back into a string.

```javascript id="1j5d2e"
const buffer = Buffer.from("Ahmed Faraz");

console.log(buffer.toString());
```

Output:

```text id="0n3z3k"
Ahmed Faraz
```

---

## Buffer Length

`buffer.length` returns the length of the Buffer in bytes.

```javascript id="a8v6kn"
const buffer = Buffer.from("Ahmed Faraz");

console.log(buffer.length);
```

---

## Buffer.alloc()

`Buffer.alloc()` creates a new Buffer with a specified size.

```javascript id="q3b7cx"
const buffer = Buffer.alloc(10);

console.log(buffer);
```

The allocated Buffer is initially filled with zero values.

---

## Buffer.from() vs Buffer.alloc()

```text id="d5s4q7"
Buffer.from("Ahmed")
→ Creates a Buffer from existing data.

Buffer.alloc(10)
→ Creates a new Buffer with 10 bytes.
```

---

## Base64 Encoding

Buffer data can be converted into a Base64 string.

```javascript id="n7r2pm"
const buffer = Buffer.from("Ahmed Faraz");

const encoded = buffer.toString("base64");

console.log(encoded);
```

---

## Base64 Decoding

A Base64 string can be converted back into the original text.

```javascript id="x6t9vb"
const encoded = buffer.toString("base64");

const decoded = Buffer.from(encoded, "base64").toString();

console.log(decoded);
```

Output:

```text id="h2m4qa"
Ahmed Faraz
```

---

## Important Methods and Properties

* `Buffer.from()` → Creates a Buffer from existing data
* `Buffer.alloc()` → Creates a new Buffer with a specified size
* `buffer.toString()` → Converts Buffer data into a string
* `buffer.length` → Returns Buffer length in bytes
* Base64 → Represents binary data as a text string

---

## Best Practices

* Understand the difference between strings and binary data.
* Use `Buffer.from()` when creating a Buffer from existing data.
* Use `Buffer.alloc()` when a specific Buffer size is required.
* Convert Buffer data to strings when text representation is needed.

---

## Interview Questions

* What is a Buffer in Node.js?
* Why are Buffers used?
* What does `Buffer.from()` do?
* What does `Buffer.alloc()` do?
* What does `buffer.toString()` do?
* What does `buffer.length` return?
* What is the difference between `Buffer.from()` and `Buffer.alloc()`?
* What is Base64 encoding?

---

## Quick Revision

`Buffer` → Handles binary/raw data.

`Buffer.from()` → Creates a Buffer from existing data.

`Buffer.alloc()` → Creates a new Buffer with a specified size.

`buffer.toString()` → Converts Buffer to string.

`buffer.length` → Returns length in bytes.

Base64 → Encodes binary data into a text representation.
