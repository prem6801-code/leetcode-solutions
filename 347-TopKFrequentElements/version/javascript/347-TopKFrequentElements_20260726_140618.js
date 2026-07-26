// Last updated: 26/07/2026, 14:06:18
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number[]}
5 */
6
7class minHeap {
8    constructor(comparator = (a, b) => a > b) {
9        this.heap = []
10        this.comparator = comparator
11    }
12
13    getParent(i) {
14        return Math.floor((i - 1) / 2)
15    }
16
17    getLeft(i) {
18        return 2 * i + 1
19    }
20
21    getRight(i) {
22        return 2 * i + 2
23    }
24
25    swap(i, j) {
26        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
27    }
28
29    heapifyUp() {
30        let index = this.heap.length - 1;
31        while (index > 0 && this.comparator(this.heap[index], this.heap[this.getParent(index)])) {
32            this.swap(index, this.getParent(index));
33            index = this.getParent(index)
34        }
35    }
36
37    heapifyDown() {
38        let index = 0;
39        while (true) {
40            let left = this.getLeft(index);
41            let right = this.getRight(index);
42            let small = index;
43            let length = this.heap.length;
44            if (left < length && this.comparator(this.heap[left], this.heap[small])) {
45                small = left;
46            }
47            if (right < length && this.comparator(this.heap[right], this.heap[small])) {
48                small = right;
49            }
50            if (small == index)
51                break;
52            this.swap(index, small)
53            index = small
54        }
55    }
56
57    pop() {
58        if (this.heap.length == 0) return null;
59        this.swap(0, this.heap.length - 1);
60        let poped = this.heap.pop();
61        this.heapifyDown();
62        return poped;
63
64    }
65
66    insert(val) {
67        this.heap.push(val);
68        this.heapifyUp();
69    }
70
71    getCurrent() {
72        return this.heap[0];
73    }
74
75    getHeap() {
76        return this.heap
77    }
78
79    size() {
80        return this.heap.length;
81    }
82
83}
84
85
86var topKFrequent = function (nums, k) {
87    let map = new Map();
88    for (let num of nums) {
89        map.set(num, (map.get(num) || 0) + 1)
90    }
91    let newArr = []
92    let Heap = new minHeap((a, b) => a[1] < b[1]);
93    for (let [key, val] of map) {
94        Heap.insert([key,val])
95        if (Heap.size() > k) {
96            Heap.pop();
97        }
98    }
99    // console.log(Heap.getHeap())
100    return Heap.getHeap().map((item) => item[0])
101};
102
103
104