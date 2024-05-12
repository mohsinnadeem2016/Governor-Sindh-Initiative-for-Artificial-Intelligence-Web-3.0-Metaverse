var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//41
// Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
// Call the function
show_magicians(magicians);
//42
// Function to modify magician names
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Call the function
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
//43
// Call the function with a copy of the array
var new_magicians = make_great(__spreadArray([], magicians, true));
show_magicians(magicians);
show_magicians(new_magicians);
