const removeFromArray = function (array, ...toRemove) {

    for (let i = 0; i < toRemove.length; i++) {

        for(let j=0; j<array.length; j++){
            console.log('length before loop', array.length);
            const index = array.indexOf(toRemove[i]);
            if (index !== -1) {
                array.splice(index, 1);
            }
            console.log(array.length);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
