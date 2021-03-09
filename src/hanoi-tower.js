const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(dn,ts) {
  let turns = 2**dn-1;
  let seconds = Math.trunc(turns/ts * 3600)
  return {'turns': turns, 'seconds' : seconds}
};
