// Last updated: 13/08/2026, 00:15:24
1/**
2 * @param {number[]} prices
3 * @param {number[]} discounts
4 * @return {number}
5 */
6var minPrice = function (prices, discounts) {
7    prices.sort((a, b) => b - a);
8    discounts.sort((a, b) => b - a);
9    let minPrice = 0
10    let i = 0, j = 0;
11    while (i < prices.length && j < discounts.length) {
12        minPrice += ((prices[i] * (100 - discounts[j])) / 100)
13        i++;
14        j++;
15    }
16
17    while (i < prices.length) {
18        minPrice += prices[i]
19        i++;
20    }
21    return minPrice
22};