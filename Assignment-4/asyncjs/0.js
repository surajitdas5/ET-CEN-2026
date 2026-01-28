// console.log("Start")

// setTimeout(()=>{
//     console.log("Time Out")
// }, 1000)

// console.log("End")


function add(a, b, display){
    setTimeout(()=>{
        // return a+b
        display(a+b)
    }, 2000)
}

function display(data){
    console.log(data)
}


// let c = add(1, 2)
// display(c)

add(3, 7, display)