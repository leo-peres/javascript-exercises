function isLetterOrNumber(str) {
    return str.length === 1 && (str.match(/[a-z]/i) || str.match(/[0-9]/i));
  }

const palindromes = function (str) {
    let newStr = str.split('').filter(x => isLetterOrNumber(x)).join('').toLowerCase();
    return newStr === newStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
