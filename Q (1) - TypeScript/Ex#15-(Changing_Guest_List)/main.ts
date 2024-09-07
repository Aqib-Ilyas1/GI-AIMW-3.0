console.log("DINNER INVITATION \n")
var invite=["Sabir","Shakir","Shakeel"]

console.log("oho! The guest who can’t make it: " +invite.pop()+ "\n");
var new_invite= invite.push("Adain");
console.log("It's okay! I'm inviting to: " + new_invite + "\n");   

console.log("Now,I would like to invite these persons: " +invite+".\n")

for(let i=0; i<invite.length; i++){
    console.log("Hi, " +invite[i]+ ". It has been too long since we’ve filled our friendship bucket so please join us for drinks and a formal dinner at Kolachi restaurant. \n")
}