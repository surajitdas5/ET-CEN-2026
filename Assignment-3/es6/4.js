// destructiring

// let emp = {
//     id: 101,
//     name: "john doe",
//     salary: 10000
// }

// let { id, name, salary } = emp
// let {name} = emp
// let {empId, empName, sal} = emp;
// console.log(emp.id)
// console.log(emp.name)
// console.log(emp.salary)

// console.log(name)
// console.log(salary)

// console.log(empId)

// let nums = [10, 20, 30]
// // let [a, b, c] =  nums
// let [a] =  nums

// console.log(a)



// optional chaining
let std = {
    roll: 123,
    name: "Tom",
    address:{
        state: "Odisha"
    }
}

console.log(std?.roll)
console.log(std?.address?.state)