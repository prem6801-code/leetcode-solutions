// Last updated: 24/07/2026, 23:47:44
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let str = "a"

    const generateString = (i, temp) => {
        if (i >= str.length) return temp;
        temp += String.fromCharCode(str[i] !== "z" ? str.charCodeAt(i) + 1 : str.charCodeAt(i))
        return generateString(i + 1, temp);
    }

    while (true) {
        str += generateString(0, "");
        if (str.length >= k) return str[k - 1]
    }
}