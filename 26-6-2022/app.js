var num = Math.floor(Math.random() * 10);

var guess = +prompt("Guess the number");

if (num === guess) {
    alert("You Win");
} else if (num + 1 === guess || num - 1 === guess) {
    alert("You were close " + num);
} else {
    alert("Correct number is : " + num);
}