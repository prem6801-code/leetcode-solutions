// Last updated: 24/07/2026, 23:51:41
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // let obj = {}
    let map = new Map();
    for (let num of nums) {
        // num in obj ? obj[num]++ : obj[num] = 0;
        map.set(num, (map.get(num) || 0) + 1)
    }
    // console.log(obj)
    let arr = Array.from({ length: nums.length + 1 }, () => []);

    for (let [key, value] of map) {
        arr[value].push(key)
    }

    // console.log(arr)
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = 0
        while (k && j < arr[i].length) {
            res.push(arr[i][j++])
            k--
        }
        if (k == 0) return res
    }
    return res
};