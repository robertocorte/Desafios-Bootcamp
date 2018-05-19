/*
**this** is a reserved keyword in JavaScript
The value of **this** is determined by how a function is called (function execution context)
It can be determined using four rules:
1.Global,
2.Object/Implicit,
3.Explicit,
4.New
*/

// Global Context

/*
When the keyword **this** is outside of a declared object, then there's no object defined containing **this**.
For instance, if we declared the object **person**, and inside it, put the keyword **this**,
then **this** would NOT be in the global context, but rather in the Object/Implicit context.

When not declared in an object it is attached to the Window object (window is a static object of the browser)
The same applies to global variables: they are attached to the Window object.
*/

//for example:
var person = "John";
console.log(window.person);
console.log(window.person == person); /* the expression evaluates to*/ true

/*
If **this** is inside a function, yet now inside a declared object, then it is still attached to the window object.
Declaring it inside a function is the same as creating a global variable.
*/

// ****************************
function createGlobalVariable() {
    this.person = "John";
}

// is the same as:

var person = "John";

// *******************************




