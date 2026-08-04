# Node.js Events Module

## Introduction

The Node.js `events` module provides the `EventEmitter` class for working with events.

Events allow a program to listen for an event and perform a specific action when that event occurs.

---

## Importing EventEmitter

```javascript
const EventEmitter = require("events");
```

Create an EventEmitter object:

```javascript
const emitter = new EventEmitter();
```

---

## Event Listener — on()

`emitter.on()` is used to listen for an event.

```javascript
emitter.on("orderPlaced", () => {
  console.log("Order received");
});
```

---

## Triggering an Event — emit()

`emitter.emit()` is used to trigger an event.

```javascript
emitter.emit("orderPlaced");
```

When the event is emitted, its listener is executed.

---

## Passing Data with Events

Data can be passed when an event is emitted.

Listener:

```javascript
emitter.on("userLogin", (username) => {
  console.log("User logged in:", username);
});
```

Trigger:

```javascript
emitter.emit("userLogin", "Ahmed");
```

Output:

```text
User logged in: Ahmed
```

---

## Passing Multiple Arguments

Multiple values can also be passed with an event.

```javascript
emitter.on("userLogin", (name, age) => {
  console.log(name, age);
});

emitter.emit("userLogin", "Ahmed", 22);
```

---

## once()

`emitter.once()` registers a listener that executes only once.

```javascript
emitter.once("login", (name) => {
  console.log("Login:", name);
});

emitter.emit("login", "Ahmed");
emitter.emit("login", "Faraz");
```

Output:

```text
Login: Ahmed
```

The listener does not execute again after the first event.

---

## on() vs once()

```text
on()
→ Executes every time the event is triggered.

once()
→ Executes only the first time the event is triggered.
```

---

## Event Flow

```text
Event occurs
     ↓
emit()
     ↓
Event listener
     ↓
Callback executes
```

---

## Common Methods

* `EventEmitter` → Class used to create event emitters
* `on()` → Listens for an event
* `emit()` → Triggers an event
* `once()` → Listens for an event only once

---

## Best Practices

* Use meaningful event names.
* Keep event listeners focused on a specific responsibility.
* Pass only the data required by the listener.
* Use `once()` when an event should only be handled once.

---

## Interview Questions

* What is the Node.js `events` module?
* What is `EventEmitter`?
* What does `on()` do?
* What does `emit()` do?
* What is the difference between `on()` and `once()`?
* Can data be passed with an event?
* Can multiple arguments be passed with `emit()`?

---

## Quick Revision

`events` → Node.js built-in module for working with events.

`EventEmitter` → Provides event functionality.

`on()` → Listen for an event.

`emit()` → Trigger an event.

`once()` → Handle an event only once.

Events can also pass data to listeners.
