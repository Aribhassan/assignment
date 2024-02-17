// Array of places to visit
let placesToVisit: string[] = [
    "Greece",
    "Florida",
    "Egypt",
    "The great Wall",
    "Naran"
  ];
  
  // Print the array in its original order
  console.log("Original order:");
  console.log(placesToVisit);
  
  // Print the array in alphabetical order without modifying the original list
  console.log("\nAlphabetical order:");
  console.log([...placesToVisit].sort());
  
  // Show that the array is still in its original order
  console.log("\nOriginal order (unchanged):");
  console.log(placesToVisit);
  
  // Print the array in reverse alphabetical order without modifying the original list
  console.log("\nReverse alphabetical order:");
  console.log([...placesToVisit].sort().reverse());
  
  // Show that the array is still in its original order
  console.log("\nOriginal order (unchanged):");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  console.log("\nReversed order:");
  placesToVisit.reverse();
  console.log(placesToVisit);
  
  // Reverse the order of the list again to get back to the original order
  console.log("\nOriginal order (restored):");
  placesToVisit.reverse();
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order (changes the original list)
  console.log("\nSorted in alphabetical order(original list):");
  placesToVisit.sort();
  console.log(placesToVisit);

  // Sort the array in reverse alphabetical order (changes the original list)
  console.log("\nSorted in reverse alphabetical order(original list):");
  placesToVisit.sort().reverse();
  console.log(placesToVisit);
  
  
//   placesToVisit.sort((a, b) => {
//     return b.localeCompare(a)
//   });
//   console.log(placesToVisit);