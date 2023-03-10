// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

const solution = (number) => {
  let sum = 0;
  if (number < 0) return 0;
  const array = Array.from(Array(number).keys());
  array.forEach((num) => {
    if (num % 3 === 0) {
      sum += num;
    } else if (num % 5 === 0) {
      sum += num;
    }
  });
  return sum;
};

const solution1 = (number) => {
  let sum = 0;
  if (number < 0) return 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (message) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const pattern = /[a-z]/im;
  let result = '';
  const rightCase = (str, isUpperCase) => {
    return isUpperCase ? str.toUpperCase() : str;
  };
  for (let i = 0; i < message.length; i++) {
    if (!pattern.test(message[i])) {
      result += message[i];
    } else {
      const isUpperCase = message[i].toUpperCase() === message[i];
      const letter = isUpperCase ? message[i].toLowerCase() : message[i];
      const cipherIndex = abc.indexOf(letter) + 13;
      if (cipherIndex > abc.length - 1) {
        result += rightCase(abc[cipherIndex - abc.length], isUpperCase);
      } else {
        result += rightCase(abc[cipherIndex], isUpperCase);
      }
    }
  }
  return result;
};
