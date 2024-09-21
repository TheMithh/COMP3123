const fs = require("fs")
console.log("****** 1 ******")
fs.readFile("data.txt", (err, data) => {
    console.log(`DATA 1 : ${data.toString()}`)
})
console.log("****** 2 ******")
var data = fs.readFileSync("data.txt")
console.log(`DATA 2 : ${data.toString()}`)
console.log("****** 3 ******")

let message = "*Welcome to Node JS File programming"

//Write data to file
// fs.writeFile("output.txt", message, (err) => {
//     if(err){
//         console.log(err)
//         throw err
//     }

//     console.log("Message Saved...")
// })

//Append data to file
message = "New Data to append"
fs.appendFile("output.txt", message, (err) => {
    if(err){
        console.log(err)
        throw err
    }

    console.log("Message Appended...")
})