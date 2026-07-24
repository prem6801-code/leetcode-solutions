// Last updated: 24/07/2026, 23:52:19
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    let heap = new minHeap(k);
    for (let num of nums) {
        heap.insert(num);
    }
    // console.log(heap.getHeap())
    return heap.getMin();
};

class minHeap {
    constructor(length) {
        this.heap = []
        this.hpLength = length
    }
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeft(i) {
        return 2 * i + 1
    }
    getRight(i) {
        return 2 * i + 2
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] < this.heap[this.getParent(index)]) {
            this.swap(index, this.getParent(index));
            index = this.getParent(index)
        }
    }
    heapifyDown() {
        let index = 0;
        while (true) {
            let left = this.getLeft(index);
            let right = this.getRight(index);
            let small = index;
            let length = this.heap.length;
            if (left < length && this.heap[left] < this.heap[small]) {
                small = left;
            }
            if (right < length && this.heap[right] < this.heap[small]) {
                small = right;
            }
            if (small == index) break;
            this.swap(index, small)
            index = small
        }
    }
    extractMin() {
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
    }
    insert(val) {
        if (this.heap.length < this.hpLength) {
            this.heap.push(val);
            this.heapifyUp();
        } else if (val > this.heap[0]) {
            this.heap[0] = val;
            this.heapifyDown();
        }
    }
    getMin() {
        return this.heap[0];
    }
    getHeap() {
        return this.heap
    }
}