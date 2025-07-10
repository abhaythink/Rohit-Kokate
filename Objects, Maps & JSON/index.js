let obj={
    name:"Rohit",
    age:22,
    city:"Pune",
    company:"Thinkiive",
    skills:["JavaScript", "React", "Java"],
    address: {
        street: "123 Main St",
        city: "Pune",
        state: "MH"
    }
}
//object to array
console.log(obj);
let newobj=Object.keys(obj)
console.log(newobj);
let add=Object.keys(obj.address);
console.log(add);

let pairs=Object.entries(obj);
console.log(pairs);
console.log(typeof pairs);


//array to object

let arr=[["name", "Rohit"], ["age", 22], ["city", "Pune"]];
console.log(typeof arr);
let newobj1=Object.fromEntries(arr);
console.log(newobj1);
console.log(typeof newobj1);


// MAP and SET

console.log("-------------MAP ----------");


let map=new Map();
map.set("name", "Rohit");
map.set("age", 22);
map.set("city", "Pune");
map.set("skills", ["JavaScript", "React", "Java"]);

// map.set(obj);
console.log(map);
console.log(map.get("name"));
console.log(map.has("age"));
map.delete("city");
console.log("Map after deleting city:", map);
console.log("Size of map:", map.size);

console.log("---------------------SET");
let set=new Set();
set.add("JavaScript");
set.add("React");
set.add("Java");
set.add("JavaScript"); 
set.add("Python");
console.log(set);

console.log(set.has("JavaScript")); 

for (const element of set) {
    console.log(element);   
}
