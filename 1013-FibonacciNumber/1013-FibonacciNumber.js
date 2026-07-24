// Last updated: 24/07/2026, 23:50:02
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
    if (n in memo) {
        return memo[n]
    }
    if (n <= 1) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
};

