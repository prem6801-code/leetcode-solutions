// Last updated: 24/07/2026, 23:50:17
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(nums, k) {
    if (nums.length % k !== 0) return false;
    nums = nums.sort((a, b) => a - b)
    let map = new Map();

    for (let el of nums) {
        map.set(el, (map.get(el) || 0) + 1)
    }
    
    let keys = [...map.keys()];
    let res = []
    for (let i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) <= 0) continue;
        let j = 0;
        let seq = keys[i]
        let temp = [];
        while (j < k && map.get(seq) > 0) {
            temp.push(seq);
            map.set(seq, map.get(seq) - 1)
            seq++;
            j++;
        }
        if (temp.length !== k) return false
        res.push([...temp]);
        if (map.get(keys[i]) > 0) i--;
    }

    return true;
};