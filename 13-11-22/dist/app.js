"use strict";
// const button = document.querySelector("button")!;
// function log (data: string) {
//     console.log("Clicked" + data);
// }
// button.addEventListener("click", log.bind(null, "hello"));
// CLASSES
// abstract class Student {
//     private skills: string[] = [];
//     constructor (public name: string, public readonly rollNo: number) {
//     }
//     abstract addSkill (skill: string): void;
//     getSkills () {
//         return this.skills;
//     }
// }
// class VStudent extends Student {
//     private canVolunteerIn: string[] = [];
//     static id: string = "abc-785"
//     constructor (name: string, rollNo: number) {
//         super(name, rollNo);
//     }
//     addSkill () {}
//     addVSkill (skill: string) {
//         this.canVolunteerIn.push(skill);
//     }
//     get willVollunteerIn () {
//         return this.canVolunteerIn;
//     }
//     set willVollunteerIn (skills: string[]) {
//         for (const skill of skills) {
//             if(!skill) {
//                 return;
//             }
//         }
//         this.canVolunteerIn = skills;
//     }
// }
// const student1 = new VStudent("Nadir", 1007);
// student1.addSkill("JavaScript");
// student1.addVSkill("Attendance");
// console.log(student1.getSkills());
// student1.willVollunteerIn = ["Apple", ""];
// console.log(VStudent.id);
class Human {
    constructor(name) {
        this.name = name;
    }
    static getObject(name) {
        if (this.object) {
            return this.object;
        }
        this.object = new Human(name);
        return this.object;
    }
}
const nadir = Human.getObject("Nadir");
const rehan = Human.getObject("Rehan");
console.log(nadir, rehan);
//# sourceMappingURL=app.js.map