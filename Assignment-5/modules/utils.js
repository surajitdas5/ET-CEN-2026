function add(a,b){
    console.log(a+b)
}

function sub(a, b){
    console.log(a-b)
}

// common.js
// default export => only one
// module.exports = add
// module.exports = sub


// named export
// module.exports = { add: add, sub: sub}
// module.exports = { sum: add, sub: sub}
module.exports = { add, sub}