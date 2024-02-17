// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.


let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

console.log("My favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\nStatements about my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
