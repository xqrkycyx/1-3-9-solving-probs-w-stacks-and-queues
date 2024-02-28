const Queue = require("./lib/queue");

const binary = (max) => {
  const queue = new Queue();

  queue.enqueue("1");

  let result = [];

  for (let i = 0; i < max; i++) {
    // Dequeue
    const value = queue.dequeue();

    // Push
    result.push(value);

    // updated here
    queue.enqueue(value.concat("0"));

    queue.enqueue(value.concat("1"));
  }
  return result;
};

module.exports = binary;
