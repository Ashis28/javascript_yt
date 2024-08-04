//let score = "33"  //"33abc"
// let score =null;
 let score = false;

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof(valueInNumber))
console.log(valueInNumber)

/* 
    "33" => 33
    "33abc" => NaN
    true => 1
*/

// let isLoggedIn = 1;
// let isLoggedIn = ""
let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

/*
    1 => true ; 0=>false
    ""=>false
    "name"=>true
*/

//converting into string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber)
console.log(stringNumber)

console.log("**operations**");

let value = 12
let negValue = -value
console.log(negValue)
console.log(typeof negvalue)

let str1 = "hello";
let str2 = " abhi";
console.log(str1+str2);
console.log("1"+2+2);
console.log(1+2+"2");

let t1 = 1+2+'3';
console.log(typeof t1)

console.log(+true)
console.log(+"")