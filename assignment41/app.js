"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician's names
const magicians = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];
// Call the show_magicians function with the array of magician's names
show_magicians(magicians);
