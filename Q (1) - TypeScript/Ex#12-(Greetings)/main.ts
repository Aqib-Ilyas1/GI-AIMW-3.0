var names=["Ali","Asif","Noman","Shafique","Wasif"]

//                           ********************* 1st Method *********************

console.log("1. " +names[0] +"\n")
console.log("Hi, " +names[0] + " I hope you will be fine! \n")

console.log("2. " +names[1] +"\n")
console.log("Hi, " +names[1] + " I hope you will be fine! \n")

console.log("3. " +names[2] +"\n")
console.log("Hi, " +names[2] + " I hope you will be fine! \n")

console.log("4. " +names[3] +"\n")
console.log("Hi, " +names[3] + " I hope you will be fine! \n")


console.log("5. " +names[4] +"\n")
console.log("Hi, " +names[4] + " I hope you will be fine! \n")


//                           ********************* 2nd Method *********************

console.log("2nd METHOD \n")
for(let i=0;i< names.length;i++){
    console.log(names[i]+". \n");
    console.log("Hi, " +names[i] + " I hope you will be fine! \n")
}