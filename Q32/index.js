const currentUsers = ['Noor', 'Muzammil', 'Mudassir', 'Admin', 'Wahab'];
const newUsers = ['Naureen', 'Roha', 'Noor', 'Hassan', 'Wahab'];

newUsers.forEach((user) => {
  if (
    currentUsers.some(
      (currentUser) => currentUser.toLowerCase() === user.toLowerCase()
    )
  ) {
    console.log(`Username ${user} already exists. Please try different.`);
  } else {
    console.log(`Username ${user} is available.`);
  }
});
