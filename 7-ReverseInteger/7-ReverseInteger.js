// Last updated: 24/07/2026, 23:55:39
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = x;
    let rev = 0

    if (num < 0) {
        num = num * -1;
    }

    while (num > 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit
        num = Math.floor(num / 10);
    }

    // console.log(rev)
    return x < 0 ? (-rev | 0) === -rev ? -rev : 0 : (rev | 0) === rev ? rev : 0 ;

};