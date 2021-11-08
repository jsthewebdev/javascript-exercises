const sumAll = function(start, end) {
    let output = []
    for (let i = start; i <= end; i++){
        output.push(i);
    }
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    return output.reduce(reducer)
};

// Do not edit below this line
module.exports = sumAll;
