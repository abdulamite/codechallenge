// The pupose of this file to gain practice working on common and advanced coding questions to
// improve my own quality of code and overall programming knowledge

//1. Write a function to reverse a given string.

function strReverse(str){
    // easiest solution
    // return str.split('').reverse().join('');
    // without using reverse method.
    let phrase = str.split('');
    let backwards = [];
    for(let i =phrase.length-1; i>=0 ;i--){
        backwards.push(phrase[i]);
    }
    return backwards.join('');
}

console.log(strReverse('abbc') === 'cbba');
console.log(strReverse('dog') === 'god');
console.log(strReverse('racecar') === 'racecar');
console.log(strReverse('abc') === 'cba');


//2. Write a function that expects n and returns the sum of values from 1 to n.

function simpleAdding(n){
    let total = 0;
    for(let i=0;i<=n;i++){
        total+=i;
    }
    return total;
}


console.log(simpleAdding(3) === 6);
console.log(simpleAdding(4) === 10);
console.log(simpleAdding(12) === 78);
console.log(simpleAdding(140) === 9870);


//3. Write a function that will return true if the letters in the string are between two + symbols
function simpleSymbol(str){
    let split = str.split('');
    let reg = RegExp(/^[a-zA-Z]+$/);
    let errors = 0;
    for(let i = 0; i<=split.length-1;i++){
        if(reg.test(split[i])){
            let back = (split[i-1]);
            let forward = (split[i+1]);
            if(back === '+' && forward === '+'){
            }else{
                errors+=1;
            }
        }
    }
    if(errors>0){
        return false;
    }
    else{
        return true;
    }
}


console.log(simpleSymbol("+d+=3=+s+") === true);
console.log(simpleSymbol("f++d+") === false);