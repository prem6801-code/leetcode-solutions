// Last updated: 24/07/2026, 23:53:36
class Solution {
    public int maxProfit(int[] arr) {
       int i=0;
       int j=i+1;
       int profit=0;
       int sell=arr[0];

       while(j<arr.length){
           sell=arr[j]-arr[i];

           if(sell>profit){
               profit=sell;
           }

           if(arr[i+1]<arr[i]){
               i++;
           }else if(arr[j]<arr[i]){
               i=j;
           }


           j++;

 }
return profit;
}}