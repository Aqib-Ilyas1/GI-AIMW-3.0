// Video link of 'How to take input in typescript'
// https://youtu.be/CvkOuA7eCgE?si=ytb7VSQ5iQ9bytTi
// npm install prompt-sync

import * as promptSync from 'prompt-sync'
const prompt = promptSync();

var pername= prompt("Enter your name: ")
console.log("Hello " +pername+", would you like to learn some Typescript today?")

