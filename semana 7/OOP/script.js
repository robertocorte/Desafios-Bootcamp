function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log("WOOF WOOF! " + this.name + " just barked!");
    }
}

var molly = new Dog("Molly", 6);
var johnesy = new Dog("johnesy", 7);

johnesy.bark();
molly.bark();



/*
    ***********************************************
    Multiple Constructors (functions)
    2 constructor functions, one for a Car, one for a Motorcycle
*/

function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

/* 
    There's a lot of duplication in this code. How could we reduce that?
    Can we borrow the Car function and invoke it inside the Motorcycle function?
    This is called refactoring our code. We can do it using call.
*/

function Motorcycle(make,model,year) {
    //using call
    Car.call(this,make,model,year)
    this.numWheels = 2;
}

/* or we could use apply and use **arguments** with it
because apply allows only 2 arguments, letting us refactor our code
*/

function Motorcycle(make,model,year) {
    //using apply
    //Car.apply(this,[make,model,year]) OR WE COULD USE THE BELOW
    Car.apply(this,arguments); //arguments is a special keyword, like this, or call, or new
    this.numWheels = 2
}
