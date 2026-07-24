// Last updated: 24/07/2026, 23:55:30
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const s1 = [...strs[0]];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < s1.length; j++) {
            if (s1[j] !== strs[i].charAt(j)) {
                s1[j] = "";
            } else {
                if (j > 0 && !s1[j - 1]) {
                    s1[j] = ""
                }
            }
        }
    }
    return s1.join("");
};