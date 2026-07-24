// Last updated: 24/07/2026, 23:54:48
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let ans1 = 0n
    let ans2 = 0n
    for (let i = 0; i < num1.length; i++) {
        ans1 = BigInt((num1[i].charCodeAt(0) - 48)) + (ans1 * 10n)
    }

    for (let i = 0; i < num2.length; i++) {
        ans2 = BigInt((num2[i].charCodeAt(0) - 48)) + (ans2 * 10n)
    }
    // console.log(ans1, ans2)
    // console.log((BigInt(ans1) * BigInt(ans2)))
    let ans = BigInt(ans1) * BigInt(ans2) + ""
    return ans
};