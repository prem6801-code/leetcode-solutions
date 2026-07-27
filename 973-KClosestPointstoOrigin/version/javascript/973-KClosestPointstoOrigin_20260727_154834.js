// Last updated: 27/07/2026, 15:48:34
1/**
2 * @param {number[][]} points
3 * @param {number} k
4 * @return {number[][]}
5 */
6
7class maxHeap {
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
85var kClosest = function (points, k) {
86    let heap = new maxHeap((a, b) => {
87        let [d1, d2] = a;
88        let [d3, d4] = b;
89        let dist1 = Math.sqrt(Math.pow(d1 - 0, 2) + Math.pow(d2 - 0, 2))
90        let dist2 = Math.sqrt(Math.pow(d3 - 0, 2) + Math.pow(d4 - 0, 2))
91        return dist1 > dist2
92    });
93    for (let point of points) {
94        heap.insert(point);
95        if (heap.size() > k) {
96            heap.pop();
97        }
98    }
99    // console.log(heap.getHeap())
100    // return [[0,0]]
101    return [...heap.getHeap()];
102};