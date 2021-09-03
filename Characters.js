// CAPITALIZE LETTERS
// ex. capitalizeLetters('i love javascript') === 'I LOVE JAVASCRIPT'

function capitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');
    // // .split(' ') needs a space to create 3 word array
    // // not to seperate each letters see log below
    // // console.log(strArr)

    // for(let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(' ');

    ///////////////////////////////////////////////////////

    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substr(1))
    //     .join(' ');

    ///////////////////////////////////////////////////////

    return str
        .toLowerCase()
        .replace(
            /\b[a-z]/gi,
            char => char.toUpperCase()
        );

}

// console.log(capitalizeLetters('i love javascript'))
// console.log(capitalizeLetters('i lOvE JaVaScRiPt'))
// console.log(capitalizeLetters('i loVe javaScript'))


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// MAX CHARACTER
// ** MOST COMMON CHARACTER **
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    // console.log(charMap);
    // log shows { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
    // this makes charMap already contain a count of every letter passed

    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }

        // debugger;
        // ***Traversy Media credit***
        // In terminal 'node inspect *fileName.js*'
        // press c to continue till debugger line is found
        // char returns 'j' charMap returns { j:1, a: 2, v: 1, s:1, c:1, ... }
        // ctrl+c then c again to loop back to debugger within Node.js
        // looping back char now returns 'a' and charMap[char] returns 2
    }
    return maxChar;
}

// console.log(maxCharacter('javascript'))
// console.log(maxCharacter('javascriptttt'))
// console.log(maxCharacter('javassssscript'))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// FIZZBUZZ
// ex. program that prints nums 1-100
// for multiples of 3 print "Fizz"
// for multiples of 5 print "Buzz"
// for multiples of both 3 and 5 print "FizzBuzz"

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz());