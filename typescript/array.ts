//string array example

let arr:string[]=["apple", "banana", "cherry"];
console.log(arr);

for (let index:number = 0; index < arr.length; index++) {
    console.log(`Element at index ${index}: ${arr[index]}`);
}

arr.push("orange"); 
console.log("new array",arr); 

let arr3:number[]=[11,21,13,8,14,51,55,16,17]; //sort function dont work properly when there is a combination of single digit and double digit numbers

arr3.sort();
console.log("sorted array", arr3);
arr3.sort((a,b)=> a-b);
console.log("sorted array in ascending order", arr3);
arr3.sort((a,b)=> b-a);
console.log("sorted array in descending order", arr3);


let arr2:[number,string,boolean];
arr2 = [1, "apple", true];
// arr2 = [1, "apple", true,1];// if we declare he tuple with more or less elements, it will throw an error

console.log(arr2);  
// arr2=["apple",1,true]   // this will throw an error because the order of elements is not maintained

arr2.push("orange"); // adding a new element to the array this dont have type safety
console.log(arr2);


let readTuple:readonly [number, string, boolean] = [1, "apple", true];
// readTuple.push("orange");


//desctruting the tuple
let [num, str, boolVal] = arr2;
console.log(`Number: ${num}, String: ${str}, Boolean: ${boolVal}`);
// we can assing the values to new variables like this

