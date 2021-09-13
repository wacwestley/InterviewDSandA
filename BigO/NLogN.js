function nLogNFunc(n) {
    let y = n;
    while (n > 1) {
        n = Math.floor(n/2);
        for (let i = 1; i <= y; i++) {
            console.log(i);
        }
    }
}

// merge sort with nLogn

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex, arr.length)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let resultArr = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

let arr = [12, 3, 16, 6, 5, 1];
console.log(mergeSort(arr))