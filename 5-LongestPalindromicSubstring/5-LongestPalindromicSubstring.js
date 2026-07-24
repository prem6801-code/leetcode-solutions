// Last updated: 24/07/2026, 23:55:46
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0;
    let end = 0;
    let checkPallindrome = (i, j) => {
        while ((i >= 0 && j < s.length) && s[i] == s[j]) {
            if ((j - i + 1) > (end - start + 1)) {
                start = i;
                end = j;
            }
            i--;
            j++;
        }
        return;
    }

    for (let i = 0; i < s.length; i++) {
        checkPallindrome(i, i);
        checkPallindrome(i, i + 1);
    }
    // console.log(start, end)
    return s.slice(start, end + 1);
};