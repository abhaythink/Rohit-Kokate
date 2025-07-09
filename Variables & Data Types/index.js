//---------------------------------------------- Let Reassing  
console.log("\n Let Reassing Practice");

let num1=10;
num1=20;
// let num1=20;
console.log(num1);

// ------------------------------------------------ Let Scoping 
console.log("\n Let Scoping Practice")
function sum(num1,num2){
    if(num1>=10 && num2<=20){
        let num3=num1+num2;
        return num3;
    }else{
        console.log("Wrong input"); 
    }
    // return num3; // bacause let in block scope if is one block outside the block we cannot access the variable
}
console.log(sum(10,20));


// ------------------------------------------------ Const Reassing

console.log("\n Const Reassing Practice");
const number=20;
// number=20;
// const number=10;
console.log(number);



//------------------------------------------------- Const Scoping
console.log("\n Const Scoping Practice");
// let a=20;
function multi() {
    const first=20;
    const secound=30;
    if(first<=20 && secound>=30){
        const third=first*secound;
        return third;
    }else{
        console.log("Wrong input");
    }
    // return third;// bacause const in block scope if is one block outside the block we cannot access the variable
}

// console.log(first);

console.log(multi());
// console.log(a);



//---------------------------------------------- Var reassing

console.log("\n Var Reaasing Practice");

var str1="Rohit Kokate";
console.log("Before reassing",str1);

// After redeclaring
var str1="Hello";
console.log("After redeclaring",str1);

// After reassing
str1="Thinkitive";
console.log("After reassing",str1);


//--------------------------------------------- Var Scoping

console.log("\n Var Scoping Practice");
function scope(){
    var str2="Hello";

    if(str2=="Hello"){
        var str3=str2+" World !"
    }else{
        console.log("Wrong input");
        
    }
    console.log(str3);
    return str3;  // var is a function scope we can use and access anywhere in the function we cannot access outside the function
}
// console.log(str3);

console.log(scope());


//------------------------------------------- Data Types and Typeof
console.log(" \n \nNumber Data Type Practice");
let value=20;               //Number
let val=20.0;
console.log("Number value is",value);
console.log("Type is",typeof(value)," \nSecound variable is",typeof(val));


console.log("\nUndefined Data Type  Practice");
let undef;
console.log(undef);
console.log(typeof(undef));


console.log("\n Null Data Type Practice");
let val2=null;
console.log(val2);
console.log(typeof(val2));

console.log("\n NAN Data type practice");
let val3=NaN;
console.log(val3);
console.log(typeof val3); 

console.log("\n String Data Type Practice");
let str4="Hello";
console.log(str4);
console.log(typeof str4);

console.log("\n Boolean Data Type Practice");
let Bool=true;
console.log(Bool);
console.log(!Bool);
console.log(typeof Bool);


console.log("\n object Data Type Practice \n");

let val4={
    name:"ROhit Kokate",
    address:{
        post:"Somthane",
        taluka:"Sinner",
        dist:"Nashik"
    },
    age:20,
}
console.log(val4);
console.log(val4.address);
console.log("Type is",typeof val4);


