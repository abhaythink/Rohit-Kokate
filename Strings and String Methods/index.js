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

// this 3 method is not remove white space in betwen he string
let str1="     Hello, World!     q";
console.log(str1.trim()); //remove white space from string
console.log(str1.trimStart());
console.log(str.split(""));


let str3="5";
console.log(str3.padStart(3,"0"));
console.log(str3.padEnd(2,"0"));


console.log(str1.replace("l","o"));
console.log(str1.replaceAll("l","o"));

//-----------capitalize first letter of each word ----------------

function capital(str) {
    return str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
}

let str4 = "hello world from Thinkitive";
console.log(capital(str4));


//-----------count frequency of words in string----------------
function countFrequency(str) {
    let words = str.split(" ");
    let frequency = {};
    
    words.forEach(word => {
        word = word.toLowerCase(); 
        frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return frequency;
}
 
let str5 = "Hello world hello from Thinkitive Thinkitive";
console.log(countFrequency(str5));