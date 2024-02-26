"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// var personname = "Aqib";
var pername = prompt("Enter your name: ");
console.log("Hello " + pername + " would you like to learn some Python today?");
