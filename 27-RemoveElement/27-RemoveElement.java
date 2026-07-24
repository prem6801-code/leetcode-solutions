// Last updated: 24/07/2026, 23:55:18
class Solution {
    public int removeElement(int[] nums, int val) {
        int k=0;
        for(int i=0;i<nums.length;i++){
            if (nums[i]!=val){
                nums[k]=nums[i];
                k++;
            }
        }
    return k;

    }
}