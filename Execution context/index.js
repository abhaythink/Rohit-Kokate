console.log('Start');

const promise = new Promise((resolve, reject) => {
    console.log("Promise Created");
    if (0> 0.5) {
        reject("Promise Rejected");
    }else{
        resolve("Promise Resolved 1");
    }
});

setTimeout(() => {
    console.log("Set Timeout Executed");
}, 0);

Promise.resolve().then(()=>{
    console.log("Promise Resolved 2");
    
})
async function asyncFunc() {
    console.log("Async Function Executed");
    const res=await promise;
    console.log(res);
    
}

asyncFunc();
console.log('End');