"use strict";
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`A ${size} shirt will be made with the message: "${message}".`);
}
// Call the function with default parameters
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Small shirt with custom message
