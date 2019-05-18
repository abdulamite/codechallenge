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

console.log(`Str Reverse Test`);
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

console.log(`Simple Adding Test`);
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

console.log(`Simple Symbol Test`);
console.log(simpleSymbol("+d+=3=+s+") === true);
console.log(simpleSymbol("f++d+") === false);


// 4. Write a function that expects two arrays returns a combined array arr1 + arr2

let evens = [0,2,4,6,8,10];
let odds = [1,3,5,7,9,11];

function combinedArr(arr1,arr2){
    // Example of array spreadng
    let combined = [...arr1, ...arr2];
    return combined;
}


console.log(`Combined Arr Test`);
//Need to convert to JSON because you cannot simply compare arrays. Need to pass by value and compare values vs arr contents
console.log(JSON.stringify(combinedArr(evens,odds)) === JSON.stringify([0,2,4,6,8,10,1,3,5,7,9,11]));


// 5. Write a simple sort function that expects and array and sorts it. 

let unsorted = [9,5,6,11,15,3,12,24,22,17];

function simpleSort(arr){
    let sorted = arr.sort((a,b)=>{
        return a > b ? 1 : -1
    });
    return sorted;
}


console.log(`Generate a random array of length n Test`);
// 6. Write a function that returns a random array of length n 

function generateRandomArray(length){
    let randomArray = [];
    for(let i=0; i<=length;i++){
        randomArray.push(Math.floor((Math.random() * 100)+1));
    }
    return randomArray;
}

console.log(generateRandomArray(10));
console.log(generateRandomArray(25));

// Below function with sort a random array of length n
console.log('Sorted Random Array')
console.log(simpleSort(generateRandomArray(30)));
console.log(simpleSort(combinedArr(generateRandomArray(2), generateRandomArray(7))));
console.log(simpleSort(combinedArr(generateRandomArray(12), generateRandomArray(3))));



// 7. Write a function to consume an API and list the contents of the response. 
const axios = require('axios');
async function getGitHubInfo(){
    const data = await axios.get('https://api.github.com/users/abdulamite');
    // example of object destructuring
    const {name, company} = data.data
    console.log(name, company);
    return data;
}

getGitHubInfo();