// Implicit/Object rule

// When this is INSIDE a DECLARED object its value will always be the closest parent object

var person = {
    name: "John",
    sayHi: function () {
        return "Hi" + this.name;
    },
    determineContext: function () {
        return this === person;
    }
}

/*
The value of the first **this** is the person object, since person is the closest parent object.
In place of this.name we could have person.name. 
The value of the second **this** is also the person object.

Also, notice that running the determineContext function will evaluate the condition to*/ true /*
because the value of **this** is indeed the person object. Hence, if this is person then person === person is */ true  

var person = {
    name: "John",
    sayHi: function () {
        return "Hi" + this.name;
    },
    determineContext: function () {
        return this === person;
    },
    dog: {
        sayHello: function () {
            return "Hello" + this.name;
        },
        determineContext: function () {
            return this === person;
        },
    }
}

/*
In this case, the first 2 **this** values are person, just as before.
However, the second **this** values evaluate to the dog OBJECT, not the person object.
Why? Because they are both inside the declared dog OBJECT, which is the closest parent object.
*/