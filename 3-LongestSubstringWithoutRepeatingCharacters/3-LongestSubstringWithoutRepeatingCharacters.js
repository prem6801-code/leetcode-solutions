// Last updated: 24/07/2026, 23:55:49
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0; j = 0; max = 0
    let set = new Set()
    while (j < s.length) {
        if (set.has(s[j])) {
            max = Math.max(set.size, max)
            while (i < j) {
                if (s[i] == s[j]) {
                    set.delete(s[i])
                    i++
                    break
                }
                set.delete(s[i])
                i++
            }
        } else {
            set.add(s[j])
            j++
        }
    }
    max = Math.max(set.size, max)
    return max
};