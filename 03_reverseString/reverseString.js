const reverseString = function(str) {
    const char_array = str.split('');
    char_array.sort((x, y) => -1);
    return char_array.join('');
};

// Do not edit below this line
module.exports = reverseString;
