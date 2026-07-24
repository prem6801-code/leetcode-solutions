// Last updated: 24/07/2026, 23:48:27
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        // console.log("here")
        let str = words[i]
        let j=0;
        let k=str.length-1;
        let pallindrome = true;
        while(j<=k){
            // console.log(str[j],str[k])
            if(str[j]!==str[k]) {
                pallindrome = false;
                break;
            }
            j++;
            k--;
        }
        // console.log(pallindrome,words[i])
        if(pallindrome) return words[i];
    }
    return ""
};