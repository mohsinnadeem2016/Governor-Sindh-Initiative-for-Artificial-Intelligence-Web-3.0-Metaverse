// Array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print ordinal numbers
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    if (num === 1) {
        console.log(num + "st");
    }
    else if (num === 2) {
        console.log(num + "nd");
    }
    else if (num === 3) {
        console.log(num + "rd");
    }
    else {
        console.log(num + "th");
    }
}
