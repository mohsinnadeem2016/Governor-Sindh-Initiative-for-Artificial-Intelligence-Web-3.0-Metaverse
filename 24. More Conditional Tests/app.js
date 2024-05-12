// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Test 1: Are the strings equal?");
console.log(string1 == string2); // False
console.log("Test 2: Are the strings not equal?");
console.log(string1 != string2); // True
// Tests using the lower case function
var str1 = "Hello";
var str2 = "hello";
console.log("Test 3: Are the strings equal ignoring case?");
console.log(str1.toLowerCase() == str2.toLowerCase()); // True
// Numerical tests
var a = 5;
var b = 10;
console.log("Test 4: Is a equal to 5?");
console.log(a == 5); // True
console.log("Test 5: Is b not equal to 5?");
console.log(b != 5); // True
console.log("Test 6: Is a less than b?");
console.log(a < b); // True
console.log("Test 7: Is a greater than or equal to 5?");
console.log(a >= 5); // True
console.log("Test 8: Is b less than or equal to 10?");
console.log(b <= 10); // True
// Tests using "and" and "or" operators
var c = 15;
console.log("Test 9: Is c greater than 10 and less than 20?");
console.log(c > 10 && c < 20); // True
console.log("Test 10: Is a less than 5 or b greater than 15?");
console.log(a < 5 || b > 15); // False
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
// Test whether an item is in an array
console.log("Test 11: Is 3 in the array?");
console.log(array.indexOf(3) !== -1); // True
// Test whether an item is not in an array
console.log("Test 12: Is 6 not in the array?");
console.log(array.indexOf(6) === -1); // True
