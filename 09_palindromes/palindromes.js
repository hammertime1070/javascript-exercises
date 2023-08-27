const palindromes = function (palindromeCandidate) {
    processedPalindrome = palindromeCandidate.toLowerCase().replace(/[^a-z0-9]/gi, "")
    return processedPalindrome == processedPalindrome.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
