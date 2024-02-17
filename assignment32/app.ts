// create a program that simulates how websites ensure that everyone has a unique username.

let current_users: string[] = ["Abrar", "Anas", "Usman", "Huzaifa", "Ahmed"]; // List of current usernames
let new_users: string[] = ["Usman", "Akbar", "farooq", "Gina", "Anas"]; // List of new usernames

for (let new_user of new_users) {
    let usernameExists: boolean = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    
    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
