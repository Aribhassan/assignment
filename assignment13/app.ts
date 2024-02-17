// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//FMOT (favourite mode of transportation)
let FMOT:Array<[Transportion:string, Brand:string]> = [] ;

FMOT.push(["Car", "Ford"]);
FMOT.push(["Cycle", "Hero Cycles"]);
FMOT.push(["bike", "Triumph"]);

FMOT.forEach(([Transportion, Brand]) => console.log(`I have a dream to own a ${Transportion} of ${Brand}.`) );