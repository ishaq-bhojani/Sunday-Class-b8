
var rehan = {
    name: "Rehan Ahmed",
    age: 19,
    email: "abc@tect.com",
    greet: function () {
        console.log("Hello from " + this.name);
    }
};

rehan.phone = 9287654321;
// rehan.name = "Rehan";
delete rehan.age;
rehan.hobbies = ["Planting", "Video Games"];
rehan.address = {
    streetNo: 15,
    houseNo: 8
};
console.log(rehan);
rehan.greet();