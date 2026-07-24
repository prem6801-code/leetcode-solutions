// Last updated: 24/07/2026, 23:48:46
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    let shift = (row) => {
        let j = 0;
        let k = 0, l = 0
        while (j < row.length) {
            if (row[j] == "*" || j == row.length - 1) {
                while (l <= j) {
                    if (row[l] == ".") {
                        [row[k], row[l]] = [row[l], row[k]];
                        k++;
                        l++;
                    }
                    else {
                        l++;
                    }
                }
                k = j + 1
                l = k
            }
            j++
        }
        return row;
    }
    let newMatrix = []
    for (let i = 0; i < boxGrid.length; i++) {
        boxGrid[i] = shift(boxGrid[i])
    }
    // console.log(boxGrid)
    for (let i = 0; i < boxGrid[0].length; i++) {
        let row = []
        for (let j = 0; j < boxGrid.length; j++) {
            row.push(boxGrid[j][i])
        }
        newMatrix.push(row.reverse())
    }

    return newMatrix
};