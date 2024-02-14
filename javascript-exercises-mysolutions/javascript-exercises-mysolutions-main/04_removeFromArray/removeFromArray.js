const removeFromArray = function(arr, ...itemsToBeDeleted) {
    for(i of itemsToBeDeleted) {
        if(arr.includes(i))
            arr.splice(arr.indexOf(i), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
