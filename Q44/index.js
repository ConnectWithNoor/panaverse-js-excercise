const sandwichMaker = (...args) => {
  console.log(`The summary of the sandwich that is ordered is,`);
  args.forEach((item) => console.log(`${item}, `));
};

sandwichMaker('Cheese', 'Crust', 'Chicken', 'Peproni');
sandwichMaker('Crust', 'Peproni');
sandwichMaker('Cheese', 'Chicken', 'Peproni');
