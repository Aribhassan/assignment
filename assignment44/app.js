"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Define the function to create a sandwich
function make_sandwich(...ingredients) {
    console.log("Making a sandwich with:");
    for (let ingredient of ingredients) {
        console.log(`- ${ingredient}`);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function to create sandwiches with different ingredients
make_sandwich("bun", "Cheese", "mayo", "Tomato");
make_sandwich("Peanut Butter", "chocolate");
make_sandwich("chicken", "Swiss Cheese");
