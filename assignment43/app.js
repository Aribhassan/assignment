"use strict";
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Define an array of magician's names
let original_magicians = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];
// Create a copy of the original array
let modified_magicians = [...original_magicians];
// Call the make_great function to modify the copied array of magicians
modified_magicians = make_great(modified_magicians);
// Call the show_magicians function with each array to show the original and modified lists
console.log("Original Magicians:");
show_magicians(original_magicians);
console.log("\nModified Magicians:");
show_magicians(modified_magicians);
