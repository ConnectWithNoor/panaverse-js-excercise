const colors = ['green', 'yellow', 'red'];
let points = 0;

const alienColor = colors[Math.floor(Math.random() * 3)];

if (alienColor === 'green') {
  points += 5;
  console.log("You've earned 5 juicy points");
} else {
  console.log('Oops, The alien color is', alienColor, 'Better luck next time.');
}
