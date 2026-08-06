
// Buffer create

Buffer.from("Ahmed")

const buffer = Buffer.from("Ahmed");


console.log(buffer);


// convert into string 

console.log(buffer.toString());




// Buffer length

console.log(buffer.length);



// Buffer.alloc() create new buffer 

const buffer1 = Buffer.alloc(10);

console.log(buffer);



// convert base64
const buffer = Buffer.from("Ahmed Faraz");

console.log(buffer.toString("base64"));

const encoded = buffer.toString("base64");

const decoded = Buffer.from(encoded, "base64").toString();

console.log(decoded);