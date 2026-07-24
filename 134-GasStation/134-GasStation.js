// Last updated: 24/07/2026, 23:53:18
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let arr = [];
    for (let i = 0; i < gas.length; i++) {
        arr.push([gas[i], cost[i]])
    }
    arr = [...arr, ...arr]
    // console.log(arr)
    for (let i = 0; i < gas.length; i++) {
        let current = arr[i][0]
        let j = i
        let visited = 1;
        while (current >= arr[j][1] && j < arr.length) {
            current = (current - arr[j][1]) + (arr?.[j + 1]?.[0] || 0)
            if (visited == gas.length) return i
            visited++;
            j++;
        }
        i = j
    }
    return -1
};