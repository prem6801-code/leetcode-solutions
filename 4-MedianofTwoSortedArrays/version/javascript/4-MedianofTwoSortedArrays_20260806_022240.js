// Last updated: 06/08/2026, 02:22:40
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number}
5 */
6
7var findMedianSortedArrays = function (nums1, nums2) {
8    let arr = []
9    let i = 0;
10    let j = 0;
11    while (i < nums1.length && j < nums2.length) {
12        if (nums1[i] == nums2[j]) {
13            arr.push(nums1[i])
14            arr.push(nums2[j])
15            i++;
16            j++;
17        } else if (nums1[i] < nums2[j]) {
18            arr.push(nums1[i])
19            i++
20        } else {
21            arr.push(nums2[j])
22            j++
23        }
24    }
25
26    while (i < nums1.length) {
27        arr.push(nums1[i])
28        i++
29    }
30
31    while (j < nums2.length) {
32        arr.push(nums2[j])
33        j++
34    }
35
36    let mid = Math.floor(arr.length / 2);
37    return arr.length % 2 == 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid]
38};