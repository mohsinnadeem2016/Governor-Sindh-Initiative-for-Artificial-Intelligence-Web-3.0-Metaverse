//14.
// Define an array of guests
var guests = ["Mohsin Nadeem", "Ali Jawwad", "Ameen Alam"];
// Print invitation messages to each guest
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you're invited to dinner."));
}
//15.
// Update the list to replace a guest who can't make it
var unableToAttend = "Kamran Khan";
var replacementGuest = "Hamza Khan";
var indexOfUnableToAttend = guests.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests[indexOfUnableToAttend] = replacementGuest;
    console.log("".concat(unableToAttend, " can't make it to dinner."));
    console.log("".concat(replacementGuest, " has been invited in their place."));
}
// Print invitation messages again
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you're invited to dinner."));
}
//16. 
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add new guests
guests.unshift("Imran Khan"); // Add at the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Amir Khan"); // Add in the middle
guests.push("Salman Khan"); // Add at the end
// Print new invitation messages
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ", you're invited to dinner."));
}
//17.
// Print message about limited space
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the remaining two guests
for (var _c = 0, guests_4 = guests; _c < guests_4.length; _c++) {
    var guest = guests_4[_c];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
// Empty the guest list
guests = [];
// Print the final empty list
console.log("Final guest list:", guests);
