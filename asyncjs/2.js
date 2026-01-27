// generates a number
function getNumber(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                let num = Math.Floor(Math.random()*100)+1
                resolve(num)
            } catch(err){
                reject(err)
            }
        }, 2000)
    })
    return promise
}

// doubles the number
function doubleNum(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*2)
        }, 1000)
    })
}

// add 20 with it
function add20(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num + 20)
        }, 1000)
    })
}

async function operate(){
    try{
        let rn = await getNumber();
        console.log("Random num is: "+rn)
        let dn = await doubleNum(rn)
        console.log("double is: "+dn)
        let res = await add20(dn)
        console.log("result is: "+res)
    }catch(err){
        console.log("Error: "+err)
    }
}

operate()