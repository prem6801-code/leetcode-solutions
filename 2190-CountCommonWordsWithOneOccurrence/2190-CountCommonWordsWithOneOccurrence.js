// Last updated: 24/07/2026, 23:48:31
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let map1 = {};
    let map2 = {};
    let n = words1.length > words2.length ? words1.length : words2.length;

    for (let i = 0; i < n; i++) {
        if (i < words1.length) {
            map1[words1[i]] = (map1[words1[i]] || 0) + 1
        }
        if (i < words2.length) {
            map2[words2[i]] = (map2[words2[i]] || 0) + 1
        }
    }
    // console.log(map1, map2)
    let count = 0;
    Object.keys(map1).map((item) => {
        if (map1[item] == 1 && map2[item] == 1) count++
    })
    return count;
};