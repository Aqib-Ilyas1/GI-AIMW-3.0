"use strict";
//********************************* Program no 4 **************************************
Object.defineProperty(exports, "__esModule", { value: true });
// Input taken using: command( "npm install prompt-sync" )
var promptSync = require("prompt-sync");
var prompt = promptSync();
var author = prompt("Famous author name you admire: ");
var quote = prompt("Quote:  ");
// Output
var message = author + " once said,“" + quote + "”";
console.log(message);
//********************************* Program no 7 **************************************
// Perform mathematical operations in such a way that the answer should be '8'.
// Adding two numbers
console.log("By Addition (5+3) \n");
var resultbyadd = 5 + 3;
console.log(resultbyadd + "\n");
// Subtracting two numbers
console.log("By Substraction (16-8) \n");
var resultbysub = 16 - 8;
console.log(resultbysub + "\n");
// Multiplying two numbers 
console.log("By Multiplication (4*2) \n");
var resultbymul = 4 * 2;
console.log(resultbymul + "\n");
// Divide two numbers
console.log("By Division (64/8) \n");
var resultbydiv = 64 / 8;
console.log(resultbydiv);
