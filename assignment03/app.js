"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "akbar ali";
let lowercaseName = personName.toLowerCase();
let uppercaseName = personName.toUpperCase();
let titlecaseName = personName.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(' ');
console.log(`lowercase: ${lowercaseName}`);
console.log(`uppercase: ${uppercaseName}`);
console.log(`titlecase: ${titlecaseName}`);
