const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = [];
    if (arr.length === 0) return 1;
    for (let i = 0; i < arr.length; i++) {
      let depth = 0;
      if (Array.isArray(arr[i])) {
        depth = 1 + this.calculateDepth(arr[i])
      } else {
        depth = 1
      }
      depthArr.push(depth);
    }
    return Math.max(...depthArr);
  }
};

function calculateDepth(arr) {
  let depthArr = [];
  if (arr.length === 0) return 1;
  for (let i = 0; i < arr.length; i++) {
    let depth = 0;
    if (Array.isArray(arr[i])) {
      depth = 1 + calculateDepth(arr[i])
    } else {
      depth = 1
    }
    depthArr.push(depth);
  }
  return Math.max(...depthArr);
}

console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));



// console.log(glubina(
//   [1,
//       [8,
//       [
//         []]], 2, 3,
//     [8,
//       []], 4, 5,
//     ['6575',
//       ['adas',
//         ['dfg',
//           [0]]]]]));

