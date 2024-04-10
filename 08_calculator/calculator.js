const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, value) => product * value);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num === 0) return 1
  else {
    let product = 1
    for (let i = num; i > 0; i--){
      product *= i;
    }
    return product;
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
