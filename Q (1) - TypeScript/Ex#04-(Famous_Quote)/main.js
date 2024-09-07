"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var author = prompt("Famous author name you admire: ");
var quote = prompt("Quote:  ");
var message = author + " once said,“" + quote + "”";
console.log(message);
