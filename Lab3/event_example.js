const events = require("events")

var myEmitter = new events.EventEmitter()

//1
myEmitter.on("hi", () => {
    console.log("Hello")
})

myEmitter.emit("hi")
myEmitter.emit("hi")
myEmitter.emit("hi")

//2
var greetMe = (name) => {
    console.log(`Hello, ${name}`)
}

myEmitter.addListener("hello", greetMe)

myEmitter.emit("hello", "Pritesh")
myEmitter.emit("hello", "Pritesh")
myEmitter.emit("hello", "Pritesh")

//3
myEmitter.on("sweet", (name) => {
    console.log(`Sweet, ${name}`)
})

myEmitter.emit("sweet", "Heart")

//Event not exist
myEmitter.emit("goodbye") //Nothing will happen

//4
myEmitter.once("bye", () => {
    console.log("See you next time. Sweet dreams")
})

myEmitter.emit("bye")
myEmitter.emit("bye")