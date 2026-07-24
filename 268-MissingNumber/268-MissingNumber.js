// Last updated: 24/07/2026, 23:52:00
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let obj = {}
    for(let i=0;i<arr.length;i++){
        arr[i] in obj ? obj[arr[i]]+=1 : obj[arr[i]]=1;
    }

    for(let i=0;i<=arr.length;i++){
        if(!(i in obj)) return i
    }
};