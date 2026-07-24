// Last updated: 24/07/2026, 23:55:03
class Solution {
    public int searchInsert(int[] nums, int target) {
        int first=0;
        int last=nums.length-1;
  
        while(first<=last){
            int b=first+(last-first)/2;
            if(nums[b]==target){
                return b;
            }else if(nums[b]>target){
                last = b-1;
            }else {
                first=b+1;
                
            }
        }
      return last+1;
        
    }
        
}