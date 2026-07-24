// Last updated: 24/07/2026, 23:50:53
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }
    let arr = []
    let word = []
    let idx = Infinity
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            if (idx > map.get(list2[i]) + i) {
                word = [list2[i]]
                idx = map.get(list2[i]) + i
            } else if (idx == map.get(list2[i]) + i) {
                word.push(list2[i])
            }
        }
    }
    return word
};