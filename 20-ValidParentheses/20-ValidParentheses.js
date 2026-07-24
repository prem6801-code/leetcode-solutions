// Last updated: 24/07/2026, 23:55:22
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stk = [];
    let i = 0;
    let map = { "}": "{", "]": "[", ")": "(" }
    while (i < s.length) {
        if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            if (stk[stk.length - 1] == map[s[i]]) {
                stk.pop();
            } else {
                return false;
            }
        } else {
            stk.push(s[i])
        }
        i++;
    }

    return stk.length == 0 ? true : false
};