// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.




let guestList: string[] = [
  "abrar",
  "anas",
  "usman"
];

function printInvitation(guestName: string) {
  console.log(`Dear ${guestName}, you are invited to dinner! Please join us.`);
}

// Send invitations
guestList.forEach(guestName => printInvitation(guestName));

// One of the guests can't make it
const NotComing = "anas";
console.log(`Unfortunately, ${NotComing} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
let replacement = "zara";
let indexOfGuestWhoCantMakeIt = guestList.indexOf(NotComing);
if (guestList.includes(NotComing)) {
  guestList[indexOfGuestWhoCantMakeIt] = replacement;
}

console.log(`New guest list: ${guestList.join(", ")}`);

// Send second set of invitations
guestList.forEach(guestName => printInvitation(guestName));


// Inform about the bigger dinner table
console.log("\nGreat news! We've found a bigger dinner table!\n");

// Add one more guest to the end
let NewGuest = "ahmed";
guestList.push(NewGuest);

// Print invitation messages for the updated guest list
console.log("Updated set of invitations:");
guestList.forEach(guestName => printInvitation(guestName));