//--------------String methods-------------------
let str = "Hello, World!";
console.log("length:", str.length); 

console.log(str.concat(" How are you?")); 
console.log(str.indexOf("l"));
console.log(str.charAt(0));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.substring(0,6));

console.log(str.slice(0,5));

// this method is not remove hr space in betwen he string
let str1="     Hello, World!     q";
console.log(str1.trim()); //remove white space from string
console.log(str1.trimStart());
console.log(str.split(""));


let str3="5";
console.log(str3.padStart(3,"0"));
console.log(str3.padEnd(2,"0"));


console.log(str1.replace("l","o"));
console.log(str1.replaceAll("l","o"));
