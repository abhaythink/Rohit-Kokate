interface point{
    num1:number;
    num2:number;
}

let person:Partial<point>={};
let anu=person.num1=10;
console.log(anu);



interface Person{
    name1:string;
    age:number;
}
let car: Required<Person> = {
    name1:"Rohit",
    age:20
}
console.log(car);

// console.log(p);

const person1:Record<string,number>={
    age:29,
    firstpass:2021,
    secpasss:2022
}
console.log(person1);

const n:Omit<Person,"age">={
    name1:"rohit"
};

console.log(n);

const pickup:Pick<Person,"name1">={
    name1:"Rohit Kokate"
}
console.log(pickup);
