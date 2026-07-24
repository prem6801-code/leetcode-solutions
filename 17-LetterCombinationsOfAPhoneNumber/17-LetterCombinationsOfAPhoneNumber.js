// Last updated: 24/07/2026, 23:55:27
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length == 0) return []
    let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res = []
    let i = 0
    let string = []
    let helper = (digits, string, i, res, map) => {
        if (i >= digits.length) {
            res.push(string.join(""));
            return
        }
        let num = digits[i] - 0
        let val = map[num]

        for (let j = 0; j < val.length; j++) {
            string.push(val[j])
            helper(digits, string, i+1, res, map)
            string.pop()
        }
    }

    helper(digits, string, i, res, map)
    return res
};