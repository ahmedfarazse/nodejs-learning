


const EventEmitter = require("events");


// Event listener — on()
emitter.on("orderPlaced", () => { console.log("Order received"); });

// Event trigger — emit()
emitter.emit("orderPlaced");


// With Data 

emitter.on("userLogin", (username) => { console.log(username); });


emitter.emit("userLogin", "Ahmed");



// Example

emitter.on("userLogin", (username) => { console.log("User logged in:", username); });

emitter.emit("userLogin", "Ahmed");




// multiple arguments

emitter.on("userLogin", (name, age) => { console.log(name, age); });

emitter.emit("userLogin", "Ahmed", 22);