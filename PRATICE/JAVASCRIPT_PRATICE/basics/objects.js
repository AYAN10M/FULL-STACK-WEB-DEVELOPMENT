// Method 1: By creating object using object literal
var person = {
    name: "Raj",
    age: 25,
    getDetails: function () {
        return this.name + " " + this.age;
    }
};

// Method 2: By creating instance of Object directly (using new keyword)
var objectname = new Object();

// Method 3: By using an Object constructor

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

var emp1 = new emp(1, "Raj", 1000);
var emp2;

// JavaScript Object Methods:-

// 1. Object.assign(target, source)
// This method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
Object.assign(emp2, emp1);

// 2. Object.create(proto, [propertiesObject])
// This method creates a new object with the specified prototype object and properties.

// 3. Object.defineProperty(object, propertyname, descriptor)
// This method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// 4. Object.defineProperties(object, descriptors)
// This method defines new or modifies existing properties directly on an object, and returns the object.

// 5. Object.entries(object)
// This method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop.

// 6. Object.freeze(object)
// This method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

// 7. Object.getOwnPropertyDescriptor(object, propertyname)
// This method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

// 8. Object.getOwnPropertyDescriptors(object)
// This method returns all own property descriptors of a given object.

// 9. Object.getOwnPropertyNames(object)
// This method returns an array of all properties (enumerable or not) found directly upon a given object.

// 10. Object.getOwnPropertySymbols(object)
// This method returns an array of all symbol properties found directly upon a given object.

// 11. Object.getPrototypeOf(object)
// This method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

// 12. Object.is(value1, value2)
// This method determines whether two values are the same value.

// 13. Object.isExtensible(object)
// This method determines if an object is extensible (whether it can have new properties added to it).
