const fibonacci = function(num) {
    //Ensure the num is integer//
    num = parseInt(num);

    //Use recursion to calculate fibonacci seuqence//
    if (num > 2) {
        return fibonacci(num-1) + fibonacci(num-2);
    }
    else if (num == 1 || num == 2) {
        return 1;
    }
    else
        return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
