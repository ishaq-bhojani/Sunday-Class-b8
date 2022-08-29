// function objCreator(name, id) {
//     var user = {}
//     user.name = name;
//     user.id = id;
//     return user;
// }

// function User (name, id) {
//     this.name = name;
//     this.id = id;
// }
// var user1 = new User("Rehan", 1234);

// User.prototype.greet = function () {
//     console.log(this.name + " says Hello.");
// }

// user1.greet();
// console.log(user1);

// var arr = [3];
// var arr2 = arr;
// arr2[0]++;
// console.log(arr);
// console.log(arr2);

var obj = {
    color: "white",
    length: "3cm",
    speed: "24 KM/h",
    "background-color": "black",
    "#456": "data"
};



for (var key in obj) {
    console.log(key);
}