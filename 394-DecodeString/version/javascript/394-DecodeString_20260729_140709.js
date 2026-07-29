// Last updated: 29/07/2026, 14:07:09
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var decodeString = function (s) {
6    let stack = [];
7    let str = ""
8    for (let ch of s) {
9        if (ch == "]") {
10            let temp = "";
11            while (stack.length && stack[stack.length - 1] !== "[") {
12                temp = stack.pop() + temp;
13            }
14            stack.pop();
15            let num = ""
16            while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
17                num = stack.pop() + num
18            }
19            // console.log(temp)
20            let newStr = ""
21            for (let i = 0; i < parseInt(num); i++) {
22                newStr += temp
23            }
24            // console.log(num, temp, stack);
25            stack.push(newStr);
26        } else {
27            stack.push(ch)
28        }
29    }
30    // console.log(stack)
31    return stack.join("");
32};