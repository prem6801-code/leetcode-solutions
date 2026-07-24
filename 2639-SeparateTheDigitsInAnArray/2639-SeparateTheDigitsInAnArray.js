// Last updated: 24/07/2026, 23:48:02
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let digits = []
    let splitNum = (num) => {
        let digit = []
        while (num) {
            digit.push(num%10);
            num = Math.floor(num/10)
        }
        digits.push(...digit.reverse())
    }

    for(num of nums){
        splitNum(num)
    }

    return digits
};