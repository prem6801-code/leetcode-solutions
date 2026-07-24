// Last updated: 24/07/2026, 23:55:38
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isNegative = x < 0;
    if(isNegative) return false;

    let rev = 0;
    let tmp = x
    while(tmp > 0){
        rev = ((tmp % 10)) + rev * 10
        // console.log(rev)
        tmp = Math.floor(tmp/10);
    }

    return rev == x
};