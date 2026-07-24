// Last updated: 24/07/2026, 23:55:35

/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
    let num = 0;
    let negative = false
    let count = 0
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt(0) > 58 || s[i].charCodeAt(0) < 48) {
            if (count === 0 && (s[i] === "-" || s[i] === "+")) {
                if (s[i] === "-") negative = true
            } else {
                break;
            }
        }

        if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
            num = (num * 10) + s[i].charCodeAt(0) - 48
        }
        count++
    }
    const max = Math.pow(2, 31)
    return negative ? num > max ? 0 - max : 0 - num : num > max - 1 ? max - 1 : num
};