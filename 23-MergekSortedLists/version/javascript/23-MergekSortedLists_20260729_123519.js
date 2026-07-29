// Last updated: 29/07/2026, 12:35:19
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode[]} lists
10 * @return {ListNode}
11 */
12
13class minHeap {
14    constructor(comparator = (a, b) => a > b) {
15        this.heap = []
16        this.comparator = comparator
17    }
18
19    getParent(i) {
20        return Math.floor((i - 1) / 2)
21    }
22
23    getLeft(i) {
24        return 2 * i + 1
25    }
26
27    getRight(i) {
28        return 2 * i + 2
29    }
30
31    swap(i, j) {
32        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
33    }
34
35    heapifyUp() {
36        let index = this.heap.length - 1;
37        while (index > 0 && this.comparator(this.heap[index], this.heap[this.getParent(index)])) {
38            this.swap(index, this.getParent(index));
39            index = this.getParent(index)
40        }
41    }
42
43    heapifyDown() {
44        let index = 0;
45        while (true) {
46            let left = this.getLeft(index);
47            let right = this.getRight(index);
48            let small = index;
49            let length = this.heap.length;
50            if (left < length && this.comparator(this.heap[left], this.heap[small])) {
51                small = left;
52            }
53            if (right < length && this.comparator(this.heap[right], this.heap[small])) {
54                small = right;
55            }
56            if (small == index)
57                break;
58            this.swap(index, small)
59            index = small
60        }
61    }
62
63    pop() {
64        if (this.heap.length == 0) return null;
65        this.swap(0, this.heap.length - 1);
66        let poped = this.heap.pop();
67        this.heapifyDown();
68        return poped;
69
70    }
71
72    insert(val) {
73        this.heap.push(val);
74        this.heapifyUp();
75    }
76
77    getCurrent() {
78        return this.heap[0];
79    }
80
81    print() {
82        return this.heap
83    }
84
85    size() {
86        return this.heap.length;
87    }
88
89}
90
91
92var mergeKLists = function (lists) {
93    let heap = new minHeap((a, b) => a.val < b.val);
94    let head = new ListNode()
95    let pt = head;
96    for (let list of lists) {
97        if (list !== null) heap.insert(list);
98    }
99
100    while (heap.size()) {
101        let temp = heap.pop();
102        if (temp) {
103            let newNode = new ListNode(temp.val)
104            pt.next = newNode;
105            pt = pt.next
106        }
107        if (temp !== null && temp.next !== null) heap.insert(temp.next)
108    }
109    return head.next
110};