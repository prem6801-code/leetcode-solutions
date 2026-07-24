// Last updated: 24/07/2026, 23:48:08
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let maxCk = 0
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (!g[i]) break;
        if (g[i]>s[j]) {
            j++;
        } else if (g[i] <= s[j]) {
            maxCk++;
            i++;
            j++;
        }
    }
    return maxCk;
};