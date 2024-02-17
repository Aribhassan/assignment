"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = [
    "abrar",
    "anas",
    "usman"
];
function printInvitation(guestName) {
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
