console.log("DINNER INVITATION \n");
var invite = ["Sabir", "Shakir", "Adain"];
console.log("Alas! I found a bigger dinner table dear : " + invite + "\n");
console.log("Now, I'd like to invite 3 more friends/guets. \n");
invite.unshift("Aqib");
invite.splice(2, 0, "Dilawar");
invite.push("Nadir");
console.log("Now,I would like to invite these persons: " + invite + ".\n");
for (var i = 0; i < invite.length; i++) {
    console.log("Hi, " + invite[i] + ". It has been too long since we’ve filled our friendship bucket so please join us for drinks and a formal dinner at Kolachi restaurant. \n");
}
