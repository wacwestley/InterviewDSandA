// LONGEST WORD
// ex. longestWord('Hello, my name is Bob') === 'hello'
// ex. longestWord('Hello there, my name is Bob') === ['hello', 'there']

function longestWord(sen) {
    // filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // if multiple, put into new array
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

    // Check if more than one array val
    if(longestWordArr.length === 1) {
        // Return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

// console.log(longestWord('Hello there, my name is Bob'))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// ARRAY CHUNKING
// Split array into chunked arrays of specific lengths
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // SOLUTION 1
    // // init chunked arr
    // const chunkedArr = [];
    // // set index
    // let i = 0;

    // // loop while index is less than array length
    // while(i < arr.length) {
    //     // slice from index to index+chunkLength
    //     // then push to chunkedArr
    //     chunkedArr.push(arr.slice(i, i + len));
    //     // increment by chunk length
    //     i += len;
    // }
    // return chunkedArr;

    /////////////////////////////////////////////////

    // SOLUTION 2
    // init chunked arr
    const chunkedArr = [];
    // loop through arr
    arr.forEach(val => {
        // get last element
        const last = chunkedArr[chunkedArr.length - 1];
        
        // check if last and if last.length === chunk.length
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 1))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2],[3, 4],[5, 6],[7]] === [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => a.concat(b))

    // SOLUTION 2
    // return [].concat.apply([], arrays);

    // SOLUTION 3
    // function add(a, b, c) {
    //     return a+b+c;
    // }
    // const arr = [1, 2, 3];
    // console.log(add(...arr))
    // ^^ explains ...arrays on line 96

    return [].concat(...arrays);
}

// console.log(flattenArray([[1, 2],[3, 4],[5, 6],[7]]))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// ANAGRAM
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

// console.log(isAnagram('elbow', 'below'))
// console.log(isAnagram('Dormitory', 'dirty room'))

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// LETTER CHANGES
// ex. Change every letter to the one that follows it and cap vowels
// z to a
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str
        .toLowerCase()
        .replace(/[a-z]/gi, char => {
            if(char === 'z' || char === 'Z') {
                return 'a';
            } else {
                return String.fromCharCode(char.charCodeAt() + 1);
            }
        }
    );

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}

console.log(letterChanges('Hello There'))