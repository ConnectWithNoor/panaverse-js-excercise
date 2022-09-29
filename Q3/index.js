const username = 'noOr muHamMaD Khan';

const upperCasedUsername = username.toUpperCase();
const lowerCasedUsername = username.toLowerCase();

const titleCasedUSername = username
  .toLowerCase()
  .split(' ')
  .map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)} `;
  })
  .join('')
  .trim();

console.log(
  `The input: ${username}, uppercase: ${upperCasedUsername}, lowerase: ${lowerCasedUsername}, titlecase: ${titleCasedUSername}`
);
