// Corrected version with error handling
// Array of languages
let languages: string[] = ["JavaScript", "Python", "Java", "C++", "Swift"];
console.log("Languages:", languages);

// Intentional error: Trying to access an index out of bounds
let index = 10;
if (index < languages.length) {
    console.log("Language at index", index + ":", languages[index]);
} else {
    console.log("Index is out of bounds.");
}
