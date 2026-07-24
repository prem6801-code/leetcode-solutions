// Last updated: 24/07/2026, 23:49:30
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = new Map();
    let arr = ["b", "a", "l", "l", "o", "o", "n"]
    for (let ch of text) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let ct = 0;
    while (true) {
        for (let i = 0; i < arr.length; i++) {
            if (!(map.has(arr[i])) || map.get(arr[i]) <= 0) {
                return ct;
            }
            map.set(arr[i], map.get(arr[i]) - 1)
        }
        ct++
    }
    return ct;
};