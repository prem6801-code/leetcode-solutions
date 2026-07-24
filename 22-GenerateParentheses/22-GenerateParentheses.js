// Last updated: 24/07/2026, 23:55:16
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    let helper = (str, o, c) => {
        if (o == 0 && c == 0) {
            result.push(str);
            return
        }
        if (o !== 0) helper(str + "(", o - 1, c)
        if (c > o) helper(str + ")", o, c - 1);
        return;
    }
    helper("", n, n);
    return result;
};