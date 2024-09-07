// //   ***************************** Program 14 ****************************************

// console.log("If you could invite anyone, to dinner, who would you invite? \n")
// var invite=["Sabir","Shakir","Shakeel"]
// console.log("I would like to invite these persons: " +invite+".\n")

// for(let i=0; i<invite.length; i++){
//     console.log("Hi, " +invite[i]+ ". It has been too long since we’ve filled our friendship bucket so please join us for drinks and a formal dinner at Kolachi restaurant. \n")
// }

// //  ***************************** Program 15 ****************************************

// console.log("DINNER INVITATION \n")
// var invite=["Sabir","Shakir","Shakeel"]

// console.log("oho! The guest who can’t make it: " +invite.pop()+ "\n");
// var new_invite= invite.push("Adain");
// console.log("It's okay! I'm inviting to: " + new_invite + "\n");   

// console.log("Now,I would like to invite these persons: " +invite+".\n")

// for(let i=0; i<invite.length; i++){
//     console.log("Hi, " +invite[i]+ ". It has been too long since we’ve filled our friendship bucket so please join us for drinks and a formal dinner at Kolachi restaurant. \n")
// }

// //  ***************************** Program 16 ****************************************

// console.log("DINNER INVITATION \n")
// var invite=["Sabir","Shakir","Adain"]

// console.log("Alas! I found a bigger dinner table dear : " +invite+ "\n");
// console.log("Now, I'd like to invite 3 more friends/guets. \n")

// invite.unshift("Aqib")
// invite.splice(2,0,"Dilawar")
// invite.push("Nadir")

// console.log("Now,I would like to invite these persons: " +invite+".\n")

// for(let i=0; i<invite.length; i++){
//     console.log("Hi, " +invite[i]+ ". It has been too long since we’ve filled our friendship bucket so please join us for drinks and a formal dinner at Kolachi restaurant. \n")
// }

// //  ***************************** Program 17 ****************************************

console.log("DINNER INVITATION \n")
var invite=["Aqib","Sabir","Dilawar","Shakir","Adain","Nadir"]

console.log("Dinner table won’t arrive in time. So, I can invite only two people for dinner.\n");
var f6= invite.pop();
var f5= invite.pop();
var f4= invite.pop();
var f3= invite.pop();

// var afterpop =[f6,f5,f4,f3]
// for(let i=0; i<afterpop.length; i++){
//     console.log("Dear " +afterpop[i]+ ". “I'm sorry to be canceling at the last minute.“ \n")
// }

// for(let i=0; i<invite.length; i++){
//     console.log("Hi, " +invite[i]+ ". You are still invited for dinner at Kolachi restaurant. \n")
// }

// invite.pop();
// invite.pop();
// console.log("Empty list: " + invite)
var len=  invite.length;
console.log("Number of people inviting to dinner: " + len);



