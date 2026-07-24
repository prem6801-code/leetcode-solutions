// Last updated: 24/07/2026, 23:53:55
/**
 * @param {number[]} heights
 * @return {number}
 */


// 

var findNse = (arr) => {
    let j = arr.length - 1;
    let res = Array(arr.length).fill(arr.length);
    let stack = [];
    while (j >= 0) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[j]) {
            stack.pop()
        }

        if (stack.length) {
            res[j] = stack[stack.length - 1];
        }

        stack.push(j);
        j--
    }

    return res
}

var findPse = (arr) => {
    let res2 = Array(arr.length).fill(-1)
    let stack2 = []
    for (let i = 0; i < arr.length; i++) {
        while (
            stack2.length &&
            arr[stack2[stack2.length - 1]] >= arr[i]
        ) {
            stack2.pop();
        }
        if (stack2.length) {
            res2[i] = stack2[stack2.length - 1];
        }
        stack2.push(i);
    }

    return res2
}

var largestRectangleArea = function (heights) {
    let nse = findNse(heights);
    let pse = findPse(heights);
    // console.log(nse,pse)
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        maxArea = Math.max(maxArea, (nse[i] - pse[i] - 1) * heights[i])
    }
  return maxArea
};