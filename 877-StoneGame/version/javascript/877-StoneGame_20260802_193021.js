// Last updated: 02/08/2026, 19:30:21
1/**
2 * @param {number[]} piles
3 * @return {boolean}
4 */
5var stoneGame = function (piles) {
6    let dp = Array.from({ length: piles.length }, () => new Array(piles.length))
7    let findWinner = (i, j) => {
8        if (i == j) {
9            return piles[j]
10        }
11        if (dp[i][j] !== undefined) {
12            return dp[i][j]
13        }
14        let takeLeft = piles[i] - findWinner(i + 1, j);
15        let takeRight = piles[j] - findWinner(i, j - 1);
16
17        return dp[i][j] = Math.max(takeLeft, takeRight)
18    }
19
20    // console.log(findWinner(0, piles.length - 1))
21    return findWinner(0, piles.length - 1) > 0;
22};