// Last updated: 24/07/2026, 23:50:22
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let adjList = {};
    // for (let i = 0; i < graph.length; i++) {
    //     if (!adjList[i]) adjList[i] = []
    //     for (let node of graph[i]) {
    //         adjList[i].push(node);
    //     }
    // }
    // console.log("adjList->", adjList)
    let paths = [];
    let path = [];
    let dfs = (i) => {
        if (i == graph.length - 1) {
            paths.push([...path, i])
        }
        path.push(i);
        for (let k = 0; k < adjList[i].length; k++) {
            dfs(adjList[i][k])
        }
        path.pop();
    }
    // dfs(0)
    let queue = [[0]];
    let index = 0;
    // let bfs = () => {
    while (index < queue.length) {
        // let path = queue.shift();
        let path = queue[index];
        index++
        let node = path[path.length - 1];

        if (node == graph.length - 1) {
            paths.push(path)
            continue;
        }

        for (let neighbours of graph[node]) {
            queue.push([...path, neighbours])
        }
    }
    // }
    // bfs()
    // console.log(paths)
    return paths
};