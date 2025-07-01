const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
    console.log(string);
    if(cleanedString.split("").reverse().join("") == cleanedString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
