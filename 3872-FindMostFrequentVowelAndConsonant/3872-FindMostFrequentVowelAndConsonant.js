// Last updated: 24/07/2026, 23:47:28
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map()
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1)
    }

    // console.log(map);
    let c1 = 0;
    let c2 = 0
    for(let [key,value] of map.entries()){
        if(["a","e","o","i","u"].includes(key)){
            c1 = Math.max(c1,value)
        }else{
            c2 = Math.max(c2,value)
        }
    }

    return c1+c2
};