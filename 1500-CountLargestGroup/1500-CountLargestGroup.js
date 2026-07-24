// Last updated: 24/07/2026, 23:49:10
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let map = new Map();
    let extractDigitSum = (digit) => {
        let sum = 0
        while (digit > 0) {
            sum += digit % 10
            digit = Math.floor(digit / 10);
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        let sum = 0
        i >= 10 ? sum = extractDigitSum(i) : sum = i;
        if (!map.has(sum)) map.set(sum, []);
        map.get(sum).push(i);
    }

    const arr = [...map.values()].sort((a, b) => {
        if (a.length > b.length) return -1
        return 1
    })
    let size = arr[0].length;
    let count = 0;
    for (item of arr) {
        if (item.length == size) count++
    }
    return count;
};