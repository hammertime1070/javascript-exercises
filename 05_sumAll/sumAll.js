const sumAll = function(startValue, endValue) {
    if (!Number.isInteger(startValue) || !Number.isInteger(endValue)) return 'ERROR'
    if (startValue < 0 || endValue < 0) return 'ERROR'
    let sum = 0;
    let currentValue = Math.min(startValue, endValue);
    while (currentValue <= Math.max(startValue, endValue)) {
        sum += currentValue
        currentValue++
    }
    return sum
    
};

// Do not edit below this line
module.exports = sumAll;
