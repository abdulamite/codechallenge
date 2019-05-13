//The pupose of this file to gain practice working on common and advanced coding questions to
// improve my own quality of code and overall programming knowledge

//1. Write a function to Reverse a given string

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