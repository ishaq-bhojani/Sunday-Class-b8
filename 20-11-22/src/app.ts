// INTERFACES

// type Person = {
//     name: string;
// };

// interface Person {
//     name: string;
// };

// interface Person {
//     name: string;
//     speak(sentence: string): void;
// }

// let nadir: Person;

// nadir = {
//     name: "Nadir",
//     speak(sentence: string) {}
// }



// class Human implements Person {
//     constructor(public name: string, private id: string) {}

//    speak(sentence: string): void {
       
//    }
// }

// ADVANCED TYPES

// Union types
// type Combined = string | number | boolean;

// let abc: Combined;

// Intersection types
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// type Creature = Bird & Animal;

// let abc: Creature;

// abc = {
//     name: "Hen",
//     flyingSpeed: 45,
//     runningSpeed: 20
// }

// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }
// interface Animal {
//     name: string;
//     runningSpeed: number;
// }

// interface Creature extends Bird, Animal {};


// TYPE GUARDS

// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// class Bird {
//     constructor(public name: string, public flyingSpeed: number) {}
// }
// class Animal {
//     constructor(public name: string, public runningSpeed: number) {}
// }

// type Creature = Bird | Animal;

// function log (creature: Creature) {
//     console.log(creature.name);
//     if (creature instanceof Animal) {
//         console.log("Running Speed: " + creature.runningSpeed);
//     }
//     if (creature instanceof Bird) {
//         console.log("Flying Speed: " + creature.flyingSpeed);
//     }
// }

// log(new Animal("Dog", 80));


