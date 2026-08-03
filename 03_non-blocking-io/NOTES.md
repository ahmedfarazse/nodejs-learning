# Node.js Non-Blocking I/O

## Introduction

I/O stands for Input/Output.

I/O operations involve exchanging data between a program and an external source.

Examples include:

* Reading a file
* Writing a file
* Getting data from a database
* Network requests

Node.js uses non-blocking I/O to handle I/O operations efficiently.

---

## What is Blocking I/O?

Blocking I/O means the program waits for an I/O operation to complete before continuing with the next task.

```text
Task A Starts
     ↓
Wait for Task A
     ↓
Task A Completes
     ↓
Task B Starts
```

If Task A is slow, Task B must wait.

---

## What is Non-Blocking I/O?

Non-blocking I/O means the program starts an I/O operation without stopping the execution while waiting for it to complete.

The program can continue performing other work while the I/O operation is in progress.

```text
Task A Starts
     ↓
I/O Operation Starts
     ↓
Continue Other Work
     ↓
I/O Operation Completes
     ↓
Handle Result
```

---

## Blocking vs Non-Blocking I/O

### Blocking I/O

```text
Task A
  ↓
Wait
  ↓
Task A Complete
  ↓
Task B
```

### Non-Blocking I/O

```text
Task A
  ↓
I/O Starts
  ↓
Task B Can Run
  ↓
I/O Completes
  ↓
Handle Result
```

---

## Example

Suppose Node.js requests data from a database.

If the database operation is slow:

### Blocking

```text
Database Request
      ↓
    Wait
      ↓
Database Response
      ↓
Continue
```

### Non-Blocking

```text
Database Request
      ↓
Request continues in the background
      ↓
Other work can be performed
      ↓
Database Response
      ↓
Handle the result
```

---

## Why Non-Blocking I/O is Important

Backend applications frequently perform I/O operations such as:

* Database requests
* File operations
* Network requests
* API requests

If the program stopped completely while waiting for every I/O operation, slow operations could reduce the application's ability to handle other work.

Non-blocking I/O allows the program to continue working while waiting for I/O operations to complete.

---

## Event-Driven Architecture and Non-Blocking I/O

Event-driven architecture and non-blocking I/O are related concepts, but they are not the same.

Event-driven architecture focuses on responding to events.

Non-blocking I/O focuses on continuing execution without waiting for an I/O operation to complete.

---

## Best Practices

* Understand the difference between blocking and non-blocking I/O.
* Identify which operations involve I/O.
* Avoid unnecessary blocking operations in backend applications.
* Understand how non-blocking I/O contributes to Node.js performance.

---

## Common Mistakes

* Thinking non-blocking means the operation finishes instantly.
* Thinking non-blocking I/O means there is no waiting at all.
* Confusing non-blocking I/O with event-driven architecture.
* Assuming every JavaScript operation is an I/O operation.

---

## Interview Questions

* What is I/O?
* What is blocking I/O?
* What is non-blocking I/O?
* What is the difference between blocking and non-blocking I/O?
* Why is non-blocking I/O important in Node.js?
* How does non-blocking I/O help backend applications?
* Is non-blocking I/O the same as event-driven architecture?

---

## Quick Revision

* I/O = Input/Output
* Blocking I/O waits for the operation to complete.
* Non-blocking I/O allows other work to continue while waiting.
* Node.js heavily uses non-blocking I/O.
* Non-blocking does not mean instant.
* Event-driven architecture and non-blocking I/O are related but different.
