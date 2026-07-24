// Last updated: 24/07/2026, 23:50:15
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let map = new Map([
        [5, 0],
        [10, 0],
        [20, 0]
    ])

    for (let i = 0; i < bills.length; i++) {
        let cash = bills[i];
        if (cash == 5) map.set(5, map.get(5) + 1)
        if (cash == 10) {
            if (map.get(5) > 0) {
                map.set(5, map.get(5) - 1);
                map.set(10, map.get(10) + 1);
            } else {
                return false
            }
        }

        if (cash == 20) {
            if (map.get(5) > 0 && map.get(10) > 0) {
                map.set(5, map.get(5) - 1);
                map.set(10, map.get(10) - 1);
                map.set(20, map.get(20) + 1);
            } else if (map.get(5) >= 3) {
                map.set(5, map.get(5) - 3);
            } else {
                return false
            }
        }
    }
    return true;
};  