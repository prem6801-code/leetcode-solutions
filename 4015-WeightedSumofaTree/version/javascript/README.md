You are given an integer array parent of length n representing a rooted tree with nodes labeled from 0 to n - 1.

The tree is rooted at node 0, so parent[0] = -1. For each node i where 1 <= i <= n - 1, parent[i] denotes the parent of node i.

You are also given an integer array nums of length n, where nums[i] denotes the value of node i.

The weight of a node i at depth d is nums[i] * (h - d + 1), where h is the height of the tree.

Return the sum of the weights of all nodes in the tree.

The depth of a node is the number of nodes on the path from the root to that node, inclusive, with the root having depth 1.

The height of the tree is the maximum depth among all nodes in the tree.

 
Example 1:


​​​​​​​

Input: parent = [-1,0,0,0,2,2], nums = [5,2,3,1,4,6]

Output: 37

Explanation:

The height of the tree is 3.

Nodenums[i]Depth (d)Weight0515 * (3 - 1 + 1) = 151222 * (3 - 2 + 1) = 42323 * (3 - 2 + 1) = 63121 * (3 - 2 + 1) = 24434 * (3 - 3 + 1) = 45636 * (3 - 3 + 1) = 6

The sum of all node weights is 15 + 4 + 6 + 2 + 4 + 6 = 37.


Example 2:


​​​​​​​​​​​​​​

Input: parent = [-1,0,1,2], nums = [1,2,3,4]

Output: 20

Explanation:

The height of the tree is 4.

Nodenums[i]Depth (d)Weight0111 * (4 - 1 + 1) = 41222 * (4 - 2 + 1) = 62333 * (4 - 3 + 1) = 63444 * (4 - 4 + 1) = 4

The sum of all node weights is 4 + 6 + 6 + 4 = 20.


 
Constraints:


	1 <= n <= 105
	n == parent.length == nums.length
	parent[0] == -1
	0 <= parent[i] <= n - 1 for all i in [1, n - 1]
	1 <= nums[i] <= 106
	The input is generated such that the array parent represents a valid tree rooted at node 0.

