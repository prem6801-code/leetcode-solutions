// Last updated: 24/07/2026, 23:47:56
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(value)=>{
            if(val===value){
                return true;
            }else{
                throw "Not Equal";
            }
        },
        notToBe:(Value)=>{
            if(val!==Value){
                return true;
            }else{
                throw "Equal";
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */