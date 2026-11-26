// Last updated: 26/11/2026, 17:52:21
1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var canAliceWin = function (n) {
6    let turn = true
7    let stones = 10;
8    while (n >= 0) {
9        n -= stones;
10        turn = !turn
11        stones--;
12    }
13    return turn
14};