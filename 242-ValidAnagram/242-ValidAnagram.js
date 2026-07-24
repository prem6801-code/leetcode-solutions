// Last updated: 24/07/2026, 23:52:03
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let O1={}
    let O2={}

    for(let i=0;i<s.length;i++){
        s[i] in O1 ? O1[s[i]]+=1 : O1[s[i]]=1
        t[i] in O2 ? O2[t[i]]+=1 : O2[t[i]]=1
    }

    console.log(O1,O2)
     for(let key in O1){
        if(!(key in O2 )) {
            return false;
        }

        if(O1[key] !== O2[key]){
            return false
        }
     }

     return true; 
};