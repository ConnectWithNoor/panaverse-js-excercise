const stringTest = 'Noor';
const numberTest = 10;
const arrayTest = ['Q24', 'Noor Muhammad', 'Panaverse'];

// String Tests
console.log(stringTest === 'Noor');
console.log(stringTest !== 'Noor');

console.log(stringTest.toLowerCase() === 'noor');
console.log(stringTest.toLowerCase() !== 'noor');

// Number tests
console.log(numberTest === 10);
console.log(numberTest !== 10);

console.log(numberTest > 9);
console.log(numberTest < 9);

console.log(numberTest === 10 && stringTest === 'Noor');
console.log((numberTest === 10) | (stringTest === 'Noor'));

// Array tests
console.log(arrayTest.includes('Q24'));
console.log(!arrayTest.includes('Q24'));
