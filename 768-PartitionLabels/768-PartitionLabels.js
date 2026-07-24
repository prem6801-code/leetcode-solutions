// Last updated: 24/07/2026, 23:50:30
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i
    }

    let res = [];
    let prev = 0;
    let max = map[s[0]];

    for (let i = 0; i < s.length; i++) {
        let el = map[s[i]]
        if (el > max) {
            max = el;
        }
        if (i == max) {
            res.push((max - prev) + 1);
            prev = i + 1
        }
    }
    // console.log(max, prev)
    return res
};