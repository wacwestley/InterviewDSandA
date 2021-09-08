// LEAST COMMON CHARACTER
// ex. minCharacter('common') == ['c', 'n']

function minCharacter(str) {
    const charMap = {};
    let minNum = 1;
    let minChar = '';

    str.split('').forEach(char => {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    // console.log(charMap)
    for(let char in charMap) {
        if(charMap[char] <= minNum) {
            minNum = charMap[char];
            minChar += char;
            console.log(charMap[char]);
        }
    }
    return minChar;
}

// console.log(minCharacter('common'))
// console.log(minCharacter('cervantes'))
// console.log(minCharacter('bananab'))

// CODE BRINGS BACK THE FIRST LEAST COMMON CHARACTER IN SINGLE STRING
// EX. 'common' RETURNS cn AND 'bananab' RETURNS NOTHING
// EXPLORE minNum AND FINDING THE SMALLEST NUM FROM charMap
// LOOK IN JSCArrays.js AT longestWord()
// STILL WORKING ON