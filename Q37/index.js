const makeTshirts = (size = 'L', text = 'I love JavaScript') => {
  return `the size of the shirt should be ${size} and the text message printed on it must be ${text}`;
};

console.log(makeTshirts('L'));
console.log(makeTshirts('M'));
console.log(makeTshirts('S', 'Hala Madrid'));
