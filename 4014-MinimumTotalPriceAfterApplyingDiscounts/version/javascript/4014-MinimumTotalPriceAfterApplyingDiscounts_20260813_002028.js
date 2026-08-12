// Last updated: 13/08/2026, 00:20:28
1/**
2 * @param {number[]} prices
3 * @param {number[]} discounts
4 * @return {number}
5 */
6var minPrice = function (prices, discounts) {
7    prices.sort((a, b) => b - a);
8    discounts.sort((a, b) => b - a);
9    let minPrice = 0
10    let i = 0;
11    while (i < discounts.length && i < prices.length) {
12        minPrice += ((prices[i] * (100 - discounts[i])) / 100)
13        i++;
14    }
15
16    while (i < prices.length) {
17        minPrice += prices[i]
18        i++;
19    }
20    return minPrice
21};