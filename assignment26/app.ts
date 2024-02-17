// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color: string = 'green';

if (alien_color === 'green') {
    // If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    // If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    console.log("Player just earned 10 points."); 
}


let alien_color2: string = 'red'; // The alien's color is not green

// Write one version of this program that runs the if block and another that runs the else block.
if (alien_color2 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

