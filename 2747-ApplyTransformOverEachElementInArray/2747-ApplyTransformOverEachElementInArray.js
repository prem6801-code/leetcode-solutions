// Last updated: 24/07/2026, 23:47:58
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = arr.map((item,i)=>{
        return fn(item,i)
    })

    return newArr
};