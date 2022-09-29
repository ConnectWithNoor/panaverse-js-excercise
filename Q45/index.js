const carMaker = (manufacturer, model, ...args) => {
  const carSpecs = {
    manufacturer,
    model,
  };

  for (const [key, value] of Object.entries(...args)) {
    carSpecs[key] = value;
  }

  return carSpecs;
};

console.log(carMaker('Honda', 'City 2020', { color: 'red', 'roof-top': true }));
