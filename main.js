// Primitive type (string, number, boolean, null, undefined, symbol)
// Variable is value.
var a = 1;

// a is mutated.
a = 2;
console.log(a); // a = 2

// Assign a's value to b.
var b = a;
console.log(a, b); // a = 2; b = 2

// If we change b to 3, a is still 2.
var b = 3;
console.log(a, b); // a = 2; b = 3

// Object type (array, user-defined objects)
// Object always creates reference.
// Variable is just a reference to that object, not actual object itself.

// Create an object and store it in memory.
// Also create a reference and assign this reference to personOne.
// personOne is now pointing to that object.
var personOne = {name: "Zico"};
console.log(personOne.name); // "Zico"

// personTwo now also has personOne's reference.
// So personTwo is also pointing to that object.
var personTwo = personOne
console.log(personTwo.name); // "Zico"

// Mutate that object through personOne.
personOne.name = "Daniel"
console.log(personOne.name); // "Daniel"

// Because personTwo is also pointing to that object,
// and that object is mutated through personOne,
// so personTwo's name field is changed too.
console.log(personTwo.name); // "Daniel"

// The questions is:
// if we mutate that object through personOne,
// how do we make personTwo unaffected,
// so that personTwo.name still prints "Zico?"

// The answer is:
// we need to create a new object based on the object personOne is pointing to.
// Then make personTwo point to that new object.
// Now personOne and personTwo are pointing to two separate objects.

var personOne = {name: "Zico"};

// Object.assign creates {}(a new object)
// and overwrite the new empty object with personOne's data.
var personTwo = Object.assign({}, personOne);

console.log(personOne.name, personTwo.name);

// Because personOne and personTwo are now pointing to different objects,
// the change of personOne has no impact on personTwo.
personOne.name = "Daniel";
console.log(personOne.name, personTwo.name);
