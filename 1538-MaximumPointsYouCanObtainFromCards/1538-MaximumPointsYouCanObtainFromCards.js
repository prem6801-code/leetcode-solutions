// Last updated: 24/07/2026, 23:49:05
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (arr, k) {
    let sum = 0
    let max = -Infinity
    let temp = k - 1;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    if (k == arr.length) return sum;
    max = sum;

    let left = arr.length - 1
    for (let i = 0; i < k; i++) {
        sum -= arr[temp] || 0;
        sum = sum + (arr[left] || 0);
        max = Math.max(max, sum)
        temp--;
        left--
    }
    return Math.max(max, sum);
};