const places = ['Venice', 'Istanbul', 'Paris', 'San Francisco', 'Rome'];

console.log('Array in original Form', places);

console.log('In alphabetic order (without mutating)', [...places].sort());

console.log('reverse order (without mutating)', [...places].reverse());

console.log('Array in original Form', places);

console.log('Array mutated to reverse', places.reverse());

console.log('Array back to original', places.reverse());

console.log('Array mutated to alphabetic order', places.sort());
