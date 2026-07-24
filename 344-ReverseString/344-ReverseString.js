// Last updated: 24/07/2026, 23:51:42
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0; j = s.length - 1;
    let solve = (i, j) => {
        if (i > j) return;
        solve(i + 1, j - 1);
        [s[i], s[j]] = [s[j], s[i]];
        return;
    }
    solve(i,j)
};