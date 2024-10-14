//export value
exports.name="Hello";

//export function
exports.sum=function(a,b){return a+b;}

//list
exports.myCars=["Mazda","BMW","Ford"];

//export Class
class car{
    constructor(type)
    {this.type=type;}
    Model(){return this.type;}
}
exports.car=car

exports.myClass=class{ 
    constructor(age){
        this.age=age;
    }
Age(){ return this.age; }
}



