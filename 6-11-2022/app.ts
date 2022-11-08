// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// function add (num1: number, num2: number) {
//     return num1 + num2;
// }

// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
// });

// number 5, 5.5, -7
// string "Apple"
// boolean true, false

// let person = "Nadir";

// let names: string[] = [];
// names.push("Nadir");
// type Customer = {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// };

// let customers: Customer[] = [];

// const person1: Customer = {
//     name: "Nadir",
//     age: 25,
//     hobbies: ["Sports"],
//     email: ""
// }
// person1.email = "abc@test.com";

// customers.push(person1);
// customers.push({
//     name: "Noman",
//     age: 25,
//     hobbies: ["Sports"],
//     email: ""
// });

// const roles: [number, string] = [0, "Admin"];

// roles.push("Ishaq");

// let data: string | number;

// data = "Ishaq";
// data = 5;

// function myFunc (num1: number, num2: number, cond: "add" | "subtract") {
//     if (cond === "add") {
//         return num1 + num2;
//     } else if (cond === "subtract") {
//         return num1 - num2;
//     }
// }

// console.log(myFunc(5, 8, "add"));

// Function Types

// let myFunc: (x: number, y: number) => number;

// function add (num1: number, num2: number): number {
//     return num1 + num2;
// }

// myFunc = add;