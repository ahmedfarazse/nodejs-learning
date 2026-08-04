const fs = require("fs");

// Async Methods 


// fs.writeFile("notes.txt", "Node.js FS Module", (err) => { if (err) throw err; console.log("File created"); });


// fs.readFile("notes.txt", "utf8", (err, data) => { if (err) throw err; console.log(data); });


// fs.appendFile("notes.txt", "\nLearning Node.js FS", (err) => { if (err) throw err; console.log("Content appended"); });


// fs.rename("notes.txt", "node-notes.txt", (err) => { if (err) throw err; console.log("File renamed"); });


// fs.unlink("node-notes.txt", (err) => { if (err) throw err; console.log("File deleted"); });





// Sync Methods 

fs.writeFileSync("sync.txt", "Hello from Sync");

const data = fs.readFileSync("sync.txt", "utf8");


console.log(data)