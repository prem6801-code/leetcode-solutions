// Last updated: 24/07/2026, 23:47:33
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let count = 0
    let set = new Set();
    for (let i = 0; i < fruits.length; i++) {
        let found = false;
        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] >= fruits[i] && !set.has(j)) {
                set.add(j);
                found = true;
                break;
            }
        }
        if (!found) count++
    }
    return count;
};