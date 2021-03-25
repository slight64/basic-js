const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {


    if(typeof(sampleActivity) !== 'string'){
      return false;
    } else if(Number.isFinite(+sampleActivity) || Number.isNaN(+sampleActivity)){
      return false;
    }

    return Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD);
};
