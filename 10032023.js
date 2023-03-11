// ROT13 ("rotate by 13 places") is a simple letter substitution cipher
// that replaces a letter with the 13th letter after it in the alphabet.

const rot13 = (str) => {
  const regex = /[A-Za-z]/g;
  let decipher = '';
  const upperCasedStr = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(regex)) {
      decipher += str[i];
    } else {
      const isLowerCase = str[i].toLowerCase() === str[i];
      const charCode = upperCasedStr.charCodeAt(i);
      let newCharCode = charCode + 13;
      if (newCharCode > 90) {
        newCharCode = newCharCode - 90 + 65 - 1;
      }
      if (isLowerCase) {
        decipher += String.fromCharCode(newCharCode).toLowerCase();
      } else {
        decipher += String.fromCharCode(newCharCode);
      }
    }
  }
  return decipher;
};

// function rot13(str) {
//   return str.replace(/[a-z]/ig, function(x){
//     return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
//   });
// }

// function rot13(str) {
//   return str.split('').map(function(e) {
//     return /[A-Ma-m]/.test(e) ? String.fromCharCode(e.charCodeAt(0) + 13) :
//            /[N-Zn-z]/.test(e) ? String.fromCharCode(e.charCodeAt(0) - 13) : e;
//   }).join('');
// }

// const rot13 = str =>
//   str.replace(/[a-z]/gi, val => String.fromCharCode(val.charCodeAt() + (/[a-m]/i.test(val) ? 13 : -13)));


// Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let currentTest = target - nums[i];
    const foundIndex = nums.indexOf(currentTest);

    if (foundIndex !== -1 && foundIndex !== i) {
      return [i, foundIndex];
    }
  }
};
