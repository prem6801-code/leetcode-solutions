// Last updated: 24/07/2026, 23:47:50
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let set = new Set()
    let arr = Array.from(new Set(...[word.split("")]));
    let ct = 0
    for (let el of arr) {
        if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) {
            if (set.has(el.toLowerCase())) {
                ct++
            }
        } else if (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123) {
            if (set.has(el.toUpperCase())) {
                ct++
            }
        }
        set.add(el);
    }
    return ct;
};