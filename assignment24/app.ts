// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// Tests for equality and inequality with strings
console.log("Tests for equality and inequality");
// True
console.log("hello" === "hello");
// False
console.log("hello" !== "hello");


// Tests using the lower case function
console.log("Tests using the lower case function");
// True
console.log("HELLO".toLowerCase() === "hello");
// False
console.log("WORLD".toLowerCase() === "hello");


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests");
// True
console.log(5 === 5);
console.log(10 > 5);
console.log(3 < 7);
console.log(10 >= 10);
console.log(5 <= 8);
// False
console.log(5 !== 5);
console.log(10 < 5);
console.log(3 > 7);
console.log(10 <= 5);
console.log(5 >= 8);


// Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' operators");
// True
console.log(5 > 3 && 10 < 15);
console.log(5 < 3 || 10 < 15);
// False
console.log(5 > 3 && 10 > 15);
console.log(5 < 3 || 10 > 15);


// Test whether an item is in an array
console.log("Test whether an item is in an array");
// True
const myArray: number[] = [1, 2, 3, 4, 5];
console.log(myArray.includes(3));
// False
console.log(myArray.includes(6));


// Test whether an item is not in an array
console.log("Test whether an item is not in an array");
// True
console.log(!myArray.includes(6));
// False
console.log(!myArray.includes(3));
