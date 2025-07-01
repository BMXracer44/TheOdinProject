const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
	let sum = 0;
  for(const num of arr){
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for(const num of arr){
    result *= num;
  };
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let fact = 1;
  while(num > 0){
    fact *= num;
    num--; 
  }
  return fact;
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
