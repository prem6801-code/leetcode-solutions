// Last updated: 24/07/2026, 23:49:47
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    let map = {};
    let visited = new Set();
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i])) {
            continue
        }
        while (stack[stack.length - 1] > s[i] && map[stack[stack.length - 1]] > i) {
            let el = stack.pop()
            visited.delete(el)
        }
        stack.push(s[i])
        visited.add(s[i])
    }
    return stack.join("")
};