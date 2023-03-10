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
