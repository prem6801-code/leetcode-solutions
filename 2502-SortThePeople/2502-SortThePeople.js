// Last updated: 24/07/2026, 23:48:06
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let obj = {};
    for (let i = 0; i < heights.length; i++) {
        obj[heights[i]] = names[i]
    }
    let result = Object.keys(obj).sort((a, b) => b - a).map((item) => item = obj[item]);
    return result;
};