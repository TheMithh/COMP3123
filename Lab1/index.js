console.log("Hello");

var prompt = require("prompt-sync")({sigint:true});

var msg = prompt("Input your name: ")
console.log(msg);


var x = 10;
var y  = 5;

var z = x+y;
console.log(z);
console.log(x+y)
console.log(Math.pow(10,3));


var m = prompt("Input your mark: ");
if(m>=50 && m<= 100)
{
    console.log("Pass")
}
else
{
    console.log("Fail");
}

function myFun1();

function myFun2()
{return "Hello from my func2"};

var ret = myFun2();
console.log(ret);

function myFun3(a, b)
{return a+b};
console.log(myFun3(5, 3));

var name = "Gabriel";
console.log(name.length);
for(var i=0;i<name.length;i++){
    console.log(name.charAt(i));
}

var str = "How are you doing?";
var strArr=str.split(str);
for (var i=0; i<strArr.length;i++){
    console.log(strArr[i]);
}

var part1 = str.slice(4,8);
consolelog(part1);

var part1 = str.substr(4,3);
console.log(part1);

const pi = Math.pi;
console.log(pi)




