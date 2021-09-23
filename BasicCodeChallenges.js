// Print numbers 1-10
function printNum(num) {
    for(let i = 1; i <= num; i++) {
        console.log(i);
    }
}

// console.log(printNum(10))

// Print odd numbers

function oddNum(num) {
    for(let i = 1; i <= num; i += 2){
        console.log(i);
    }
}

// console.log(oddNum(100))

// Print the multiplication table with 7

function sevenMultiple(num) {
    for(let i = 1; i <= num; i++){
        let row = '7 * ' + i + ' = ' + 7 * i;
        console.log(row);
    }
}

// console.log(sevenMultiple(10))

// Print all the multiplication tables with numbers from 1 to 10

// for(let i = 1; i < 10; i++) {
//     printTable(i);
//     console.log('');
// }

// function printTable(n) {
//     for(let i = 1; i <= n; i++) {
//         let row = n + ' * ' + i + ' = ' + n * i;
//         console.log(row);
//     }
// }

// console.log(printTable(10))

// Calculate the sum of numbers from 1 to 10

function sumOf(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumOf(10));

// Calculate 10

function calcTen(num) {
    let prod = 1;
    for(let i = 1; i <= num; i++) {
        prod *= i;
    }
    return prod;
}

// console.log(calcTen(10))

// calculate the sum of odd numbers greater than 10 and less than 30

function sumOddRange(num) {
    let sum = 0
    for(let i = 11; i <= num; i += 2) {
        sum += i;
    }
    return sum;
}

// console.log(sumOddRange(30))

// function that will convert from Celcius to Fahrenheit

function celsiusToFahrenheit(n) {
    return n * 1.8 + 32;
}

// let r = celsiusToFahrenheit(20)
// console.log(r)

// function that will convert from Fahrenheit to Celcius

function fahrenheitToCelsius(n) {
    return (n - 32) / 1.8;
}

// let c = fahrenheitToCelsius(68)
// console.log(c)

// Calculate the sum of numbers in an array of numbers

function sumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// const arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// const sum = sumArr(arr);
// console.log(sum);

// Calculate the average of the numbers in an array of numbers

function aveArr(arr) {
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum / n;
}

// const arr = [1, 3, 9, 15, 90];
// const avg = aveArr(arr);
// console.log('Average: ', avg);

// Create a function that receives an array of numbers and
// // returns an array containing only the positive numbers
// SOLUTION 1

// function getPositives(arr) {
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         if (el >= 0) {
//             arr2.push(el);
//         }
//     }
//     return arr2;
// }

// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// const arr2 = getPositives(arr);
// console.log(arr2);

// Create a function that receives an array of numbers and
// // returns an array containing only the positive numbers
// SOLUTION 2

// function getPositives(arr) {
//     let arr2 = [];
//     for(let el of arr) {
//         if (el >= 0) {
//             arr2.push(el);
//         }
//     }
//     return arr2;
// }

// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// const arr2 = getPositives(arr);
// console.log(arr2);

// Create a function that receives an array of numbers and
// // returns an array containing only the positive numbers
// SOLUTION 3

function getPositives(arr) {
    return arr.filter(el => el >= 0);
}

// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// const arr2 = getPositives(arr);
// console.log(arr2);

// Find the maximum number in an array of numbers

function findMax(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// const max = findMax(arr);
// console.log('Max: ', max)

// Print the first 10 Fibonacci numbers without recursion

function fibToNum(num) {
    let f0 = 0;
    console.log(f0);
    let f1 = 1;
    console.log(f1);
    for(let i = 2; i < num; i++) {
        let fi = f1 + f0;
        console.log(fi);
        f0 = f1;
        f1 = fi;
    }
}

// console.log(fibToNum(15));

// Create a function that will find the nth Fibonacci number using recursion

function recursFib(num) {
    if(num === 0)
        return 0;
    if(num === 1)
        return 1;
    return recursFib(num - 1) + recursFib(num - 2);
}

// const n = recursFib(10);
// console.log(n)

// Create a function that will return a boolean specifying if
// // a number is prime

function isPrime(num) {
    if(num < 2)
        return false;
    if(num == 2)
        return true;
    let maxDiv = Math.sqrt(num);
    for(let i = 2; i <= maxDiv; i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}

// console.log(2, " is prime? ", isPrime(2))
// console.log(3, " is prime? ", isPrime(3))
// console.log(4, " is prime? ", isPrime(4))
// console.log(5, " is prime? ", isPrime(5))
// console.log(9, " is prime? ", isPrime(9))

// Calculate the sum of digits of a positive integer number

function sumDigits(num) {
    let s = num.toString();
    let sum = 0;
    for(let char of s) {
        let digit = parseInt(char);
        sum += digit;
    }
    return sum;
}

// const sum = sumDigits(1234231);
// console.log('Sum: ', sum)