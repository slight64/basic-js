const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardNext && arr[i + 1] !== undefined) {
      arr[i + 1] = undefined;
    } else if (arr[i] === discardPrev && arr[i - 1] !== undefined) {
      result.pop()
    } else if (arr[i] === doubleNext && arr[i + 1] !== undefined) {
      arr[i] = arr[i + 1]
      result.push(arr[i])
    } else if (arr[i] === doubleNext && arr[i + 1] !== undefined) {
      arr[i] = arr[i + 1]
      result.push(arr[i])
    } else if (arr[i] === doublePrev && arr[i - 1] !== undefined) {
      arr[i] = arr[i - 1];
    } else if (arr[i] === discardNext ||arr[i] ===  discardPrev ||arr[i] ===  doubleNext ||arr[i] ===  doublePrev || arr[i] === undefined){
      continue
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

function transform(arr) {
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardNext && arr[i + 1] !== undefined) {
      arr[i + 1] = undefined;
    } else if (arr[i] === discardPrev && arr[i - 1] !== undefined) {
      result.pop()
    } else if (arr[i] === doubleNext && arr[i + 1] !== undefined) {
      arr[i] = arr[i + 1]
      result.push(arr[i])
    } else if (arr[i] === doubleNext && arr[i + 1] !== undefined) {
      arr[i] = arr[i + 1]
      result.push(arr[i])
    } else if (arr[i] === doublePrev && arr[i - 1] !== undefined) {
      arr[i] = arr[i - 1];
    } else if (arr[i] === discardNext ||arr[i] ===  discardPrev ||arr[i] ===  doubleNext ||arr[i] ===  doublePrev || arr[i] === undefined){
      continue
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

console.log(transform(['--discard-prev', 1, 2, 3]))