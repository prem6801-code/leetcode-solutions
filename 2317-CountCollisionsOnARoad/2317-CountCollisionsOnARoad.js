// Last updated: 24/07/2026, 23:48:13
/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (d) {
    let st = []
    let col = 0
    for (let i = 0; i < d.length; i++) {
        if (d[i] == 'L' && st[st.length - 1] == 'S') {
            col += 1
        } else if (d[i] == 'S') {
            let j = st.length - 1;
            while (st.length && st[j] != 'S') {
                st.pop();
                col++;
                j--
            }
            st.push('S')
        } else if (d[i] == 'L' && st.length) {
            let k = st.length - 1;
            let flag = false
            while (st.length && st[k] != 'S') {
                if (flag) {
                    col++
                } else {
                    col += 2
                    flag = true
                }
                st.pop()
                k--
            }
            st.push('S')
            
        } else if (d[i] == "R") {
            st.push("R")
        }
    }
    return col
};