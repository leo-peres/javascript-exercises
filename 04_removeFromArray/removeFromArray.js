const removeFromArray = function(input_array, ...remove_list) {
    return input_array.filter(x => remove_list.findIndex(y => y === x) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
