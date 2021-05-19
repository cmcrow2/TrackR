// this function calculates how many phone screens or interviews are needed to reach the target rate
// formula -> x = (((a * c) - (100 * b)) / (100 - c))
// a = number of previous checkpoints reached
// b = number of current checkpoints reached
// c = target percentage
// x = number of previous and current checkpoints needed to reach the goal
const calculateNumNeeded = (a, b, c) => {
  // edge case
  if (((100 * b) - (a * c)) === 0) {
    return 1;
  }

  // calculate the number
  let result = Math.ceil(((a * c) - (100 * b)) / (100 - c));

  return result;
};

export default calculateNumNeeded;