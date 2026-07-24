// Last updated: 24/07/2026, 23:49:28
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let map = new Set();
    let base = [];
    let arr = [];
    folder.sort()
    for (let i = 0; i < folder.length; i++) {
        let str = folder[i].split("/").filter((item) => item !== "")
        let temp = str.slice(0, base.length).join("")
        // console.log("base->", base)
        // console.log("str - > ", str)
        // console.log("temp - > ", temp);
        if (!base.length) {
            arr.push(folder[i]);
            base = str;
        } else if(!(base.join("") == temp)) {
            arr.push(folder[i]);
            base = str;
        }
    }

    return arr
};