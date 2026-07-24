// Last updated: 24/07/2026, 23:50:35
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (tempreatures) {
    let stack = []
    let res = Array(tempreatures.length).fill(0);

    for (let i = tempreatures.length - 1; i >= 0; i--) {
        while (stack.length && tempreatures[i] >= tempreatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            res[i] = stack[stack.length - 1] - i
        }

        stack.push(i)
        // console.log(stack)
    }

    return res
};