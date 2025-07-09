let num1=12345686;
let num2=12.34445;
num1=num1.toString()
console.log("Number to String:", num1);
console.log(typeof num1);           //Number TO String Method in Number
num1=Number(num1);

console.log(num2.toFixed(2));      // This Method will return the 2 digit after decimal point
console.log(num2.toPrecision(2)); // This Method will return the 2 digit strting from number

console.log(num2.valueOf()); // This Method will return the value of number

console.log(num1.toExponential(2)); // This Method will return the number in exponential form

console.log(parseInt("10.5")); //it will return the integer value of number
console.log(parseFloat("10.54")); //it will return the float value of number
console.log(num1.toLocaleString()); //it will return the number in local format


//-------------------------------------- Math Methods ---------------------


console.log(Math.abs(-10)); //it will return the absolute value of number

console.log(Math.ceil(10.5)); //it will return the next integer value of number
console.log(Math.floor(10.5)); //it will return the previous integer value of number
console.log(Math.round(10.4)); //it will return the nearest integer value of number
console.log(Math.trunc(10.5)); //it will return the integer value of number by removing the decimal part
console.log(Math.PI.toFixed(2)); //it will return the value of PI in 2 decimal places
console.log(Math.sqrt(16)); //it will return the square root of number













