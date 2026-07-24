// Last updated: 24/07/2026, 23:55:54
class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet <Character> hm = new HashSet <>();
        int i=0,sub=0;

        for(int j=0;j<s.length();j++){
            if(hm.contains(s.charAt(j))){
                while(hm.contains(s.charAt(j))){
                    hm.remove(s.charAt(i));
                    i++;
                }
                hm.add(s.charAt(j));
            }else{
                hm.add(s.charAt(j));
                sub=Math.max(sub,j-i+1);
            }
        }
return sub;
       }}