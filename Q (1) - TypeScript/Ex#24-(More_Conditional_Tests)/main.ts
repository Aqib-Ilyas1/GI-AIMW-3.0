// ^^^^^^^^^^^^^^ Tests for equality and inequality with strings ^^^^^^
console.log("Tests for equality and inequality with strings \n")
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru');
console.log("\n")

// ^^^^^^^^^^^^^^ Tests using the lower case function ^^^^^^
console.log("Tests using the lower case function \n")
let risek = 'GSK';
console.log("Is risek == 'GSK'? I predict True.")
console.log(risek == 'GSK')
var alter= risek.toLowerCase();
console.log("Is risek == risek.toLowerCase()? I predict False.")
console.log(risek == alter)
console.log("\n");


// ^^^^^^^^^^^^^^ Numerical tests ^^^^^^
//                          ##### equality and inequality #####
console.log("Numerical tests \n")
let number = 10;
console.log("Is number == 10? I predict True.")
console.log(number == 10)
console.log("Is number !== 10? I predict False.")
console.log(number !== 10)

//                          ##### greater than and less than #####
let gre = 10;
console.log("Is gre > 9? I predict True.")
console.log(gre > 9)
console.log("Is gre < 10? I predict False.")
console.log(gre < 10)

//                          ##### greater than or equal to #####
let greorequal = 15;
console.log("Is greaterorequal >= 10? I predict True.")
console.log(greorequal >= 10)
console.log("Is greaterorequal >= 16? I predict False.")
console.log(greorequal >= 16)

//                          ##### less than or equal to #####
let lessorequal = 15;
console.log("Is lessorequal <= 20? I predict True.")
console.log(lessorequal <= 20)
console.log("Is lessorequal <= 10? I predict False.")
console.log(lessorequal <= 10)
console.log("\n")

// ^^^^^^^^^^^^^^ Tests using "and" and "or" operators ^^^^^^
console.log("Tests using 'and' and 'or' operators \n")
let num1 = 10;
let num2 =15;
console.log("Is 'num1 ==10 && num2 ==15'? I predict True.")
console.log(num1 ==10 && num2 ==15)
console.log("Is 'num1== 12 || num2== 16'? I predict False.")
console.log(num1== 12 || num2== 16)
console.log("\n")

// ^^^^^^^^^^^^^^  Test whether an item is in an array ^^^^^^
        //  #######  Test whether an item is not in an array ###########

console.log("Test whether an item is in an array \n");
let arr=[1,2,3,4];
console.log("Array: " +arr)
// array.includes(item, fromIndex)
console.log("Is 'arr.includes(2)'? I predict True.")
console.log(arr.includes(2))
console.log("Is 'arr.includes(5)'? I predict False.")
console.log(arr.includes(5))


