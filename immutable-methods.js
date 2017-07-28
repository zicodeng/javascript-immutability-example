// In JavaScript, immutable methods include:
// concat(), filter(), map(), reduce()

var a = [1, 2 ,3];

// concat() is similar to push(),
// except that push() is mutable whereas concat() is immutable.
var b = a.concat(4);

console.log(a, b); // a: [1, 2, 3]; b: [1, 2, 3, 4]

// Returns a new array with 2 removed.
var c = b.filter(function(item) {
	return item !== 2;
});

console.log(b, c); // b: [1, 2, 3, 4]; c: [1, 3, 4]

var d = c.map(function(item) {
	return item + 1;
});

console.log(c, d); // c: [1, 3, 4]; d: [2, 4, 5]

// reduce() reduces an array to a single value.
var e = d.reduce(function(result, item) {
	return result + item;
});

console.log(d, e); // d: [2, 4, 5]; e: 11
