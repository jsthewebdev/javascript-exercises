const removeFromArray = function(array, number) {
    let index = array.indexOf(number);
    let newArray = array.splice(index, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
