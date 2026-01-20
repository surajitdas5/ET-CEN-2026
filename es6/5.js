//default params
// function greet(name="Guest"){
//     console.log("Hello "+name)
// }
// greet("sam")
// greet()


// function add(a, b, c=0){
//     return a+b+c
// }

// console.log(add(10, 20))
// console.log(add(10, 20, 30))

//rest operator
// function add(a, b, ...nums){
//     // console.log(nums)
//     let sum = a+b;
//     for(let n of nums){
//         sum += n
//     }
//     return sum
// }


// // let s = add(1, 2, 3, 4, 5, 6, 7)
// let s = add(10, 20, 30, 40);
// console.log(s)

// spread operator
let a = [1,2,3,4]
// let b = a 
// let b = [...a]
// let b = [100, 200, ...a]
let b = [...a, 20, 30]
b[1] = 200

console.log(a) // 1 2 3 4
console.log(b) // 1 200 3 4