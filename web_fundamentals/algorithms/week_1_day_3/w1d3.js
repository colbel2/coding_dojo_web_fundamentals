
// Algo1
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// Algo2

for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

// Algo3

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for( i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives += 1;
    }
}
    
console.log("there are " + countPositives + " positive values");
