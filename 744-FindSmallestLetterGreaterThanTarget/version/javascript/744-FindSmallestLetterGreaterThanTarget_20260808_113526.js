// Last updated: 08/08/2026, 11:35:26
1/**
2 * @param {character[]} letters
3 * @param {character} target
4 * @return {character}
5 */
6var nextGreatestLetter = function (letters, target) {
7    let start = 0;
8    let end = letters.length - 1;
9    let mid;
10    let res = -1
11    while (start <= end) {
12        mid = Math.floor((start + end) / 2);
13        if (letters[mid] == target) {
14            res = mid;
15            start = mid + 1
16        } else if (target.charCodeAt(0) < letters[mid].charCodeAt(0)) {
17            end = mid - 1
18        } else {
19            start = mid + 1
20        }
21    }
22
23    // console.log(start, end)
24    if (start >= letters.length) return letters[0]
25    return letters[start]
26};