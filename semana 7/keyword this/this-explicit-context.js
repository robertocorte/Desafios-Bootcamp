// Explicit Binding

/*
In a nutshell, we determine the context of **this** by using call, apply or bind.
All three are methods that can only be used by functions.

method              parameters             invoke immediately?
Call    infinite -  (thisArg, a,b,c,d...)        YES
Apply   2        -  (thisAr, [a,b,c,d...])       YES
Bind    infinite -  (thisArg, a,b,c,d...)        NO
*/


// EXAMPLE OF USING CALL

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

person.sayHi(); //this returns "Hi John"
person.determineContext(); // this returns true

person.dog.sayHello(); /*this returns undefined, because name was not declared in the dog function,
                        and **this** assumes its direct parent object: dog */
person.dog.determineContext(); // this returns false, as dog !== person.

//however, by using call for the last 2 statements we can do the following:

person.dog.sayHello.call(person); // we use the call method, and state that the person object should be used as **this**'s value
person.dog.determineContext.call(person); //  same as before. returns true, as person===person 



//  BIND EXAMPLE

//  bind is used when we want to define a function for later use, without giving it all the parameters, the way we do when using call or apply
//  the reason we need all parameters is because both call and apply get immediately invoked, while bind does not.

var colt = {
    firstName: "Colt",
    sayHi: function () {
        setTimeout(function(){
            console.log("Hi" + this.firstName);
        }.bind(this),5000)        
    }
}
colt.sayHi();

//  above we have the sayHi function, which, when called, executes the setTimeout method,
//  which in turn executes its argument (which in this case, is also a function)
//  and then executes the statement inside
//  notice that in order for **this** to not return undefined, we use bind(arg), where arg is this. The **this** refers to the colt parent argument    
