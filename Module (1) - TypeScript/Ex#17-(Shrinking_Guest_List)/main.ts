console.log("DINNER INVITATION \n")
var invite=["Aqib","Sabir","Dilawar","Shakir","Adain","Nadir"]

console.log("Dinner table won’t arrive in time. So, I can invite only two people for dinner.\n");
var f6= invite.pop();
var f5= invite.pop();
var f4= invite.pop();
var f3= invite.pop();

var afterpop =[f6,f5,f4,f3]
for(let i=0; i<afterpop.length; i++){
    console.log("Dear " +afterpop[i]+ ". “I'm sorry to be canceling at the last minute.“ \n")
}

for(let i=0; i<invite.length; i++){
    console.log("Hi, " +invite[i]+ ". You are still invited for dinner at Kolachi restaurant. \n")
}

invite.pop();
invite.pop();
console.log("Empty list: " + invite)
