// Last updated: 24/07/2026, 23:47:27
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            str = str.slice(0, -1);
        } else if (s[i] == "#") {
            str += str
        } else if (s[i] == '%') {
            str = str.split("").reverse().join("");
        } else {
            str += s[i]
        }
    }
    return str;
};