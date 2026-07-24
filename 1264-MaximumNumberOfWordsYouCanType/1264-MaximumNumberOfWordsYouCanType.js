// Last updated: 24/07/2026, 23:49:32
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let set = new Map();
    for (let i = 0; i < brokenLetters.length; i++) {
        set.set(brokenLetters[i],0)
    }
    let valid = 0
    let errorState = false

    for (let i = 0; i < text.length; i++) {
        if (set.has(text[i])) errorState = true
        if (!errorState && text[i] == " ") valid++
        if (errorState && text[i] == " ") errorState = false
    }
    if (!errorState) valid++
    return valid;
};