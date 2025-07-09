
let pro=new Promise((resolve,reject)=>{
    let a=10;
    let b=20;
    if(a+b==30){
        resolve("Success");
    }else{
        reject("Failed");
    }
})


pro.then((message)=>{
    console.log("this promise is resolved with message: "+message);
}).catch((message)=>{
    console.log("this promise is rejected with message: "+message);
})


function addSync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Both arguments must be numbers');
            }
        }, 1000); 
    });
    
}

async function addAsync(a, b) {
    const result=await addSync(a, b);
    console.log("The result of the addition is: " + result);
    return result;
}

addAsync(5, 10)

//----------------Simulate data fetch using setTimeout.


function fetchData(callback) {
    
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 2000); // Simulate a 2-second delay
}
fetchData((data) => {
    console.log("Data fetched:", data);
});

