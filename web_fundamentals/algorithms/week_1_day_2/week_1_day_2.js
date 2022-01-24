// Lesson 1

var a = 25;     
// 25
a = a - 13;
// 25-13=12
console.log(a/2);
// print 6

a = "hello";
console.log(a + "hello");
// print hello hello

// Lesson 2
for(var i = 0; i < 10; i++){
    console.log(i);
    // print 0 4 8
    i = i + 3;
}
console.log("outside the loop" + i);
// print outside the loop 8


// Lesson 3
function getTotal(arrayofNumbers) {

    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.lenght; i++) {
        sum += arrayofNumbers[i];
        console.log("the current sum is: ");
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);