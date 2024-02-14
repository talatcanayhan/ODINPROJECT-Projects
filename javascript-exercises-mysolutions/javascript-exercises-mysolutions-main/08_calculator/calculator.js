const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  var result = 0;
	nums.forEach(num => {result += num});
  return result;
};

const multiply = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  var result = 1;
	nums.forEach(num => {result *= num});
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num1) {
	if (num1 < 0)
    return -1;
  else if (num1 == 0)
    return 1;
  else {
    return num1 * factorial(num1-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
