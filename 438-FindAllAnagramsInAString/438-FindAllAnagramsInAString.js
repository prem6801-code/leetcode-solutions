// Last updated: 24/07/2026, 23:51:29
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let res = []
    if (p.length > s.length) return res

    let pCount = Array(26).fill(0);
    let sCount = Array(26).fill(0);

    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 97]++;
    }
    let pstr = pCount.join("");
    let j = 0;
    // console.log(pstr)
    for (let i = 0; i < s.length; i++) {
        if ((i - j)+1 > p.length) {
            sCount[s[j].charCodeAt(0) - 97]--
            j++
        }
        sCount[s[i].charCodeAt(0) - 97]++;
        // console.log(sCount.join(""),pstr,s[i],s[j])
        if (sCount.join("") == pstr) {
            res.push(j)
        }
    }

    return res
};