// Last updated: 24/07/2026, 23:53:12
class Solution {
    public int singleNumber(int[] nums) {
                HashMap <Integer,Boolean> hm = new HashMap<>();
        for(int i=0;i<nums.length;i++){
                    if(hm.containsKey(nums[i])){
            hm.put(nums[i],false);
        }else{
            hm.put(nums[i],true);
        }
        }



        int k=0;
        for(Map.Entry<Integer,Boolean> entry:hm.entrySet()){
            if(entry.getValue()==true){
                k = entry.getKey();
                break;
            }
        }

       return k;
    }
}