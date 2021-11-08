const reverseString = function(str) {
    let splitString = str.split("");
    let reverseSplit = splitString.reverse()
    let joined = reverseSplit.join("")
    return joined;
};

// Do not edit below this line
module.exports = reverseString;
