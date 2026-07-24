// Last updated: 24/07/2026, 23:47:18
/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let ans = "";
    let k = 122;

    let arr = Array.from({ length: 26 }, () => {
        const ch = String.fromCharCode(k);
        k--;
        return ch;
    });
    // console.log(arr)
    for (let i = 0; i < words.length; i++) {
        let temp = 0
        // console.log(words[i])
        for (let j = 0; j < words[i].length; j++) {
            // console.log(words[i][j], words[i][j].charCodeAt(0) - "a".charCodeAt(0))
            temp += weights[words[i][j].charCodeAt(0) - "a".charCodeAt(0)]
        }
        ans += arr[temp % 26]
        // console.log(temp)
    }

    return ans;
};