function aService(){
    let myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("Operation Done")
            let status = false

            if(status){
                resolve("Task is completed");
            } else {
                reject("Error while performing the operation")
            }
        }, 2000)
    })
    return myPromise
}

// let res = aService()
// console.log(res)

// aService()
//     .then((data)=>{
//         console.log("Then Block: "+data)
//     })
//     .catch((err)=>{
//         console.log("Catch Block: "+err)
//     })
//     .finally(()=>{
//         console.log("Finally Block")
//     })


async function operator(){
    try{ // resolve
        let res = await aService();
        console.log("Try Block: "+res)
    } catch(err){ // reject
        console.log("catch block: "+err)
    } finally{
        console.log("Finally Block")
    }
}

//operator()

function evenOdd(num){
    // let promise = new Promise((resolve, reject)=>{
    let promise = new Promise((callback1, callback2)=>{
        setTimeout(()=>{
            if(num%2 == 0){
                // resolve("Even Number")
                callback1("Even Number")
            } else {
                // reject("Odd Number")
                callback2("Odd Number")
            }
        }, 2000)
    })
    return promise
}


async function checkEvenorOdd(n){
    try{
        let result = await evenOdd(n)
        console.log(result) // even number
    } catch(err){
        console.log(err) // odd number
    }
}

checkEvenorOdd(110)