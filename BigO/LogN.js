// recursive
function logFunc(n) {
    if(n === 0) return "done";
    n = Math.floor(n / 2);
    return logFunc(n);
};

// non-recursive
function logn(n) {
    while (n > 1) {
        n = Math.floor(n/2);
    }
}

// binary search with big O logN
let arr = [];
let start = 0;
let target = 100000;

for (let i = 0; i < 1024; i++) {
    arr.push(i)
}

let end = arr.length - 1;

function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end));
    if (start > end) return false;
    let midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === target) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target)
    else return binarySearch(arr, midIndex + 1, end, target)
}

binarySearch(arr, start, end, target)