// Last updated: 24/07/2026, 23:50:25
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let str = new Map();
    for (let i = 0; i < order.length; i++) {
        str.set(order[i], i);
    }
    let seq = []
    let unod = ""
    for (let i = 0; i < s.length; i++) {
        if (!(str.has(s[i]))) {
            unod += s[i]
        }else{
            seq.push(s[i])
        }
    }
    return seq.sort((a, b) => str.get(a) - str.get(b)).join("") + unod
};