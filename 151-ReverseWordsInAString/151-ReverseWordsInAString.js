// Last updated: 24/07/2026, 23:53:02
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word =''
        let str = ""
        for(let i=0;i<s.length;i++){
            if(s[i]==' '){
                if(word !== ''){
                    str=str.length?word+" "+str:str=word
                    word='';
                }
            }else{
                word+=s[i]
            }
        }
        if(word.length){
            str=str.length?word+" "+str:str=word
        } 
    return str
};