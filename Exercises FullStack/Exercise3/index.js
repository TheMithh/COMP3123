
// Importing http module 
var http = require('http');

// // Creating http Server
// http.createServer(function (req, res) {
//     // *** Send the HTTP header *** 
// /* The `response.writeHead()` property, introduced in Node.js, 
// is part of the ‘http‘ module. It is used to send a response header 
// to the incoming request. The status code represents a 3-digit HTTP 
// status code (e.g., 404), and the headers parameter contains the response headers.
//  Optionally, a human-readable statusMessage */
//     // HTTP Status Code (200): It accepts the status codes that are of number type.
//     // Content Type (text/plain): is string format (accepts 'text/html' or 'application/json;charset=utf-8' for jason format )
//     // Calling response.writeHead method 
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   //Send the response body as Hello World!
//   res.end('Hello World!');
// }).listen(8080); //the server object listens on port 8080
// /* The IP address 127.0. 0.1 is called a loopback address. 
// Packets sent to this address never reach the network but are looped through 
// the network interface card only. */
// console.log('Server running at http://127.0.0.1:8080/');

// // //--------------------------------------------------------------------------
// // Setting up PORT outside server 
// // whatever is in the environment variable PORT2, or 3000 if there's nothing there.
// const PORT2 = process.env.PORT || 3000;
 
// // Creating http Server 
// var httpServer2 = http.createServer(
//     function (req, res) {
//         const body = '<h1>hello COMP3123</h1>';
 
//         // Calling response.writeHead method 
//           res.writeHead(200, {'Content-Type': 'text/html'});
//         //Send the response body as Hello World!
//           res.end(body);
//     });
 
// // // Listening to http Server (assigning the port to the server) 
// httpServer2.listen(PORT2,
//     () => {
//         console.log("Server running at http://127.0.0.1:3000/");
//     });

// ////--------------------------------------------------------------------------

// const PORT3 = process.env.PORT || 2020;
 
// const httpServer3 = http.createServer(

//     function (req, res) {
//       //// we can send the message directly 
//         res.write('Hello world!');
//         res.end();
//     }
// )
//     //// listening directly 
//     .listen(PORT3, error => {
//         // Print port in substitiuton 
//         console.log(`Server listening on port ${PORT3}`);
//         console.log(error); //if there is any unexpectd error. print the error 
//         console.log("Server running at http://127.0.0.1:2020/");
//     });

////--------------------------------------------------------------------------
// //// using URLs (under req parameter) and display JS opjects on the server
// myCars=["Mazda","BMW","Toyota","Ford"]

// http.createServer(function (req, res) {

// //req.url returns the request url for any request made to it.
//    // if http://127.0.0.1:8082/ 
//    //Send the response body as "Welcome"
//   if(req.url=="/")
//     { res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('Welcome');} 
//   // if http://127.0.0.1:8082/hello 
//    //Send the response body as "<h1>Hello World!</h1>"
//   if(req.url=="/hello")
//     { res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('<h1>Hello World!</h1>');} 
//    // if http://127.0.0.1:8082/name 
//    //Send the response body as "<h1>Mohammed</h1>"
//   if(req.url=="/name")
//     { res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('<h1>Mohammed</h1>');} 
//      // if http://127.0.0.1:8082/cars 
//    //Send the response body as "myCars" in normal order
//    if(req.url=="/cars")
//     { 
//       res.setHeader('Content-Type', 'application/json;charset=utf-8');
//       ////The JSON. stringify() method converts JavaScript objects into strings.
//       return res.end(JSON.stringify(myCars))
//     } 
//          // if http://127.0.0.1:8082/carssort 
//    //Send the response body as "myCars" in sort order
//    if(req.url=="/carssort")
//     { 
//       res.setHeader('Content-Type', 'application/json;charset=utf-8');
//       myCars=myCars.sort();
//       return res.end(JSON.stringify(myCars))
//     } 
//    // if http://127.0.0.1:8082/carsrev 
//    //Send the response body as "myCars" in revers order
//    if(req.url=="/carsrev")
//     { 
//       res.setHeader('Content-Type', 'application/json;charset=utf-8');
//       myCars.reverse();
//       return res.end(JSON.stringify(myCars))
//     } 
 
