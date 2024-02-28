const Stack = require("./lib/stack");

const evaluate = (expression) => {
  let stack = new Stack();

  // Removing white spaces from the expression
  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    // Checking if the character is a number
    if (!"+-*/".includes(character)) {
      stack.push(parseInt(character));
    }

    // Checking if the character is an operator (+, -, *, /)

    if ("+-*/".includes(character)) {
      let a = stack.pop();
      let b = stack.pop();

      const mathMachine = {
        "+": b + a,
        "-": b - a,
        "/": b / a,
        "*": b * a,
      };

      const result = mathMachine[character];

      stack.push(parseInt(result));
    }
  });

  return stack.pop();
};

module.exports = evaluate;
