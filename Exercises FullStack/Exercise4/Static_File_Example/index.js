//// **** Node.js File System Module ****
/*The Node.js file system module allows you to work with the file system on your computer.
To handle file operations like creating, reading, deleting, etc., 
Node.js provides an inbuilt module called FS (File System). */
/*Uses:
Read Files
Write Files
Append Files
Close Files
Delete Files*/

/*Key Features
- Asynchronous and Synchronous Methods: Provides both non-blocking and blocking methods 
    for various file operations.
- Error Handling: Includes robust error handling to manage issues such as file not 
    found or permission errors.
- Directory Management: Allows creation, deletion, and listing of directories.*/


////To include the File System module, use the require('fs') method
var http = require('http'); //npm install http
var fs = require('fs'); //npm install fs
//const { resolve } = require('path');

// // ////-----------------------------------------------------------------------------
// //// **** Read File ****
// //// Creat a Text File input.txt
// /*(Asynchronous approach:called non-blocking functions as 
// it never waits for each operation to complete like update, delete, insert, rather it executes 
// all operations in the first go itself.)*/
// // Asynchronous read
// fs.readFile("input.txt", function (err, data) { 
//   //(err) if there is otherwise print (data) represent the file content  
//   if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
// });
// // ////--------------------------------------------------
// // /*(Synchronous approach:called blocking functions as 
// //    it waits for each operation to complete)*/
// // // //Synchronous read
// const data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// /* If your operations are not doing very heavy lifting like querying huge data from DB 
// then go ahead with Synchronous way otherwise Asynchronous way.*/


// // ////-----------------------------------------------------------------------------
/* **** Open a File ****
The fs.open() method is used to create, read, or write a file. 
The fs.readFile() method is only for reading the file and 
fs.writeFile() method is only for writing to the file, 
whereas fs.open() method does several operations on a file. */

/*Syntax: fs.open(path, flags, mode, callback) 
Parameters:
 - Path: It holds the name of the file to read or the entire path
 - Flags: Flags indicate the behavior of the file to be opened. 
        All possible values are ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).
        r : Opening a file for reading. 
        r+ : Opening a file for both reading and writing
        a: Open the file to append
        https://www.geeksforgeeks.org/node-js-fs-open-method/
 - Mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default 
        as readwrite.
 - callback: It is a callback function that is called after open a file. 
    It takes two parameters
    - Err: If any error occurs.
    - fd: This is the file descriptor returned by fs.open() method, A file descriptor is a reference to an open file.

*/
// // Asynchronous - Opening File
// console.log("opening file!");
// let myFile=fs.open("input.txt", "r+", function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File open successfully: "+fd);
// });


////-----------------------------------------------------------------------------
// /* Reading a File using fs.Open
// The fs.read() method is used to read the file specified by fd. 
// This method reads the entire file into the buffer.

// Syntax: //(This approach not recommanded)
// fs.read(fd, buffer, offset, length, position, callback)

// Parameters:
// fd: This is the file descriptor returned by fs.open() method.
// buffer: This is the buffer that the data will be written to.
//        BUFFER is a region of memory used to store data temporarily 
//        while it is being transferred from one location to another
// offset: This is the offset in the buffer to start writing at.
// length: This is an integer specifying the number of bytes to read.
// position: This is an integer specifying where to begin reading from in the file. 
//         If the position is null, data will be read from the current file position.
// callback: It is a callback function that is called after reading of the file. 
//     It takes two parameters:
//         err: If any error occurs.
//         data: Contents of the file.
// */
// //(This approach not recommanded)

// const buf = new Buffer(1024);  // preserve location on memory with size 1028

// console.log("opening an existing file");
// fs.open("input.txt", "r+", function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     //console.log("File opened successfully!");
//     //console.log("start reading the file");
    
//     // read bufer from index 0 to length, start from index 3
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//              console.log(err);
//         }
//         //console.log(bytes + " bytes read"); //print the size in bytes 
//         // Print only read bytes to avoid junk.
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });

// ////-----------------------------------------------------------------------------
//  /* Reading File using fs.readFile 
//     fs.readFile() to read the 'input.txt' file. 
//     The 'utf8' argument specifies the file's character encoding. 
//     The function processes the file content after it's read. 
//     If an error occurs, it's captured and logged to the console.
//  */

//  fs.readFile('input.txt', 'utf8', function(err, data) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// // ////-----------------------------------------------------------------------------
// /* Reading JSON files
// JSON files, great for structured data storage, can be easily converted into JavaScript objects,
// The fs.readFile() function is used here to read 'data.json'. In the callback, if no errors are encountered, 
// the file content is parsed using JSON.parse() to transform it into a JavaScript object. The resultant object (jsonData) 
// is then logged to the console. 
// */

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const jsonData = JSON.parse(data);
//   console.log('JSON content:', jsonData);
// });

// ////-----------------------------------------------------------------------------
// /*  **** Writing to a File ****
// This method will overwrite the file if the file already exists. 
// The fs.writeFile() method is used to asynchronously write the specified data to a file. 
// By default, the file would be replaced if it exists. The ‘options’ parameter can be used 
// to modify the functionality of the method.

