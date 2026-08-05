// Last updated: 06/08/2026, 01:28:19
1/**
2 * @param {number} n
3 * @param {number} k
4 * @param {number[][]} invocations
5 * @return {number[]}
6 */
7var remainingMethods = function (n, k, invocations) {
8    let adjList = Array.from({ length: n }, () => [])
9    // creating adjacency list
10    for (let [a, b] of invocations) {
11        adjList[a].push(b)
12    }
13
14    // finding all the bugged method using the dfs
15    let visited = new Set();
16    let bfs = (node) => {
17        visited.add(node)
18        for (let edge of adjList[node]) {
19            if (!visited.has(edge)) {
20                bfs(edge)
21            }
22        }
23    }
24    bfs(k)
25    // console.log(visited)
26    //checking if the bugged method is invoked by some other method if so removing from the bugged list
27    //condition -> current edge should not in bugged list,invoked method should be in the list
28    let canRemove = true
29    for (let [a, b] of invocations) {
30        if (!visited.has(a) && visited.has(b)) {
31            canRemove = false;
32            break;
33        }
34    }
35    // console.log(visited)
36    // add the node nodes which are not in bugged list in the final ans
37    let ans = [];
38    if (!canRemove) {
39        for (let i = 0; i < n; i++) {
40            ans.push(i)
41        }
42    } else {
43        for (let i = 0; i < n; i++) {
44            if (!visited.has(i)) ans.push(i)
45        }
46    }
47    return ans
48};