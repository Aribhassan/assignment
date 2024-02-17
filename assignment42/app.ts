// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define the show_magicians function
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];

// Call the make_great function to modify the array of magicians
magicians = make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians);
