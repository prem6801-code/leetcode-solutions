// Last updated: 24/07/2026, 23:48:16
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let prefCount=0;
    for (let i = 0; i < words.length; i++) {
        let count = 0;
        for (let j = 0; j < pref.length; j++) {
            if (words[i][j] == pref[j]) {
                count++;
            }
        }
        if(count==pref.length){
            prefCount+=1;
        }
    }

    return prefCount
};