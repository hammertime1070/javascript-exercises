const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arg) {
	let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i]
  }
  return sum
};

const multiply = function(arg) {
  let result = 1;
  for (let i = 0; i < arg.length; i++) {
    result = result * arg[i]
  }
  return result
};

const power = function(x, y) {
  let result = 1;
  for (i = 0; i < y; i++) {
    result = result * x
  }
  return result
};

const factorial = function(x) {
	// If value is negative return ERROR
  if (x < 0) {
    return 'ERROR'
  }
  // if value is 0 return 1
  else if (x == 0) {
    return 1
  }
  else {
    return (x * factorial(x - 1));
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
