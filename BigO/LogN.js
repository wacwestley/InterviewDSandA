// recursion
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