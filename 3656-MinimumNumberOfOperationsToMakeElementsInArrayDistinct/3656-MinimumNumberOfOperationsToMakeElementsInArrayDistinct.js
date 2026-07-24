// Last updated: 24/07/2026, 23:47:43
/**
 * @param {number[]} nums
 * @return {number}
 */



var minimumOperations = function (nums) {
    // let idx = -1
    // for (let i = nums.length - 1; i > 0; i--) {
    //     if (nums[i - 1] == nums[i]) {
    //         idx = i - 1
    //         break;
    //     }
    // }

    // if (idx == -1) return 0
    // console.log(idx)
    // if (idx > 0 && idx < 3) return 1
    // return Math.ceil((idx + 1) / 3) ;
    let ops = 0
    let idx = 0
    let checkDistinct = (nums, i) => {
        let set = new Set();
        for (i; i < nums.length; i++) {
            if (set.has(nums[i])) {
                ops++;
                return false
            } else {
                set.add(nums[i]);
            }
        }

        return true;
    }

    while (idx < nums.length) {
        let check = checkDistinct(nums,idx);
        if (check) {
            return ops;
        } else {
            idx += 3
        }
    }

    return ops;
};  