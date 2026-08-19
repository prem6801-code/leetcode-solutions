// Last updated: 20/08/2026, 00:59:27
1/**
2 * @param {number[][]} drones
3 * @param {number[]} target
4 * @return {number}
5 */
6var nearestDrone = function (drones, target) {
7    let min = Infinity
8    let minDist = Infinity
9    for (let i = 0; i < drones.length; i++) {
10        let [x, y, range] = drones[i]
11        let dist = Math.abs(x - target[0]) + Math.abs(y - target[1])
12        if (dist <= range) {
13            if (minDist > dist) {
14                minDist = dist
15                min = i
16            }
17        }
18    }
19
20    return min == Infinity ? -1 : min
21};