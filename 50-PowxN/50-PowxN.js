// Last updated: 24/07/2026, 23:54:40
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    return n < 0 ? 1 / solve(x, Math.abs(n)) : solve(x, n)
};

var solve = (x, n) => {
    if (x == 0 || x == 1) return x
    let ans = 1;
    while (n) {
        if (n % 2 !== 0) {
            ans = ans * x;
            n--;
        } else {
            x = x * x;
            n = n / 2
        }
    }
    return ans;
}
