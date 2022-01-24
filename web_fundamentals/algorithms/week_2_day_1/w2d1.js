// JavaScript Library
// The Math library is built in, no need to import

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor); // --> 1
console.log(ceiling); // --> 4
console.log(random); // --> between 0 and 1(exclusive)


function d6() {
    var roll = Math.random();
    
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// execute function once - no loop
// random number 


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// write a function that returns a random answer from lifes answers
