//14.
// Define an array of guests
let guests: string[] = ["Mohsin Nadeem", "Ali Jawwad", "Ameen Alam"];

// Print invitation messages to each guest
for (let guest of guests) {
    console.log(`Dear ${guest}, you're invited to dinner.`);
}
//15.
// Update the list to replace a guest who can't make it
let unableToAttend: string = "Kamran Khan";
let replacementGuest: string = "Hamza Khan";

let indexOfUnableToAttend: number = guests.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests[indexOfUnableToAttend] = replacementGuest;
    console.log(`${unableToAttend} can't make it to dinner.`);
    console.log(`${replacementGuest} has been invited in their place.`);
}

// Print invitation messages again
for (let guest of guests) {
    console.log(`Dear ${guest}, you're invited to dinner.`);
}
//16. 
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests
guests.unshift("Imran Khan"); // Add at the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Amir Khan"); // Add in the middle
guests.push("Salman Khan"); // Add at the end

// Print new invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, you're invited to dinner.`);
}
//17.
// Print message about limited space
console.log("Sorry, we can only invite two people for dinner.");

// Remove guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the remaining two guests
for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Empty the guest list
guests = [];

// Print the final empty list
console.log("Final guest list:", guests);
