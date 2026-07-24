// Last updated: 24/07/2026, 23:50:41
import java.util.*;
class Solution {
    public int[] dailyTemperatures(int[] temp) {
        int answer [] = new int[temp.length];
        Stack <Integer> stk = new Stack<Integer>();

        for(int i=temp.length-1;i>=0;i--){
            while(!stk.isEmpty()&&temp[i]>=temp[stk.peek()]){
                stk.pop();
            }

            if(!stk.isEmpty()){
                answer[i]=stk.peek()-i;
            }
            stk.push(i);
            }

        return answer;
        }
        
}