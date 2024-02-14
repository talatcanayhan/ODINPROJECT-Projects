const palindromes = (str) => {
    //Clean the string from non alphabet and numerical characters//
    const cleanString = str => str.replace(/[^a-zA-Z0-9]/g, '');
    const reverseString = str => str.split('').reverse().join('');

    //Make the string case-insensitive//
    const pureStr = cleanString(str).toLowerCase();

    return pureStr === reverseString(pureStr);
};

// Do not edit below this line
module.exports = palindromes;
