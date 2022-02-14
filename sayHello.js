const myFirstname= "Thilde";

sayHello(myFirstname);

function sayHello (firstName){
console.log(`Hello ${firstName}`);
}

function presentPet(firstName,animalType,animalName){
    console.log(`My name is ${firstName}
    I have a ${animalType} called ${animalName}`);
}

presentPet(myFirstname, "Cockatiel", "Coco");
