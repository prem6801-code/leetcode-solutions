// Last updated: 24/07/2026, 23:48:44
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {

    for (let i = num.length - 1; i >= 0; i--) {
        if ((num[i].charCodeAt(0) - 48) % 2 == 1) {
            return num.slice(0, i + 1);
        }
    }

    return ""
};