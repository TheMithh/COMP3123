var http = require("http");
const employeeModule = require('./Employee');

console.log("Lab 03 - NodeJS");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "error": `${http.STATUS_CODES[405]}` }));
    } else {
        if (req.url === '/') {
            // Display welcome message
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        } else if (req.url === '/employee') {
            // Display all employee details in JSON format
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employeeModule.getAllEmployees()));
        } else if (req.url === '/employee/names') {
            // Display employee names in ascending order
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employeeModule.getEmployeeNames()));
        } else if (req.url === '/employee/totalsalary') {
            // Display total salary of all employees
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "total_salary": employeeModule.getTotalSalary() }));
        } else {
            // Handle invalid URL paths
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "error": `${http.STATUS_CODES[404]}` }));
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
