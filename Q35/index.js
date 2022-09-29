const animalList = ['Hamsters', 'Rabbits', 'Cats'];

animalList.forEach((animal) => {
  if (animal === 'Hamsters') {
    console.log('Hamester can run very fast');
  } else if (animal === 'Rabbits') {
    console.log('Rabbits love to eat carrots');
  } else if (animal === 'Cats') {
    console.log('Cats are friendly and loves their owner');
  }
});

console.log(`Common characters in the mentioned pets are: 
 * They all can be kept as a pet.
 * They all can run faster.
 * They all don't harm humans
`);
