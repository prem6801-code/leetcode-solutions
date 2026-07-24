// Last updated: 24/07/2026, 23:55:04
class Solution {
    public int strStr(String haystack, String needle) {
        boolean flag = true;
        int i=0;
        int j=needle.length();
        while(flag){
            if (j<=haystack.length()){
                if(haystack.substring(i,j).equals(needle)){
                    flag=false;
                    return i;
                }
                else{
                    i++;
                    j++;
                }
            }
            else{
                return -1;
            }
        }
        return -1;
    }
}