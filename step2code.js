// 1. Sum Zero

function equalToZero (arr){
    for(let i=0; i<arr.length; i++){
        for(let y=0; y<arr.length; y++){
            if(arr[i] + arr[y] === 0){
                console.log(`${arr[i]} and ${arr[y]} equal zero`)
                return true;
            }
        }
    }
    console.log('doesnt equal zero')
    return false;
}

myArray = [2, 3, 4, 5, 6, 7, -5]


equalToZero(myArray);

// 2. Unique Characters

function hasUniqueChar(str) {
    for(let i=0; i<str.length; i++){
        for(let y= i+1; y<str.length; y++){
            if(str[i] === str[y]){
                console.log(` ${str[i]} and ${str[y]} not only unique characters`)
                return false;
            } 
        }
    }
    console.log('has only unique characters')
    return true;
}

let myString = 'rachel'

hasUniqueChar(myString);

//3.pangram

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabet.every(x => string.includes(x));
}

console.log("true", isPangram('The quick brown fox jumps over the lazy dog!'));

// 4. longest word
let longestStr = 0;

function findLongestWord(arr){
    for(let i = 0; i < arr.length; i++){
        if(longestStr < arr[i].length){
            longestStr = arr[i].length;
        }
    }
    return longestStr;
}

myArray = ["hello", "hi", "goodbye"];

console.log(findLongestWord(myArray));