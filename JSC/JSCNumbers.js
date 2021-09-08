// ADD ALL NUMBERS
// return sum of all params - return no arrays
// ex. addAll(2,5,6,7) === 20

// ES5
// function addAll() {
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;

//     for(let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// ES6
function addAll(...numbers) {
    // ...rest returns [ 2, 5, 6, 7, 5 ] vs line 7 ^^^

    // // ex. .forEach()
    // let total = 0;
    // numbers.forEach(num => total += num);
    // return total;

    // ex. .reduce()
    return numbers.reduce((acc, cur) => acc + cur)
}

// console.log(addAll(2,5,6,7))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// SUM ALL PRIMES
// Pass a num to loop up to and add all primes. A prime number is a whole
//     num greater than 1 whole only factors are 1 and itself

function sumAllPrimes(num) {
    let total = 0;

    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for(let i = 2; i <= num; i++) {
        if(checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

// console.log(sumAllPrimes(10))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// SEEK & DESTROY
// Remove from array whatever is in following arguments. Return leftover
//     values in an array
// ex. seekAndDestroy([2, 3, 4, 5, 6, 6, 'hello'], 2, 6) === [3, 4, 'hello']

// // SOLUTION 1
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     function filterArr(arr) {
//         // return true if not in array
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr);
// }

// SOLUTION 2
function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// SORT BY HEIGHT
// Some people are standing in a row. There are trees between them that
//     cannot move. Rearrange the people by height in a non-descending 
//     order without moving the trees
// ex. a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) === [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

    const sortArr = arr2.sort((a, b) => a - b)

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;
}

a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a))

// MISSING LETTERS
// Find the missing letter in the letter range and return. If all
//     are present, return undefined
// ex. missingLetters('abce') == 'd'
// ex. missingLetters('abcdefghjklmno') == 'i'

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}

// console.log(missingLetters('abcdefghjklmno'))

// EVEN & ODD SUMS
// ex. [50, 60, 60, 45, 71] == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

    return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]))