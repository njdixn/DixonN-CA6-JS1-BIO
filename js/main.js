// Hardcoded computer choiceas bear
const computerChoice = 'Bear';

// Prompt for players name
let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:');

// show player's name in console
let amessage = `You have entered: ${playerName}`;
console.log('The players name is ' + playerName); 

// Let's play message with players name
let letsPlayMessage = playerName;
    alert('Hi ' + letsPlayMessage + ' let\'s play!!');

// Ask player who they want to be
let playerChoice = prompt('Who are you: Bear, Ninja or Hunter?');

// Prep player's results
let resultMessagePlayer = playerName + ', you picked ' + playerChoice + '. ';

// Prep computer's results
let resultMessageComputer = 'The computer picked ' + computerChoice + '. ';

// varaible for the results to be displayed
let gameResult = '';

// Result in HTML
document.getElementById('gameResult').innerHTML =  resultMessagePlayer + '<br>' + resultMessageComputer;