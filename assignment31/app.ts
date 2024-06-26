// Add an if test to Exercise 28 to make sure the list of users is not empty

let usernames: string[] = []; // Empty array of usernames

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    let age: number = 30; // Set the age value here

    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
}
