// Last updated: 24/07/2026, 23:54:17
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const arr = path.split("/")
    let stack = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== "" && arr[i] !== ".") {
            if (arr[i] == "..") {
                stack.pop()
            } else {
                stack.push(arr[i]);
            }
        }
    }

    if(stack.length == 0){
        return "/"
    }


    let str = ""
    for(let i=0;i<stack.length;i++){
        str=str+"/"+stack[i];
    }

    return str;
};