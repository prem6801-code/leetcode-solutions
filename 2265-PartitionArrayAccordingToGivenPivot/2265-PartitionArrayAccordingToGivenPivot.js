// Last updated: 24/07/2026, 23:48:20
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let less = [], greater = [], equal = [];
    for (let el of nums) {
        if(el<pivot){
            less.push(el)
        }else if(el == pivot){
            equal.push(el)
        }else{
            greater.push(el)
        }
    }

    return [...less,...equal,...greater]
};