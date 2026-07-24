// Last updated: 24/07/2026, 23:55:41
class Solution {
    public int maxArea(int[] height) {
        int max=0;
        int temp=0;
        int i=0;
        int j=height.length-1;
        while(i<j){
            temp = Math.min(height[i],height[j]) * (j-i);
            if(height[i]<height[j]){
                i++;
            }else{
                j--;
            }

            if(temp>max){
                max=temp;
            }
        }

        return max;
    }
}