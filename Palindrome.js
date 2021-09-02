const palindrome = str => {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}

console.log(palindrome('aibohphobia'))
console.log(palindrome('RaceCar'))
console.log(palindrome('Anna'))
console.log(palindrome('Dog'))
console.log(palindrome('table'))