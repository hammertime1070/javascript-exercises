const removeFromArray = function(array, ...args) {
    newArray = array.filter(checkArgs)
    function checkArgs(element) {
        return !args.includes(element)
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
