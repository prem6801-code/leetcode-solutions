// Last updated: 24/07/2026, 23:48:35
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    let adjList = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    // console.log(adjList)
    let queue = [source];
    let visited = new Set([source]);
    while (queue.length) {
        let neighbour = queue.shift();
        if (neighbour == destination) return true;
        visited.add(neighbour)
        for (let node of adjList[neighbour]) {
            if (!visited.has(node)) {
                queue.push(node);
                visited.add(node);
            }
        }
    }
    return false;
};