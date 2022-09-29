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

// Annoucement that I can only invite 2 people.

console.log(
  `Hey guys, I just came to know that your the new dinner table I was talking about won't arrive in time for the dinner. I can only have 2 people for tonight`
);

while (inviteList.length > 2) {
  const uninvited = inviteList.pop();
  console.log(
    `Hey ${uninvited}, I'm sorry I won't be able to invite you tonight for the dinner`
  );
}

inviteList.forEach((invitee) => {
  console.log(`Hey ${invitee}, I'll see you tonight at the dinner table.`);
});
