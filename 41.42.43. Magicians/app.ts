//41
// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette"];

// Call the function
show_magicians(magicians);

//42
// Function to modify magician names
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Call the function
let great_magicians: string[] = make_great(magicians);
show_magicians(great_magicians);

//43
// Call the function with a copy of the array
let new_magicians: string[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(new_magicians);