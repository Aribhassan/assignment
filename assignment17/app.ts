// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

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
let NotComing = "anas";
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


// Inform about the smaller dinner table
console.log("\n The new dinner table won't arrive in time. We can only invite two people for dinner. \n");
  
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner due to new dinner table issue.`);
  }
  
// Print invitation messages for the two people still on the list
console.log("\nInvitations for the two remaining guests:");
guestList.forEach(guestName => printInvitation(guestName));
  
// Remove the last two names from the list
guestList.pop();
guestList.pop();
  
// Print the updated guest list to ensure it's empty
console.log("\nFinal guest list:", guestList);
  