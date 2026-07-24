// Last updated: 24/07/2026, 23:55:33
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0; i = 0; j = height.length-1;

    while (i < j) {
        if (height[i] < height[j]){
            maxArea = Math.max(maxArea, height[i] * (j - i));
            i++
        }else{
            maxArea = Math.max(maxArea, height[j] * (j - i));
            j--
        }
    }


    return maxArea
};