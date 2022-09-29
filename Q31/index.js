// Q30 (in question it was written to continue from Q28 but I think it's a typo and usernames are in Q30)

const usernames = ['Noor', 'Muzammil', 'Mudassir', 'Admin', 'Wahab'];

// adding No user check
usernames.splice(0, usernames.length);
// removing all the users

if (usernames.length <= 0) {
  console.log('We need to find some users!');
}
