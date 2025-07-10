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


//---------Filter even numbers and calculate total using reduce()--------
let arr1=[1,2,3,4,5,6,7,8,9];

function even(arr) {
    let evenArr=[];
    console.log("for in loop");
    
    for(let i in arr){
        if(arr[i]%2==0){
            console.log(arr[i]);
            evenArr.push(arr[i]);
        }
    }
    console.log("for of loop");
    
    for(let i of arr){
        if(i%2==0){
            console.log(i);
        }
    }
    return evenArr;
}
let ev=even(arr1);

function myfun(total,l) {
    return total+l;
}
let sum=ev.reduce(myfun);
console.log("sum of all element in array is ",sum);



console.log("for each loop");
arr.forEach((element,index)=>{
    console.log("element is ",element,"index is ",index);
    
});

//----find
// console.log(arr.find("1"));