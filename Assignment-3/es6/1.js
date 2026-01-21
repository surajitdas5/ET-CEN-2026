// callback function

// function add(a, b){
//     return a+b;
// }

// function add(a, b, fun){
// function add(a, b, callback){
//     let c = a+b;
//     // fun(c)
//     callback(c)
// }

// function display(data){
//     console.log(data)
// }
// display => callback function
// add => higher order function
// let res = add(10, 20)
// display(res)

// add(100, 200, display)

// add(1, 2, function(data){
//     console.log(data)
// })
// function add(a, b){
//     return a+b;
// }

// function multiply(a, b){
//     return a*b;
// }

// function calculate(a, b, callback){
//     let res = callback(a,b)
//     console.log(res)
// }

// calculate(10,20, add)
// calculate(10,20, multiply)



// setTimeout(function(){
//     console.log("Time Out!!!")
// },2000)

// let i = 0;
// setInterval(function(){
//     console.log("hello "+(++i))
// }, 1000)

// setInterval(function(){
//     document.getElementById("clock").innerHTML = new Date().toLocaleTimeString()
// }, 1000)

let i = 0;
let interval = setInterval(function(){
    document.getElementById("clock").innerHTML = ++i;
    if(i>= 10){
        clearInterval(interval)
    }
}, 500)