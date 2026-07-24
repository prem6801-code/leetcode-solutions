// Last updated: 24/07/2026, 23:51:35
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = [];
    for (let n of num) {
        while (k && stack[stack.length - 1] > n) {
            stack.pop();
            k--
        }
        if (!(stack.length == 0 && n == 0)) {
            stack.push(n)
        }
    }
    while (k && stack.length) {
        stack.pop();
        k--
    }
    // console.log(stack)
    return stack.length ? stack.join("") : "0"
};