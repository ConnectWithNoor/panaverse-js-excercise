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

const makeGreat = (magiciansList) => {
  for (let i = 0; i < magiciansList.length; i++) {
    magiciansList[i] = `The great ${magiciansList[i]}`;
  }
};

makeGreat(magicians);

console.log(magicians);
