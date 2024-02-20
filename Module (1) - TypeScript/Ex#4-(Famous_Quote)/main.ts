import * as promptSync from 'prompt-sync'
const prompt = promptSync();

var author=prompt("Famous author name you admire: ")
var quote = prompt("Quote:  ")

let message = author +" once said,“" +quote+"”";
console.log(message);