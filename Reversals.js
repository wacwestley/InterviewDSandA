// REVERSE STRING
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // return str.split('').reverse().join('');

    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    /////////////////////////////////////////////

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    //////////////////////////////////////////////

    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    ///////////////////////////////////////////////

    // let revString = '';
    // str.split('').forEach(char => {revString = char + revString});
    // return revString;

    ///////////////////////////////////////////////

    // return str.split('').reduce((revString, char) => {
    //     return char + revString;
    // }, '');
}

// console.log(reverseString('hello'));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// PALINDROME
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === 'false'

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
}

// console.log(isPalindrome('hello'))
// console.log(isPalindrome('racecar'))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// REVERSE AN INTEGER
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    //Math.sign(int) is for keeping the negative sign with the int
    return parseInt(revString) * Math.sign(int);
}

console.log(reverseInt(12345))
console.log(reverseInt(-12345))