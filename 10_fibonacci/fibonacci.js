const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS'
    }
    else {
        sequence = [1, 1]
        for (let i = 0; i < n - 2; i++) {
            nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
            sequence.push(nextNumber)
        }
        return sequence[n - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;