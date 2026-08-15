// Last updated: 15/08/2026, 18:55:24
1/**
2 * @param {character[]} chars
3 * @return {number}
4 */
5var compress = function (chars) {
6    let i = 0, j = 0, uniqueChar, length;
7    while (j < chars.length) {
8        uniqueChar = chars[j];
9        length = 0;
10        while (uniqueChar == chars[j]) {
11            length++
12            j++
13        }
14
15        if (length == 1) {
16            chars[i] = uniqueChar
17            i++;
18        } else if (length <= 9) {
19            chars[i] = uniqueChar;
20            chars[i + 1] = length + ""
21            i = i + 2
22        } else {
23            chars[i] = uniqueChar;
24            i++;
25            let temp = length + ""
26            for (let ch of temp) {
27                chars[i] = ch;
28                i++;
29            }
30        }
31    }
32    return i
33};