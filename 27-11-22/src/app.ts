// const elem = <HTMLInputElement>document.getElementById("input")!;

// elem.value

// GENERICS

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done");
//     }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// });

// const arr: Array<string | number> = ["abc", "xyz"]

// function merge<T extends object, U extends object> (objA: T, objB: U) {
//     return {...objA, ...objB}
// }
// const merged = merge({name: "nadir"}, {age: 30});
// console.log(merged.name);

// Decorators

// function Logger (data: string) {
//     return function (_: Function) {
//         console.log("Logging.... " + data);
//     }
// }

// function FillHTML (template: string, id: string) {
//     return function (_: Function) {
//         const ele = document.getElementById(id);
//         if(ele) {
//             ele.innerHTML = template;
//         }
//     }
// }

// @Logger("data")
// @FillHTML("<b>This is my Data</b>", "app")
// class Person {
//     name = "nadir";

//     constructor () {
//         console.log("Called");
//     }
// }

// const nadir = new Person();


// FUNCTION OVERLOADS
// type Combined = string | number;

// function add (a: string, b: string): string;
// function add (a: number, b: number): number;
// function add (a: Combined, b: Combined) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     } else {
//         throw Error("Types check kar");
//     }
// }
// add(1, 2).toFixed();
// add("abc", "def").split(" ");