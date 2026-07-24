// Last updated: 24/07/2026, 23:48:21
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let filcount = s.length % k    
    let filarr = new Array(filcount == 0 ? 0 : k - filcount).fill(fill)
    str = s + filarr.join("");
    let result = []
    let temp = ""
    for (let i = 0; i < str.length; i++) {
        if (i % k == 0 && i !== 0) {
            result.push(temp);
            temp = ""
        }
        temp += str[i]
    }
    result.push(temp);
    return result
};