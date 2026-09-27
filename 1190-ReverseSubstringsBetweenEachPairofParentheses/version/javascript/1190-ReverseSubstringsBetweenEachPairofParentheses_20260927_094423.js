// Last updated: 27/09/2026, 09:44:23
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseParentheses = function (s) {
6    let stack = []
7    for (let i = 0; i < s.length; i++) {
8        if (s[i] == ")") {
9            let str = []
10            while (stack.length && stack[stack.length - 1] !== "(") {
11                str.push(stack.pop())
12            }
13            stack.pop();
14            stack.push(...str)
15        } else {
16            stack.push(s[i])
17        }
18    }
19    return stack.join("")
20};