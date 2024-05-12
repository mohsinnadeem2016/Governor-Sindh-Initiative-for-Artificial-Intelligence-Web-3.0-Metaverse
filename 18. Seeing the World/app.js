var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Great Barrier Reef"];
// Print original array
console.log("Original Order:", placesToVisit);
// Print array in alphabetical order without modifying original list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Show original array is still intact
console.log("Original Order after sorting:", placesToVisit);
// Print array in reverse alphabetical order without modifying original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show original array is still intact
console.log("Original Order after reverse sorting:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order again to get back to original order
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
// Sort array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
