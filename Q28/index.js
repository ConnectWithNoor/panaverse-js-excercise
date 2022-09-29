const age = Math.floor(Math.random() * 65); // random number generate between 0 to 65;

if (age < 2) {
  console.log('This person is a baby and the age is', age);
} else if (age >= 2 && age < 4) {
  console.log('This person is a toddler and the age is', age);
} else if (age >= 4 && age < 13) {
  console.log('This person is a kid and the age is', age);
} else if (age >= 13 && age < 20) {
  console.log('This person is a teenager and the age is', age);
} else if (age >= 20 && age < 65) {
  console.log('This person is a elder and the age is', age);
}
