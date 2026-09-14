// Last updated: 14/09/2026, 22:36:31
1/**
2 * @param {number[]} rec1
3 * @param {number[]} rec2
4 * @return {boolean}
5 */
6var isRectangleOverlap = function (rec1, rec2) {
7    const [r1_x1, r1_y1, r1_x2, r1_y2] = rec1;
8    const [r2_x1, r2_y1, r2_x2, r2_y2] = rec2;
9
10    const xOverlap = r1_x1 < r2_x2 && r2_x1 < r1_x2;
11    const yOverlap = r1_y1 < r2_y2 && r2_y1 < r1_y2;
12
13    return xOverlap && yOverlap;
14};