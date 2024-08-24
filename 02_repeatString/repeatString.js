const repeatString = function(str, n_times) {
    if(n_times < 0)
        return 'ERROR';
    let return_str = '';
    for(let i = 0; i < n_times; i++)
        return_str += str;
    return return_str;
};

// Do not edit below this line
module.exports = repeatString;
