    /*

    PROTOTYPES
    
    1.  Every constructor function has a property on it called "prototype", which is an object.
    2.  The prototype object has a property on it called "constructor", which points back to the constructor function
    3.  Anytime an object is created using the "new" keyword, a property called __proto__ gets created,
        linking the object and the prototype property of the constructor function.
    4.  That means ALL objects created using that specific constructor function will get to use all that is inside
        the prototype property in the constructor function, whenever we add something to it.
    */
    /* THE ABOVE LOOKS SOMETHING LIKE THIS:

    var Javascript= {
        functions: {
            normal functions: blabla ,
            constructor functions: {
*********** prototype: {
            constructor: ****original constructor function****

            }
        }

        var newObject = new CREATEOBJECT("property1","property2");
        newObject = {
            property1:  ,
            property2:  ,
            __proto__: **THIS LINKS newObject TO THE *****prototype property (above) of the constructor function used to create this object**
        }

        IF WE WERE TO ADD PROPERTIES, OR METHODS TO OUR PROTOTYPE PROPERTY IN OUR CONSTRUCTOR FUNCTION IT WOULD LOOK LIKE THIS:

        Person.prototype.isStupid: true;

        newObject.isStupid;  // true;
        newAnotherObject.isStupid; //true;

        HOW WERE WE ABLE TO ACCESS PROPERTIES ON THE PROTOTYPE??
        __proto__

        THIS IS WHY ALL THIS IS USEFUL.

        */

    //this is the constructor function
    function Person(name) {
        this.name = name;
    }
    //this is an object created from the Person constructor
    var elie = new Person("Elie");
    var colt = new Person("Colt");

    //since we used **new**, we have established a link
    //between the object and the prototype property
    //we can access that property using __proto__
    
    elie.__proto__ === Person.prototype; //true
    colt.__proto__ === Person.prototype; //true

    //the Person.prototype object also has a property
    //called constructor, which points back to the function

    Person.prototype.constructor === Person; // true