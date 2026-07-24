// Last updated: 24/07/2026, 23:53:03
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let j = 0;
    while (j < tokens.length) {
        if (["+", "-", "*", "/"].includes(tokens[j])) {
            let sec = parseInt(stack.pop());
            let fi = parseInt(stack.pop());
            res = tokens[j] == "+" ? fi + sec :
                tokens[j] == "-" ? fi - sec :
                    tokens[j] == "*" ? fi * sec :
                        tokens[j] == "/" ? Math.trunc(fi / sec) :
                            0;
            stack.push(res);
        } else {
            stack.push(tokens[j])
        }

        // console.log(stack)
        j++
    }

    return parseInt(stack[stack.length - 1])
};

//10 6 9 3 -> 10 6 12 -11 -> 10 6 -132 ->