// Last updated: 19/08/2026, 23:31:34
1/**
2 * @param {string} path
3 * @return {string}
4 */
5var simplifyPath = function (path) {
6    let stack = [];
7    path = path.split("/").filter((item) => Boolean(item))
8    for (let el of path) {
9        if (el == "..") {
10            stack.pop();
11        } else if (el !== ".") {
12            stack.push(el)
13        }
14    }
15    // console.log(stack.join("/"))
16    return "/" + stack.join("/")
17};