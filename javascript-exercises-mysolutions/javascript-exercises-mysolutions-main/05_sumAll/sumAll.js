const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
        return 'ERROR';

    function sumToN(num) {
        return ((num)*(num+1))/2;
    }

    var lower = Math.min(num1,num2)-1;
    var upper = Math.max(num1,num2);

    return sumToN(upper) - sumToN(lower);
};

// Do not edit below this line
module.exports = sumAll;
