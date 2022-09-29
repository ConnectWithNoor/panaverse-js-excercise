const magicians = [
  'David Copperfield',
  'Lance Burton',
  'Penn and Teller',
  'Ricky Jay',
];

const showMagician = (magiciansList) => {
  if (
    magiciansList &&
    typeof magiciansList === 'object' &&
    magiciansList.length >= 1
  ) {
    magiciansList.forEach((name) => console.log(name));
  } else {
    console.error('Only arrays with magician names are allowed');
  }
};

showMagician(magicians);
showMagician(12);
