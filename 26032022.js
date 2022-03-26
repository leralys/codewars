// --- 1 ---

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = str => {
    if (str === '') return '';
    let newStr = str.split(/[-_]/).map(el => el = el[0].toUpperCase() + el.substring(1)).join('');
    return (newStr[0] === str[0] ? newStr : newStr[0].toLowerCase() + newStr.substring(1));
}


const toCamelCase1 = str => {
    if (str === '') return '';
    let arr;
    str.includes('-') ? arr = str.split('-') : arr = str.split('_')
    let newStr = arr.map(el => el = el[0].toUpperCase() + el.substring(1)).join('');
    return (newStr[0] === str[0] ? newStr : newStr[0].toLowerCase() + newStr.substring(1));
}


// --- 2 ---
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

const likes = names => {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

const likes1 = names => {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


// --- 3 ---
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const duplicateCount = text => {
    let chars = new Object;
    text = text.toLowerCase().split('');
    text.forEach(char => {
        chars.hasOwnProperty(char) ? chars[`${char}`] += 1 : chars[`${char}`] = 1
    });
    let res = 0;
    Object.values(chars).forEach(el => el > 1 ? res++ : res);
    return res;
}

// --- 4 ---

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


const findOdd = arr => {
    let o = new Object;
    arr.forEach(num => {
        o.hasOwnProperty(num) ? o[`${num}`] += 1 : o[`${num}`] = 1;
    });
    let res;
    Object.entries(o).forEach(el => {
        if (el[1] % 2 !== 0) {
            res = Number(el[0])
        }
    });
    return res;
}

// const findOdd1 = arr => {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }


// --- 5 ---
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



// --- 6 ---
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


const divisors = integer => {
    let res = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            res.push(i);
        }
    }
    return (res.length === 0 ? `${integer} is prime` : res);
};