// Last updated: 24/07/2026, 23:50:51
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if ((i == 0 || flowerbed[i - 1] == 0) && flowerbed[i] == 0 && (i + 1 == flowerbed.length || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1
            n--;
        }
    }
    return n <= 0 ? true : false
};