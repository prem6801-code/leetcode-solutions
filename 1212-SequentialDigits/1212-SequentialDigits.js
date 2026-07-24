// Last updated: 24/07/2026, 23:49:42
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let digits = "123456789";
    let min = low.toString().length;
    let max = high.toString().length;
    let res = []
    // console.log(min, max)
    for (min; min <= max; min++) {
        let j = 0; k = min;
        while (k <= digits.length) {
            // console.log("inside inner loop")
            let num = parseInt(digits.slice(j, k));
            // console.log(num)
            if (num > high) {
                return res
            }
            if (num >= low) {
                res.push(num);
            }
            j++
            k++
            // console.log(res)
        }
    }
    // console.log(res)
    return res
};