// Last updated: 19/08/2026, 23:16:50
1/**
2 * @param {number} n
3 * @param {number[][]} reservedSeats
4 * @return {number}
5 */
6var maxNumberOfFamilies = function (n, reservedSeats) {
7    let startPoints = [1, 3, 5];
8    let set = new Set();
9    let set2 = new Set();
10    for (let [row, seat] of reservedSeats) {
11        set.add(`${row - 1}-${seat - 1}`)
12        set2.add(row - 1)
13    }
14    let count = 0;
15    let arr = [...set2]
16    // console.log(arr)
17    for (let i = 0; i < arr.length; i++) {
18        for (let j = 0; j < startPoints.length; j++) {
19            let rowCount = 0;
20
21            for (let k = startPoints[j]; k < (startPoints[j] + 4); k++) {
22                if (set.has(`${arr[i]}-${k}`)) {
23                    break;
24                } else {
25                    rowCount++;
26                }
27                set.add(`${arr[i]}-${k}`)
28            }
29            if (rowCount == 4) {
30                count++
31            }
32        }
33    }
34    return count + ((n - arr.length) * 2);
35}