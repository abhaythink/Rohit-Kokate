let obj1 = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001"
    },
    mobNo: 1234567890,
    hobbies: ["reading", "traveling", "swimming"]
};



let arr1 = ["apple", "banana", "cherry", "date", "elderberry"];
// For loop using array
console.log("------------For loop using array------------");
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
// we cannot iterarte the object using simple For loop 


console.log("\n --------For in loop using Object------------");

// For in loop using object
for (let key in obj1) {
    console.log(`${key}: ${obj1[key]}`);
}

//for loop using array
console.log("\n --------For in loop using array  ------------");
for (let i in arr1) {
    console.log(arr1[i], " index is " + i);
}

console.log("\n --------For in loop using array iterating char ------------");
for (let i in arr1) {
    for (let j in arr1[i]) {
        console.log(`arr1[${i}][${j}] = ${arr1[i][j]}`);
    }
    // console.log(arr[i], " index is " + i);
}



// For of loop using array
console.log("\n --------For of loop using array------------");
for (let value of arr1) {
    for (let char of value) {
        console.log(char);
    }
}

// For of loop using object
console.log("\n --------For of loop using object------------");
for (let key of Object.keys(obj1)) {
    console.log(key + ": " + obj1[key]);
}

let str = "Hello World";
for (let char of str) {
    console.log(char);
}

// we can iterate the String using simple For in loop nut it will return the index of the character
// for(let char in str){
//     console.log(char);
// }

//While loop using array
console.log("\n --------While loop using array------------");
let i = 0;
while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}

//while loop using object
console.log("\n --------While loop using object------------");
let keys = Object.keys(obj1);
let j = 0;
while (j < keys.length) {
    let key = keys[j];
    console.log(`${key}: ${obj1[key]}`);
    j++;
}


// Do while loop using array
console.log("\n --------Do while loop using Object------------");
let ij = 0;
do {
    let key = keys[ij];
    console.log(`${key}: ${obj1[key]}`);
    ij++;
} while (ij < keys.length);


// Do while loop using object
console.log("\n --------Do while loop using array------------");
let a = 0;
do {
    console.log(arr1[a]);
    a++;
} while (a < arr1.length);



//  Write a function that reverses an array using loops

console.log("Reverse array using for loop");

function reverseArray(arr) {
    for (let a = arr.length - 1; a >= 0; a--) {
        console.log(arr[a]);

    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArray(arr);

console.log("Reverse array using for of loop");
function reverseArrayForOf(arr) {
    let array = [];
    for (let value of arr) {
        array.unshift(value);
    }
    console.log(array);

}
reverseArrayForOf(arr);

console.log("Reverse array using for in loop");
function reverseArrayForIn(arr) {
    let array = [];
    for (let i in arr) {
        array.unshift(arr[i]);
    }
    console.log(array);

}
reverseArrayForIn(arr);


console.log(arr.length);
