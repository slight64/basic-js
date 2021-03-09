const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let calcdepth;
    if (Array.isArray(arr)) {
      depth++
      console.log(depth);
      for (let i = 0; i < arr.length; i++) {
        if ( arr[i] instanceof Array) {

          calcdepth = calculateDepth(arr[i]);

          depth = depth + calcdepth
        }
      }
      return depth
    }

  }
};

function calculateDepth(arr) {
  let depth = 0;
  let calcdepth;
  if (Array.isArray(arr)) {
    depth++
    console.log(depth);
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] instanceof Array) {
        console.log(true)
        calcdepth = calculateDepth(arr[i]);
        console.log(calcdepth)
        depth = depth + calcdepth
      }
    }
    return depth
  }

}

console.log(calculateDepth([],[[]]))
