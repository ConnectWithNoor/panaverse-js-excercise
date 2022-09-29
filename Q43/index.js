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
  const greatMagicians = [];
  for (let i = 0; i < magiciansList.length; i++) {
    const phrase = `The great ${magiciansList[i]}`;
    greatMagicians.push(phrase);
  }

  return greatMagicians;
};

const greatMagiciansList = makeGreat(magicians);

console.log(magicians);
console.log(greatMagiciansList);
