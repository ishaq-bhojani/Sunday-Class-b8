
// var table = prompt("Write a number.");

// for (var i = 1; i <= 10; i++) {
//     console.log(table + " X " + i +" = " + i*table);
// }

// var cities = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
// var city = prompt("Write a city name");
// var found = false;

// for (var i = 0; i < cities.length; i++) {
//     if (city.toLowerCase() === cities[i].toLowerCase()) {
//         console.log("Found " + city);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log("Not Found " + city);
// }

/*
*
* *
* * *
* * * *
* * * * *
*/

// for (var i = 1; i <=5; i++) {
//     var star = "";
//     for (var j = 1; j <= i; j++) {
//         star = star + "* "; // * * * * *
//     }
//     console.log(star);
// }

var array = [[1, 2, 3], ["a", "b", "c"]];

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}