// Syntax: fs.writeFile(path, data, options, callback)
// Parameters:
// path: It is a string, Buffer, URL, or file description integer that denotes the path of the 
//         file where it has to be written. Using a file descriptor will make it behave similarly 
//         to fs.write() method.
// data: It is a string, Buffer, TypedArray, or DataView that will be written to the file.
// options: It is a string or object that can be used to specify optional parameters that will 
//         affect the output. It has three optional parameters:
//         - encoding: It is a string value that specifies the encoding of the file. 
//             The default value is ‘utf8’.
//         - mode: It is an integer value that specifies the file mode. The default value is 0o666.
//         - flag: It is a string value that specifies the flag used while writing to the file. 
//             The default value is ‘w’.
// callback: It is the function that would be called when the method is executed.
//         - err: It is an error that would be thrown if the operation fails.*/

        // console.log("writing into existing file");
        //                                                             // Callback function
        // fs.writeFile("input.txt", "My new writing inside input.txt","utf8", function (err) {
        //     if (err) {
        //         return console.error(err);
        //     }
        
        //     console.log("Data written successfully!");
        //     console.log("Let's read newly written data");
        
        //     // fs.readFile("input.txt", function (err, data) {
        //     //     if (err) {
        //     //         return console.error(err);
        //     //     }
        //     //     console.log("Asynchronous read: " + data.toString());
        //     // });
        // });
////-----------------------------------------------------------------------------
/* **** Appending to a File ****
The fs.appendFile() method is used to synchronously append the data to the file.

Syntax:
fs.appendFile(filepath, data, options, callback); 
// OR
fs.appendFileSync(filepath, data, options);

Parameters:
- filepath: It is a String that specifies the file path.
- data: It is mandatory and it contains the data that you append to the file.
- options: It is an optional parameter that specifies the encoding/mode/flag.
- Callback: Function is mandatory and is called when appending data to file is completed. */



// // // // Append data to file (Asynchronously appending)
// let data1 = "\nNew line will be added to input.txt";
// fs.appendFile(
//     "input.txt", data1, "utf8",
//     // Callback function
//     function (err) {
//         if (err) //throw err;
//         {console.log(err);}
//         // If no error
//         console.log("Data is appended to input.txt file successfully.");
//     }
// );

// ////OR ---------------------------------

// let data2 = "\nAnother a New line (2) will be added to input.txt";
// // // Append data to file (synchronously appending)
// fs.appendFileSync("input.txt", data2, "utf8");
// console.log("Data is appended to file successfully.");

////-----------------------------------------------------------------------------        
/* **** Closing the File ****
The fs.close() method is used to asynchronously close the given file descriptor 
thereby clearing the file that is associated with it. This will allow the file descriptor to be reused for other files. 
Calling fs.close() on a file descriptor while some other operation is being performed on it may lead to undefined behavior.

Syntax: fs.close(fd, callback)
Parameters:
- fd: It is an integer that denotes the file descriptor of the file for which to be closed.
- callback: It is a function that would be called when the method is executed.
        err: It is an error that would be thrown if the method fails. */

// // open the file first and Get the file descriptor of the given path 
// fd = fs.openSync("input.txt"); 
// console.log(">>> File is opened and the file descriptor is : ", fd); 

// /* *** Delay using setTimeout alone *** */ 

// setTimeout(myFun, 5000);
// function myFun(){

// ////-----------------------------------------------
// // Close the file descriptor    
//   fs.close(fd, function (err) { 
//       if (err) 
//         console.error('>Failed to close file', err); 
//       else { 
//         console.log("\n>>> File Closed successfully"); 
//       } 
//   });
// //   ////-----------------------------------------------  
//  }

////-----------------------------------------------------------------------------  
/* **** Delete a File ****
The fs.unlink() method is used to remove a file or symbolic link from the filesystem. 
This function does not work on directories, therefore it is recommended to use fs.rmdir() 
to remove a directory.

Syntax: fs.unlink(path, callback)
Parameters:
- path: It is a string, Buffer or URL which represents the file or symbolic link which has to be removed.
- callback: It is a function that would be called when the method is executed.
    - err: It is an error that would be thrown if the method fails.
*/

// console.log("deleting an existing file");
// fs.unlink("temp.txt", function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File deleted successfully!");
// });

////-----------------------------------------------------------------------------
//// Read the Html Files
// //// inappropriate syntax: ERROR  
// fs.readFile('myWebPage.html', function(err, data) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data); // will print the buffer address 
//   });
////-------------------------------------------
// //fs.read with html file (as a response) in server 
// http.createServer(function (req, res) {
//     //fs.readFile() method, passing it the file path, encoding and a callback function 
//     // that will be called with the file data (and the error):
//   fs.readFile('myWebPage.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
// console.log("http://127.0.0.1:8080/");
////-------------------------------------------
// // // read from html files (two files or more) 
//  var url = require('url'); //The URL module splits up a web address into readable parts.

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true); /*create QUERY, parse an address with 
//   the url.parse() method, and it will return a URL object with each part of the address */

//   //"." becuase the files in the same project's path.
//   var filename = "."+ q.pathname;  
//   // change the path to "./temp" and see the different"

//   /* PATHNAME is the path section of the URL (if there is), that comes after the host and before the query, 
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


