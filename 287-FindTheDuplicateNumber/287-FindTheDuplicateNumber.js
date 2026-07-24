// Last updated: 24/07/2026, 23:51:57
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (arr) {
    // let obj = {}
    // for(let i=0;i<arr.length;i++){
    //     arr[i] in obj ? obj[arr[i]]+=1 : obj[arr[i]]=1;
    // }

    // for(let key in obj){
    //     if(obj[key]>1) return parseInt(key)
    // }

    // arr.sort((a,b)=>a-b)
    //  for(let i=0;i<arr.length;i++){
    //     if(arr[i]==arr[i+1]) return arr[i]
    // }
    // arr.sort();
    // -----
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] in obj) {
    //         return arr[i]
    //     } else {
    //         obj[arr[i]] = 1
    //     }
    // }
   arr.sort((a,b)=>a-b);
   for(let i=0;i<arr.length-1;i++){
    if(arr[i]==arr[i+1]) return arr[i];
   }
};