// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guestList: string[] = [
    "abrar",
    "anas",
    "usman"
  ];
  
  
  function printInvitation(guestName: string) {
    switch(guestName) {
      case "abrar":
        console.log(`Dear ${guestName}, you are invited to dinner! please join us.`);
        break;
      case "anas":
        console.log(`Dear ${guestName}, you are invited to dinner! please join us.`);
        break;
      case "usman":
        console.log(`Dear ${guestName}, you are invited to dinner! please join us.`);
        break;
      default:
        console.log(`Invitation could not be generated for ${guestName}.`);
    }
  }
  
  guestList.forEach(guestName => printInvitation(guestName));
  