// --- 1 ---

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = num => {
  // Code here
  if (num <= 1) return num;
  return num + summation(num - 1)
}

// --- 2 ---

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = s => {
  let regex = /!/gm;
  return s.replace(regex, '');
}

const removeExclamationMarks1 = s => {
  return s.split('!').join('');
}

// --- 3 ---

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

const check = (a, x) => {
  return a.some(n => n === x);
}
const check1 = (a, x) => {
  return a.includes(x);
}
const check2 = (a, x) => {
  return (a.findIndex(el => el === x) === -1 ? false : true);
}
const check3 = (a, x) => {
  return (!a.find(el => el === x) ? false : true)
}
const check4 = (a, x) => {
  for (n of a) {
    if (n === x) {
      return true
    }
  }
  return false;
}

// --- 4 ---
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// create a function which returns an RNA sequence from the given DNA sequence

const DNAtoRNA = dna => {
  let regex = /T/gim;
  return dna.replace(regex, 'U');
}

const DNAtoRNA1 = dna => {
  return dna.split('T').join('U');
}

// --- 5 ---
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  newstr = ''
  for (let i = 0; i < x.length; i++) {
    newstr += (x[i] < 5 ? 0 : 1)
  }
  return newstr;
}


// --- 6 ---
// given an object
const columnIdsToValues = {
  text: 'approved',
  status: 'Done',
  vacationDays: 1,
  holidays: 2
}
// and a formula in String form
const formula = 'CONCATENATE("Total: " , sum( holidays, vacationDays)';

const replaceKeysToValues = (obj, f) => {
  let keys = Object.keys(columnIdsToValues);
  keys = keys.filter(k => k === 'vacationDays' || k === 'holidays');
  keys.map(key => {
    if (f.includes(key)) {
      f = f.replace(new RegExp(key, 'gm'), obj[key]);
    }
  });
  return f;
}


// --- 7 ---
// Write a function that replaces variable names inside a function with theirs values. lets say "i am #years# years old" -> "i am 20 years old"

let str = 'i am #years# years old';
const replaceVarName = (string, val, devider) => {
  return string.slice(0, string.indexOf(devider)) + val + string.slice(string.lastIndexOf(devider) + 1);
}


// --- 9 ---
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = num => {
  let murmur = ''
  if (num === 0) {
    return murmur;
  } else {
    for (let i = 1; i <= num; i++) {
      murmur += `${i} sheep...`;
    }
    return murmur;
  }
}

const countSheep1 = num => {
  let str = `${num} sheep...`;
  if (num === 1) {
    `${num} sheep...`
  } else {
    return countSheep(num - 1) + str;
  }
}

console.log(countSheep1(3))

// --- 1 ---
// --- 1 ---