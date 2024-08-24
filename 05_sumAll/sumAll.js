const sumAll = function(a1, a2) {

    if(!Number.isInteger(a1) || !Number.isInteger(a2))
        return "ERROR";

    if(a1 < 0 || a2 < 0)
        return "ERROR";

    let sum = 0;
    for(let i = Math.min(a1, a2); i <= Math.max(a1, a2); i++)
        sum += i;

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
