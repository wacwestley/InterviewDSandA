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

// for(let i = 1; i < 10; i++){
//     printTable(i);
//     console.log('');
// }

// function printTable(n){
//     for(let i = 1; i <= n; i++){
//         let row = n + ' * ' + i + ' = ' + n * i;
//         console.log(row);
//     }
// }

// console.log(printTable(10))

// Calculate the sum of numbers from 1 to 10

function sumOf(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

// console.log(sumOf(10));

// Calculate 10

function calcTen(num){
    let prod = 1;
    for(let i = 1; i <= num; i++){
        prod *= i;
    }
    return prod;
}

// console.log(calcTen(10))

// calculate the sum of odd numbers greater than 10 and less than 30

function sumOddRange(num){
    let sum = 0
    for(let i = 11; i <= num; i += 2){
        sum += i;
    }
    return sum;
}

// console.log(sumOddRange(30))

// function that will convert from Celcius to Fahrenheit

function celsiusToFahrenheit(n){
    return n * 1.8 + 32;
}

// let r = celsiusToFahrenheit(20)
// console.log(r)

// function that will convert from Fahrenheit to Celcius

function fahrenheitToCelsius(n){
    return (n - 32) / 1.8;
}

// let c = fahrenheitToCelsius(68)
// console.log(c)

