// Array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Great Barrier Reef"];

// Print original array
console.log("Original Order:", placesToVisit);

// Print array in alphabetical order without modifying original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show original array is still intact
console.log("Original Order after sorting:", placesToVisit);

// Print array in reverse alphabetical order without modifying original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

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
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);