// Last updated: 30/07/2026, 12:25:20
1/**
2 * @param {string} word
3 * @return {number}
4 */
5var minimumPushes = function (word) {
6    let minPush = 0;
7    for (let i = 0; i < word.length; i++) {
8        minPush = minPush + Math.floor(i / 8) + 1
9    }
10    return minPush;
11};