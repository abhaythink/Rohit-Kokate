function printcode(code:number | String){
    console.log(`The code is: ${code}`);
}

printcode(404);
printcode("Not Found");


function getTime():number{
    return new Date().getTime();
}
console.log(getTime());


function printHello():void
{
    console.log("Hello, World!");
}

printHello();

// Function with parameters and return type
function multipy(a:number,b:number):number{
    return a * b;
}

console.log(multipy(5, 10));


//? optional parameters

function optionalPara(a:number,b:number,c?:number):void{
    if(c){
        console.log("sumof three parameters is: ", a + b + c);
        
    }
    console.log("sum of two numbers is: ", a + b);
     
}

optionalPara(5, 10); 
optionalPara(5, 10, 15); 


//function with default parameters
function defaultPara(a:number, b:number = 10):void {
    console.log("sum of two numbers is: ", a + b);
}
defaultPara(10);
defaultPara(10, 20); 


// Function with rest parameters
function restPara(a:number,b:number,...rest:number[]):void{
    console.log("first Para",a);
    console.log("second Para",b);
    let sum:number=rest.reduce((num1,num2)=>num1+num2,0);
    console.log(sum);
}
restPara(1, 2, 3, 4, 5); 

// casting 
let na:unknown="Heki";
let num2="10";
console.log(num2 as string);

console.log((na as string).length);
let a1=(<string>num2).length;
console.log(a1);
