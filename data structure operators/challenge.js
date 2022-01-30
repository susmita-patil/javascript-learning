const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

//challenge 2
/*
console.log('Challenge 2');

//1.
for (const [no, str] of game.scored.entries()) {
  console.log(`Goal ${no + 1} : ${str}`);
}

//2.
const values = Object.values(game.odds);
let sum = 0;
for (const value of values) {
  sum += value;
}
console.log(sum);
console.log(`Average of odds : ${sum / values.length}`);

//3.

for (const [team, value] of Object.entries(game.odds)) {
  teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamstr}: ${value}`);
  //console.log(`${game[team]} , ${value}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5


*/

//challenge 1
/*console.log('Challenge 1');
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'peristic'];
console.log(players1Final);

//5. both approaches work
//const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals are scored`);
};

printGoals('davies', 'muller', 'kimminch');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('team1 will likely to win');
team1 > team2 && console.log('team2 will likely to win');
*/

//Coding challenge 3
/*
//1.
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

console.log(gameEvents.values());
const games = [...gameEvents.values()];
const events = new Set(games);
console.log(events);

//2.
gameEvents.delete(64);

//3.
//to get last key
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [key, value] of gameEvents) {
  const str = key >= 45 ? '[Second Half]' : '[First Half]';
  console.log(`${str} ${key} : ${value}`);
}
*/

//Coding Challenge 4
//strings
/*
console.log('coding challenge 4');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, r] of rows.entries()) {
    const [first, last] = r.toLowerCase().trim().split('_');
    //const str = first + last[0].toUpperCase() + last.slice(1);
    const str1 = `${first}${last.replace(last[0], last[0].toUpperCase())}`;

    console.log(`${str1.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
*/
