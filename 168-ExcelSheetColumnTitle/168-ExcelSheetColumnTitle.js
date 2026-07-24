// Last updated: 24/07/2026, 23:52:50
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let row = ""
    if (columnNumber <= 26) {
        return "" + chars[columnNumber-1]
    }
    let n = columnNumber
    while (n > 0) {
        n--;
        row = chars[(n % 26)] + row
        n = Math.floor(n / 26);
        if (columnNumber <= 26 && n <= 26) break;
    }
    return row;
};