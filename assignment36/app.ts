// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
    console.log(`A ${size} size shirt will be made with the message: "${message}".`);
}

// Call the function
make_shirt("large", "I love TypeScript!");
