// Last updated: 24/07/2026, 23:49:39
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    let rankMap = {}
    let rnk = 1
    for (let el of newArr) {
        if (!(el in rankMap)) {
            rankMap[el] = rnk;
            rnk++
        }
    }

    return arr.map((item) => rankMap[item])
};