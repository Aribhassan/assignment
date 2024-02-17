"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create objects for each famous mountain
const mountains = [
    {
        name: "Mount Everest",
        height: 8848,
        country: "Nepal/China"
    },
    {
        name: "K2",
        height: 8611,
        country: "Pakistan/China"
    },
    {
        name: "Kangchenjunga",
        height: 8586,
        country: "Nepal/India"
    },
    // Add more mountains as needed
];
// Print information about each mountain
console.log("Information about famous mountains:");
mountains.forEach(mountain => {
    console.log(`Name: ${mountain.name}`);
    console.log(`Height: ${mountain.height} meters`);
    console.log(`Country: ${mountain.country}`);
    console.log("----------------------------------");
});
