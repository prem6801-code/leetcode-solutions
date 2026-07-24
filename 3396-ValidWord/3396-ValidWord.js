// Last updated: 24/07/2026, 23:47:52
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) return false
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    word = word.toLowerCase();
    let isValidchar = false
    let containsVowel = false
    let containsconsonant = false
    for (let i = 0; i < word.length; i++) {
        if ((word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123) || (word.charCodeAt(i) > 47 && word.charCodeAt(i) < 58)) {
            if (vowels.has(word[i])) {
                containsVowel = true
            }
            if (!vowels.has(word[i]) && (word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123)) {
                containsconsonant = true
            }
            isValidchar = true
        } else {
            return false;
        }
    }
    return isValidchar && containsVowel && containsconsonant
}