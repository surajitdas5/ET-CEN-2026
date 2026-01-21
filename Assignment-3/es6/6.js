let nums = [2, 5, 3, 10, 17, 13, 9, 3, 8]

// console.log(nums.push(100))
// console.log(nums.pop())
// console.log(nums.indexOf(5))
// console.log(nums.lastIndexOf(3))
// console.log(nums.indexOf(50))
// console.log(nums.includes(3))
// console.log(nums.includes(30))
// console.log(nums.join(", "))



// forEach
// nums.forEach(function(n, i){
// nums.forEach((n, i)=>{
//     console.log(`${i} => ${n}`)
// })


// map
// let newNums = nums.map((n, i)=>{
//     return n*10
// })
// let newNums = nums.map((n)=>n*5)
// console.log(nums)
// console.log(newNums)


// filter
// let oddNums = nums.filter((n)=>{
//     if(n%2 == 0){
//         return false
//     } else {
//         return true
//     }
// })

// let oddNums = nums.filter(n => n%2 == 1)

// console.log(oddNums)



// reduce
// let sum = nums.reduce((sum, n) =>{
//     return sum +n
// } ,0)

// console.log(sum)
// let largest = nums.reduce((largest, n)=>{
//     if(largest < n){
//         return n
//     } else {
//         return largest
//     }
// }, nums[0])

// let largest = nums.reduce((largest, n) => largest > n? largest:n, nums[0])
// console.log(largest)


// sort
// nums.sort((a,b)=>{
//     if(a>b) return 1
//     else if(b>a) return -1
//     else 0
// })

nums.sort((a,b)=>(a-b))

console.log(nums);
