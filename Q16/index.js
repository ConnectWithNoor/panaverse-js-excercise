// Q15

const inviteList = ['Wahab', 'Hamza', 'Roha', 'Hassan'];

inviteList.forEach((Invitee) => {
  console.log(
    `Hey ${Invitee}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});

// Annoucement of new table found

console.info(
  `Hey guys, I've found a bigger table. Thinking if we can add few more people.`
);

inviteList.push('Abdul Rehman', 'Shafi', 'Ahmed');

inviteList.forEach((Invitee) => {
  console.log(
    `Hey ${Invitee}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});
