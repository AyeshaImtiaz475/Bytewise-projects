//onsole.log("hello world ")
//node js is an open-source, cross-platform javascript runtime environmnet 
//node.js was developed by ryan dahi 2009 
//Why Node.js -> Node.js is really fast,relatime application as node js never waits for api to return data 
//part of node.js -> Modules: Javascript liberary taht was included in node.js for function 
//console -> a way of debug code
//cluster -> it allows multithreading 
//global -> are avaliable in all module 
//error-handling -> handles through exceptions 
//streaming -> let you read data or wtite data continuosly (readable, writable, duplex, transform)
// buffer -> allows handling streams that contain only binary data 
//Domain -> intercepts errors that remain unhanlged (internal binding and external binding)
//DNS -> Used to connect to a dns server and perform name resolution

//Express framework -> is a flexible node.js applictaion framwork that provide wise st of features for developing web and andrios application.

//node.js -> nasa. uber. medium, netflix, walmart, paypal 


//Node js architecture -> client -> server(node.js) -> request 
//-> event queue -> event loop (see is there is any reqest (fifo)
// ->blocking operation(sync task -> thread pool(worker are the
// thread -> perform the blocking operation to fullfill the request))
// - non-blocking operation(async task) -> send the response to 
//user-> done)  )


console.log(process.platform); //use to check the platform 

//blocking example
// console.log("1");
// const fs = require("fs");
// const result = fs.readFileSync('hello.txt', "utf-8");
// console.log(result);
// console.log("2");

// darwin
// 1
// name: ayesha imtiaz
// contact no : 1111- 2222- 3333
// 2

//non-blocking 
console.log("1");
const fs = require("fs");
fs.readFile('hello.txt', "utf-8", (err, result) => {
    console.log(result);
});
console.log("2");

// darwin
// 1
// 2
// name: ayesha imtiaz
// contact no : 1111- 2222- 3333

//default threat pool size = 4

const os = require("os");
console.log(os.cpus().length);
// 8
