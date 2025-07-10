let arr=[1,2,"Think",4,5,6,"Rohit",8,9,"ritik"];

console.log(arr.indexOf("Rohit"));

console.log(arr.unshift(1),"after add 1 at first index",arr); //after adding element unsfift method will return the new length of the array
console.log(arr.shift(),"after remove the first elemnt ",arr);

console.log(arr.push("Kokate"),"after add Kokate at last index",arr); 
console.log(arr.pop(),"--after remove the last elemnt ",arr); 
console.log(arr.slice(2,5));
console.log(arr.splice(2,3),"after remove 3 elemnt from index 2",arr); 



console.log(arr.reverse());

console.log(arr.sort());



// even numbers and calculate total using reduce
let arr1=[1,2,3,4,5,6,7,8,9];
let ev=arr1.filter(e=>e%2==0);
function myfun(total,l) {
    return total+l;
}
console.log("even numbers are ",ev);
let sum=ev.reduce(myfun); 
//Reduce will take 3 parameter first is total and second is current element and third id initial value and return one value as a result
console.log("sum of all element in array is ",sum);
console.log("for each loop");
arr.forEach((element,index)=>{
    console.log("element is ",element,"index is ",index);
    
});

//filter method will filter the array and return new array with condition
// map will change all relemnt in a array and return new array

let val=[1,2,3,4,5,6,7,8,9];
let val1=val.map((element,index)=>{
    return element*2;
});
console.log(val1);
