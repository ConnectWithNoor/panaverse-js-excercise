let inviteList = ['Wahab', 'Naureen', 'Roha', 'Arham'];

inviteList.forEach((Invitee) => {
  console.log(
    `Hey ${Invitee}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});

// Invitees that won't make it.

console.log('Invitees that wont make it', inviteList[1], ',', inviteList[3]);

// modifing the inviteList;

inviteList = ['Wahab', 'Hamza', 'Roha', 'Hassan'];

inviteList.forEach((Invitee) => {
  console.log(
    `Hey ${Invitee}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});
