// Last updated: 24/07/2026, 23:50:37
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let asteriod of asteroids) {
        let survived = true;
        if (asteriod < 0) {
            while (stack.length > 0 && stack[stack.length - 1] > 0 && Math.abs(asteriod) > stack[stack.length - 1]) {
                stack.pop();
            }
            if (stack[stack.length - 1] > 0 && stack[stack.length - 1] > Math.abs(asteriod)) {
                survived = false
            }

            if (stack[stack.length - 1] > 0 && stack[stack.length - 1] == Math.abs(asteriod)) {
                stack.pop()
                survived = false
            }
        }
        if (survived) stack.push(asteriod)
    }
    return stack
};