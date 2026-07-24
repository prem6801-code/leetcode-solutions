// Last updated: 24/07/2026, 23:54:05
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int k=0;
        for(int i=0;i<m+n;i++){
            if (i>=m){
                nums1[i]=nums2[k];
                k++;
            }
        }
    Arrays.sort(nums1);
    }
}