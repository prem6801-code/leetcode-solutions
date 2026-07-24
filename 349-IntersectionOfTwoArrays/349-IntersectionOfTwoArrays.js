// Last updated: 24/07/2026, 23:51:39
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set([...nums1]);
    let set2 = new Set([...nums2]);
    // let result = []
    let res = [...set1].filter((item) => set2.has(item))
    return res;
};