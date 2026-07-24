// Last updated: 24/07/2026, 23:50:06
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let set = new Set();
    let max = 0;
    let count = 0;
    let i = 0
    let j = i

    while (j < fruits.length) {
        // console.log("inside while loop",set)
        if (!set.has(fruits[j]) && set.size < 2) {
            set.add(fruits[j]);
            j++;
            count++;
        } else if (!set.has(fruits[j]) && set.size >= 2) {
            max = Math.max(count, max);
            i++;
            j = i;
            count = 0;
            set = new Set();

            if (max >= fruits.length - i) return max
        } else {
            j++;
            count++;
        }
    }

    return Math.max(count, max);
};