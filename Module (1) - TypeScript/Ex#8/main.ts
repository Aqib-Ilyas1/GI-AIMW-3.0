import * as promptSync from 'prompt-sync'
const prompt = promptSync();

var alert=("Enter two values to get the answer '8' either it is of any opeartion i.e. Add, Sub, Mul, Div")
console.log(alert)

const input1= +prompt("Enter 1st value:  ");
var operator= prompt("Enter Operator: ")
const input2= +prompt("Enter 2nd value: ");

if(operator== '+'){
    var add=input1+input2;
    if(add==8){
        console.log(add)
    }else{
        console.log("You choose incorrect values")
    }
}

if(operator== '-'){
    var sub=input1-input2;
    if(sub==8){
        console.log(sub)
    }else{
        console.log("You choose incorrect values")
    }
}

if(operator== '*'){
    var mul=input1*input2;
    if(mul==8){
        console.log(mul)
    }else{
        console.log("You choose incorrect values")
    }
}

if(operator== '/'){
    var div=input1/input2;
    if(div==8){
        console.log(div)
    }else{
        console.log("You choose incorrect values")
    }
}
