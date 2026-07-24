// Last updated: 24/07/2026, 23:47:36
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    let string = s
    let temp = ""
    while (string.length > 2) {
        for (let i = 0; i < string.length - 1; i++) {
            temp += ((string[i] - 0) + (string[i + 1] - 0)) % 10;
        }
        string = temp;
        temp = ""
    }

    return string[0] == string[1]
};