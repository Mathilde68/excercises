"use strict";
const person ={
    firstName: "Thilde",
    age: 23,
    student: true
};

const person2={
    firstName: "Møfling",
    age: 25,
    student: true
};

person.lastName= "Laursen";
console.log(person.lastName);

person.lastName= undefined;
console.log(person.lastName);
console.log(person.middleName);


person.age++;

console.log(person);

