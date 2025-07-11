enum name1{
    name1=1,
    name2,
    name3,
}

console.log(name1.name1); 
console.log(name1.name2); 
console.log(name1.name3); 

enum name2{
    name1=1,
    name2=3,
    name3,
}
console.log(name2.name1);
console.log(name2.name2);
console.log(name2.name3);

// name2.name1 = 10; // This will throw an error because enums are read-only in TypeScript
//Type Aliases 

type carName=string;
type modelName=string;
type carNumber=Number;

type carDetails={
    carName: carName;
    modelName: modelName;
    carNumber: carNumber;
}

let car1:carDetails = {
    carName: "Toyota",
    modelName: "Corolla",
    carNumber: 12345
};
console.log(car1);

// OR

let carname: carName = "Honda";
let modelname: modelName = "Civic";
let carnumber: carNumber = 67890;

let car2: carDetails = {
    carName: carname,
    modelName: modelname,
    carNumber: carnumber
};
console.log(car2);


interface CarDetails {
    carName: string;
    modelName: string;
    carNumber: number;
}

interface CarDetailsWithYear extends CarDetails {
    year: number;
}
let car3: CarDetailsWithYear = {
    carName: "Ford",
    modelName: "Mustang",
    carNumber: 54321,
    year: 2020
};
console.log(car3);