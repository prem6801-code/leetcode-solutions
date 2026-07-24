// Last updated: 24/07/2026, 23:52:24
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adjList = Array.from({ length: numCourses }, () => []);
    let indg = Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        adjList[prerequisites[i][1]].push(prerequisites[i][0])
        indg[prerequisites[i][0]]++
    }

    // console.log(adjList)

    // let indg = Array(numCourses).fill(0);
    // for (let edges of adjList) {
    //     for (let edge of edges) {
    //         indg[edge]++
    //     }
    // }

    // console.log(indg)

    let que = [];
    for (let i = 0; i < indg.length; i++) {
        if (indg[i] == 0) {
            que.push(i)
        }
    }

    let res = []
    let head=0
    while (head < que.length) {
        let el = que[head];
        res.push(el)
        for (let node of adjList[el]) {
            indg[node]--;
            if (indg[node] == 0) {
                que.push(node)
            }
        }
        head++
    }
    // console.log(res)
    return res.length == numCourses
};