// Last updated: 27/09/2026, 20:26:16
1class Solution {
2    public int[] twoSum(int[] nums, int target) {
3        HashMap<Integer, Integer> ansMap = new HashMap<>();
4        for (int i = 0; i < nums.length; i++) {
5            if (ansMap.containsKey(target - nums[i])) {
6                return new int[] { ansMap.get(target - nums[i]), i };
7            }
8            ansMap.put(nums[i], i);
9        }
10        return new int[] {};
11    }
12}