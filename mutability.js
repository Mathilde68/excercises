"use strict";
let person1 ={
    firstName: "Thilde",
    age: 23,
    student: true
};

const person2 ={
    firstName: "Thilde to",
    age: 32,
    student: true
};

let person3 = person1;
person3.firstName = "changed";
person3 = person2;
person2.firstName="also changed";
person1=person3;

console.log("person1:");
console.log(person1);

console.log("person2:");
console.log(person2);

console.log("person3:");
console.log(person3);

