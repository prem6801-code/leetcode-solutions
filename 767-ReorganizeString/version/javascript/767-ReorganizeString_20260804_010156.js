// Last updated: 04/08/2026, 01:01:56
1/**
2 * @param {string} s
3 * @return {string}
4 */
5
6class maxHeap {
7    constructor(comparator = (a, b) => a > b) {
8        this.heap = []
9        this.comparator = comparator
10    }
11
12    getParent(i) {
13        return Math.floor((i - 1) / 2)
14    }
15
16    getLeft(i) {
17        return 2 * i + 1
18    }
19
20    getRight(i) {
21        return 2 * i + 2
22    }
23
24    swap(i, j) {
25        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
26    }
27
28    heapifyUp() {
29        let index = this.heap.length - 1;
30        while (index > 0 && this.comparator(this.heap[index], this.heap[this.getParent(index)])) {
31            this.swap(index, this.getParent(index));
32            index = this.getParent(index)
33        }
34    }
35
36    heapifyDown() {
37        let index = 0;
38        while (true) {
39            let left = this.getLeft(index);
40            let right = this.getRight(index);
41            let small = index;
42            let length = this.heap.length;
43            if (left < length && this.comparator(this.heap[left], this.heap[small])) {
44                small = left;
45            }
46            if (right < length && this.comparator(this.heap[right], this.heap[small])) {
47                small = right;
48            }
49            if (small == index)
50                break;
51            this.swap(index, small)
52            index = small
53        }
54    }
55
56    pop() {
57        if (this.heap.length == 0) return null;
58        this.swap(0, this.heap.length - 1);
59        let poped = this.heap.pop();
60        this.heapifyDown();
61        return poped;
62
63    }
64
65    insert(val) {
66        this.heap.push(val);
67        this.heapifyUp();
68    }
69
70    getCurrent() {
71        return this.heap[0];
72    }
73
74    getHeap() {
75        return this.heap
76    }
77
78    size() {
79        return this.heap.length;
80    }
81
82}
83
84var reorganizeString = function (s) {
85    let heap = new maxHeap((a, b) => a[1] > b[1])
86    let map = {};
87    for (let ch of s) {
88        map[ch] = (map[ch] || 0) + 1;
89    }
90
91    let arr = new Array(s.length).fill("")
92    for (let entry of Object.entries(map)) {
93        heap.insert(entry)
94    }
95
96    for (let i = 0; i < arr.length; i++) {
97        let [key, value] = heap.pop()
98        if (arr[i - 1] == key) {
99            let entry = heap.pop();
100            if (!entry) return ""
101            let [key2, value2] = entry
102            arr[i] = key2
103            heap.insert([key, value])
104            if (value2 - 1 !== 0) heap.insert([key2, value2 - 1])
105        } else {
106            arr[i] = key
107            if (value - 1 !== 0) heap.insert([key, value - 1])
108        }
109    }
110
111    return arr.join("")
112}