// Arrow Function

// function add(a, b){
//     return a+b;
// }

// let add = function(a,b){
//     return a+b
// }

// let add = (a,b) => {
//     return a+b
// } 

// let add = (a,b) => (a+b)

// let sqr = (a) => (a*a)

// let res = add(3,2)
// console.log(res)

// console.log(sqr(2))

// let revNum = (num) => {
//     let rev = 0;
//     while(num > 0){
//         let rem = num%10;
//         rev = rev*10 + rem;
//         num = parseInt(num/10);
//     }
//     return rev
// }

// console.log(revNum(123))


// setTimeout(()=>{
//     console.log('Time Out!!!')
// }, 1000);

// let student  = {
//     name: "John",
//     getName: function(){
//         console.log(this)
//     },
//     getStdName: ()=>{
//         console.log(this)
//     }
// }

// student.getName()
// student.getStdName()



//  class

class Student{
    // constructor = (name) => {
    constructor(name){
        this.name = name;
    }

    // display(){
    display = () => {
        console.log(this.name)
    }
}

let std = new Student("John")
std.display();