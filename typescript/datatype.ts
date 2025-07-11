//string, number, boolean, any, void, null, undefined

// Explicit type annotation
let firstname: string = "John";
console.log(typeof firstname);

// Implicit type annotation
let lastname = "Doe";
console.log(typeof lastname);

let num1: number = 10;
// num1="Rohit";   // this wiil cause an error because num1 is explicitly typed as a number
console.log(typeof num1);

let bool: boolean = true;
console.log(bool);

// Any type
let anytype: any = "Hello";
anytype = 10;
console.log(typeof anytype);



let undef: undefined = undefined; // undefined type
console.log(typeof undef);

let nulll: null = null;
console.log(typeof nulll);


// Void type
function greet(): void {
    console.log("Hello, World!");
}

greet();

let a12: string="10";
console.log(typeof a12); 


let nulltype:null=null;
console.log(typeof nulltype); 


let nevertype:never;

