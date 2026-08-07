
const fs = require("fs");

// Readable stream

const readStream = fs.createReadStream("large.txt", "utf8");

readStream.on("data", (chunk) => { console.log("Chunk:", chunk); });



// Writeable stream 

const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream);




// end event 

const fs = require("fs");

const readStream = fs.createReadStream("large.txt", "utf8");

readStream.on("data", (chunk) => { console.log("Chunk:", chunk); });

readStream.on("end", () => { console.log("Reading complete"); });