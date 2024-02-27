# Solving problems with stacks and queues

> *Note: If downloading the assessment files to your local machine, make sure you're running Node v18 before you run* `npm install`.
>
> 1.  *Check which version you are running:* `node -v`
> 2.  *If needed, change the version to v18:* `nvm use v18`
>
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this challenge, you will work on several algorithms that may be solved with stacks and queues.

## Existing files

| File                  | Description                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/postfix.js`      | Write your solution to the postfix evaluation problem in this file.                                      |
| `src/binary.js`       | Write your solution to the binary numbers problem in this file.                                          |
| `src/brackets.js`     | Write your solution to the bracket matching problem in this file.                                        |
| `__tests__/*.test.js` | Contains tests for the various problems. You are welcome to look at these files, but do not modify them. |
| `src/lib/*`           | The Stack, Queue, and Node library code may be found in this folder. No need to modify these files.      |

## Tasks

### Evaluating postfix expressions

Recall that an arithmetic expression may be written in postfix notation. The following are some examples.

| Infix              | Postfix        |
| ------------------ | -------------- |
| (2 + 3) \* 4       | 2 3 + 4 \*     |
| (2 + (4 - 5) \* 3) | 2 4 5 - 3 \* + |
| 8 / (6 + 2)        | 8 6 2 + /      |

And below, you can see an example of a stack-based evaluation of the postfix expression `234*+`.

|             Input | Stack   | Postfix evaluation                                                |
| ----------------- | ------- | ----------------------------------------------------------------- |
| 2 3 4 \* +        | _empty_ | Push 2 into stack.                                                |
| 3 4 \* +          | 2       | Push 3 into stack.                                                |
| 4 \* +            | 3 2     | Push 4 into stack.                                                |
| \* +              | 4 3 2   | Pop 4 and pop 3 from stack, apply 3 \* 4, and push 12 into stack. |
| +                 | 12 2    | Pop 12 and pop 2 from stack, appy 2 + 12, and push 14 into stack. |
|                   | 14      | _The value obtained is the only element left in the stack._       |

Given an arithmetic expression in postfix form, evaluate the expression and return the final value.

Assume the following:

- All operands are single-digit numbers.
- Only the operators `+`, `-`, `/`, and `*` will be used.
- All expressions are valid, no need to validate them.
- Only valid operations will be provided. That is, no need to check for division by zero and other arithmetic anomalies.

A simple algorithm may be outlined as follows:

1.  Import the necessary modules: path and Stack.
2.  Declare a constant named `operator` and assign an object with properties: `+`, `-`, `*`, and `/`, each corresponding to a function that takes two operands and returns the result of the corresponding operation.
3.  Declare a function named `evaluate` that takes an expression as a parameter.
    1.  Create a new instance of the Stack class and assign it to a variable named `stack`.
    2.  Remove any whitespace from the input expression.
    3.  Iterate over each character in the expression and do the following:
        1.  If the character is one of the operators `+`, `-`, `*`, or `/`:
            1.  Pop the top two values from the stack (considered as right and left operands) and assign them to variables `right` and `left`.
            2.  Apply the corresponding operator function to the operands and push the result back onto the stack.
        2.  Otherwise (if the character is a number or operand):
            1.  Push the character onto the stack.
    4.  Convert the final result on the stack to a number and return it.
4.  Export the `evaluate` function for use in other modules.

Implement your solution in the file named `src/postfix.js`.

### Generate binary numbers

Given a number `max`, write an algorithm that generates all binary integers from 1 to `max`.

Examples:

```
Input: max = 2
Output: ["1", "10"]

Input: max = 5
Output: ["1", "10", "11", "100", "101"]

```

An algorithm that uses a queue to solve the problem is given below.

1.  Initialize an empty queue.
2.  Enqueue the string `1`. This represents binary number 1.
3.  Initialize an empty array named `result`.
4.  Iterate from 1 to `max` and do the following:
    1.  Dequeue a value from the queue.
    2.  Push the value into `result`.
    3.  Append a `0` to the value and enqueue it.
    4.  Append a `1` to the value and enqueue it.
5.  Return `result`.

Implement your solution in the file named `src/binary.js`.

### Extend parentheses to other types of brackets

Recall the algorithm that was used to determine if a given expression contained matching parentheses. It is repeated in pseudocode below:

1.  Initialize a new empty stack
2.  Start a loop to iterate through each character in the expression
    1.  If the current character is `(`
        1.  Push it onto the stack
    2.  Else
        1.  If the current character is `(`
            1.  If the stack is not empty
                1.  Pop one item off the stack
            2.  Else
                1.  Return `false`
3.  If the stack is empty
    1.  Return `true`
4.  Else
    1.  Return `false`

Extend the algorithm to recognize 3 different types of brackets: `()`, `[]`, and `{}`. These must be correctly nested; `"([)]"` is incorrect and should return `false`.

Implement your solution in the file named `src/brackets.js`.
