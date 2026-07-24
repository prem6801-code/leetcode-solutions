// Last updated: 24/07/2026, 23:48:55
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let stack = [];
    let level = 0
    for (let i = 0; i < s.length; i++) {
        let lev
        if (s[i] == "(") {
            stack.push(s[i]);
            level = Math.max(stack.length, level)
        } else if (s[i] == ")") {
            stack.pop();
            level = Math.max(stack.length, level)
        }
    }
    return level;
};