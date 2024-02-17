// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

import { log } from "console";


let personName :string = "akbar ali";

let lowercaseName:string = personName.toLowerCase();
let uppercaseName:string = personName.toUpperCase();
let titlecaseName:string = personName.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(' ');

console.log(`lowercase: ${lowercaseName}`);
console.log(`uppercase: ${uppercaseName}`);
console.log(`titlecase: ${titlecaseName}`);
