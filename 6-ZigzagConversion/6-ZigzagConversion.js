// Last updated: 24/07/2026, 23:55:43
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s; 

    let dp = Array.from({ length: numRows }, () => []); 
    let row = 0, step = 1;

    for (let char of s) {
        dp[row].push(char);
        if (row === 0) step = 1;
        if (row === numRows - 1) step = -1;

        row += step;
    }

    return dp.flat().join('');
};