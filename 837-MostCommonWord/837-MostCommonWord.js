// Last updated: 24/07/2026, 23:50:21
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let p = paragraph.toLowerCase();
    let obj = {}
    let str = "";
    for (let i = 0; i < p.length; i++) {
        let char = p[i].charCodeAt(0);
        if (char < 64 || i == p.length) {
            if (str) str in obj ? obj[str] += 1 : obj[str] = 1
            str = ""
        } else {
            str = str + p[i]
        }
    }
    if (str) str in obj ? obj[str] += 1 : obj[str] = 1
    const res = Object.keys(obj).filter((itm) => {
        return !banned.includes(itm)
    }).sort((a, b) => obj[a] - obj[b])
    return res[res.length - 1]
};