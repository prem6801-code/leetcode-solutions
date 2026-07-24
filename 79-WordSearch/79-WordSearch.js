// Last updated: 24/07/2026, 23:54:06
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = board.length, n = board[0].length;
    if (word.length > m * n) return false;

    let freq = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            freq[board[i][j]] = (freq[board[i][j]] || 0) + 1
        }
    }

    let wordMap = {};
    for (let char of word) {
        wordMap[char] = (wordMap[char] || 0) + 1
        if (!freq[char] || freq[char] < wordMap[char]) {
            return false;
        }
    }

    // console.log(freq, wordMap)

    let findWord = (i, j, stridx) => {
        if (i < 0 || j < 0 || i >= m || j >= n || stridx >= word.length || word[stridx] !== board[i][j]) return false;
        if (stridx == word.length - 1) {
            return true;
        }
        let found = false;
        let temp = board[i][j];
        board[i][j] = "#"
        for (let [x, y] of dirs) {
            found = found || findWord(x + i, y + j, stridx + 1)
            if (found) return true;
        }
        board[i][j] = temp;
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == word[0] && findWord(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};