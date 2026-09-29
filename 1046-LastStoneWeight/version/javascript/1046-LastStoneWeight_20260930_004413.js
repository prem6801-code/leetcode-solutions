// Last updated: 30/09/2026, 00:44:13
1/**
2 * @param {number[]} stones
3 * @return {number}
4 */
5var lastStoneWeight = function (stones) {
6    let minHeap = new maxHeap();
7    for (let stone of stones) {
8        minHeap.insert(stone)
9    }
10    while (minHeap.size() > 1) {
11        let first = minHeap.pop();
12        let second = minHeap.pop();
13
14        if (first !== second) {
15            minHeap.insert(first - second)
16        }
17    }
18    return minHeap.getCurrent() || 0
19};
20
21class maxHeap {
22    constructor(comparator = (a, b) => a > b) {
23        this.heap = []
24        this.comparator = comparator
25    }
26
27    getParent(i) {
28        return Math.floor((i - 1) / 2)
29    }
30
31    getLeft(i) {
32        return 2 * i + 1
33    }
34
35    getRight(i) {
36        return 2 * i + 2
37    }
38
39    swap(i, j) {
40        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
41    }
42
43    heapifyUp() {
44        let index = this.heap.length - 1;
45        while (index > 0 && this.comparator(this.heap[index], this.heap[this.getParent(index)])) {
46            this.swap(index, this.getParent(index));
47            index = this.getParent(index)
48        }
49    }
50
51    heapifyDown() {
52        let index = 0;
53        while (true) {
54            let left = this.getLeft(index);
55            let right = this.getRight(index);
56            let small = index;
57            let length = this.heap.length;
58            if (left < length && this.comparator(this.heap[left], this.heap[small])) {
59                small = left;
60            }
61            if (right < length && this.comparator(this.heap[right], this.heap[small])) {
62                small = right;
63            }
64            if (small == index)
65                break;
66            this.swap(index, small)
67            index = small
68        }
69    }
70
71    pop() {
72        if (this.heap.length == 0) return null;
73        this.swap(0, this.heap.length - 1);
74        let poped = this.heap.pop();
75        this.heapifyDown();
76        return poped;
77
78    }
79
80    insert(val) {
81        this.heap.push(val);
82        this.heapifyUp();
83    }
84
85    getCurrent() {
86        return this.heap[0];
87    }
88
89    getHeap() {
90        return this.heap
91    }
92
93    size() {
94        return this.heap.length;
95    }
96
97}