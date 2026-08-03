# Node.js Event-Driven Architecture

## Introduction

Event-driven architecture is an approach where a program performs a specific action when an event occurs.

Node.js uses an event-driven architecture as an important part of its backend design.

---

## What is an Event?

An event is an occurrence or action that happens in a program.

Examples:

* Request received
* Data received
* File operation completed
* Connection established

---

## What is an Event Handler?

An event handler is the code that executes when a specific event occurs.

```javascript
event.on("data", () => {
  console.log("Data received");
});
```

In this example:

* `"data"` → Event
* `() => { ... }` → Event Handler

---

## Event-Driven Flow

```text
Event Occurs
     ↓
Event Detected
     ↓
Event Handler Executes
     ↓
Specific Action Performed
```

---

## Real-World Example

Consider a restaurant:

```text
Customer places order
        ↓
    Order Event
        ↓
Kitchen receives notification
        ↓
   Food is prepared
```

The order being received is the event, while preparing the order is the action performed in response to that event.

---

## Node.js Example

Conceptually, when a Node.js server receives a request:

```text
Request Received
       ↓
      Event
       ↓
Event Handler Executes
       ↓
Response Sent
```

The request being received is the event.

The code that handles the request and prepares/sends the response is the event handler.

---

## Event-Driven Architecture in Node.js

Node.js applications can respond to different events and perform actions when those events occur.

Examples include:

* Handling incoming requests
* Handling received data
* Handling completed operations
* Handling connections

---

## Event-Driven Architecture vs Non-Blocking I/O

Event-driven architecture and non-blocking I/O are related concepts, but they are not the same thing.

They are studied separately in Node.js.

---

## Best Practices

* Understand the difference between an event and an event handler.
* Identify what event triggers an action.
* Keep event-handling logic clear and organized.
* Understand the event-driven model before moving to advanced Node.js concepts.

---

## Common Mistakes

* Confusing an event with the action performed after the event.
* Thinking an event handler is the event itself.
* Assuming event-driven architecture and non-blocking I/O are exactly the same concept.

---

## Interview Questions

* What is event-driven architecture?
* What is an event?
* What is an event handler?
* How does Node.js use event-driven architecture?
* What is the difference between an event and an event handler?
* Is event driven architecture the same as non blocking I/O?

---

## Quick Revision

* Event → Something happens.
* Event Handler → Code that responds to the event.
* Node.js uses an event driven architecture.
* Events can trigger specific actions.
* Event driven architecture and non-blocking I/O are different concepts.
