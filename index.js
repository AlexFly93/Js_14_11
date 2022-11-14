const summa = function (num1, num2) {
  return num1 + num2;
};
const substr = function (num1, num2) {
  return num1 - num2;
};
const mult = function (num1, num2) {
  return num1 * num2;
};
const div = function (num1, num2) {
  return num1 / num2;
};

function calculate(num1 = 10, num2 = 2, operator = "+") {
  if (isNaN(num1 - num2)) {
    return null;
  }
  let f = null;
  switch (operator) {
    case "+":
      f = summa;
      break;
    case "-":
      f = substr;
      break;
    case "/":
      f = div;
      break;
    case "*":
      f = mult;
      break;
    default:
      f = null;
      break;
  }
  if (typeof f === "function") {
    return f(num1, num2);
  }

  return null;
}

const result = calculate();
console.log(result);

const getPerim = function (side1, side2) {
  return summa(side1, side2) * 2;
};


const highOrderFunction = function (val1, val2, func) {
    return func(val1, val2)
}

console.log(highOrderFunction(7,5,mult))