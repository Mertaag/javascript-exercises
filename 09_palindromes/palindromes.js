const palindromes = function (string) {
    const punctuation = /[\.,?! ]/g;
    string = string.replace(punctuation, '').toLowerCase();
    let array = string.split('');
    let reversed = array.slice().reverse();
    array = array.join('');
    reversed = reversed.join('');

    if (array === reversed) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