// }).listen(8082) //the server object listens on port 8082

// console.log('Server running at http://127.0.0.1:8082/');



////--------------------------------------------------------------------------
// using req.method
let person = [
  {id:1,firstName: "Mohammed",lastName: "Doe",age: 40, job: "IT"},
  {id:2,firstName: "Smith",lastName: "Jay",age: 50, job: "marketing"},
  {id:3,firstName: "John",lastName: "Doe",age: 45, job: ""},
  {id:4,firstName: "Sara",lastName: "Ali",age: 35, job: "finance"},
]
// // make loop
for (const [key, value] of Object.entries(person)) {console.log(key, value);} 
for (const [key, value] of Object.entries(person)) {console.log(key, value.firstName);} 

// const PORT4 = process.env.PORT || 8082

// const httpServer4 = http.createServer(function (req, res) {
// //The req.method property contains a string corresponding to the HTTP method 
// //of the request which can be either GET, POST, PUT, DELETE, etc. 
// /* HTTP defines a set of request methods to indicate the desired action to be 
// performed for a given resource. So here we specify request methods is GET, otherwise show 405  */
//   if (req.method !== 'GET') {
//       res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
//   } else {

//       //http://localhost:8082/
//       if (req.url === '/') {
//           res.end("<h1>Hello World</h1>")
//       }
//       //http://localhost:8082/hello
//       if (req.url === '/hello') {
//           res.write("<h1>Hello</h1>")
//           res.end()
//       }

//        //http://localhost:8082/users
//       if (req.url === '/users') {
//           res.setHeader('Content-Type', 'application/json;charset=utf-8');
//           return res.end(JSON.stringify(person))
//       }
//   }
//   // below statment if you want to run the server just one time
//   // res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
// });

// httpServer4.listen(PORT4, () => {
//   console.log(`Server listening on port ${PORT4}`);
// })

////--------------------------------------------------------------------------
////host a Node.js app that listens on multiple ports?
/* To host a Node.js app that listens on multiple ports, 
you can use the http module's createServer() method to 
create multiple server instances, each listening on a 
different port. Here's an example:*/
 
// // Create server 1 listening on port 8080 
// const server1 = http.createServer((req, res) => { 
//   res.statusCode = 200; 
//   res.setHeader('Content-Type', 'text/plain'); 
//   res.end('Hello from server 1'); 
// }); 
// server1.listen(8080, () => { 
//   console.log('Server 1 running at http://localhost:8080/'); 
// }); 
 
// // Create server 2 listening on port 8081 
// const server2 = http.createServer((req, res) => { 
//   res.statusCode = 200; 
//   res.setHeader('Content-Type', 'text/plain'); 
//   res.end('Hello from server 2'); 
// }); 
// server2.listen(8081, () => { 
//   console.log('Server 2 running at http://localhost:8081/'); 
// }); 

////--------------------------------------------------------------------------
////--------------------------------------------------------------------------
// // read from file 
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true); /*create QUERY, parse an address with 
//   the url.parse() method, and it will return a URL object with each part of the address */
//   var filename = "." + q.pathname; 
//   /* PATHNAME is the path section of the URL, that comes after the host and before the query, 
//   including the initial slash if present. for example: http://GeorgeBrown.ca/Welcome/hello 
//   pathname here is [Welcome/hello] in our example the pathname is only file name
//   */ 
//   fs.readFile(filename, function(err, data) {
//    /* function(err, data): is a callback function is called after reading the file. 
//     It takes two parameters: err: If any error occurred, data: Contents of the file.
//     this function return Value: It returns the contents/data stored in file or error if any.*/

//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// console.log("http://localhost:8080/file1.html")
// console.log("OR")
// console.log("http://localhost:8080/file2.html")