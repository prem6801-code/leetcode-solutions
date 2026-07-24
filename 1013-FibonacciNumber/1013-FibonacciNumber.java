// Last updated: 24/07/2026, 23:50:08
class Solution {
    public int fib(int n) {
        if(n==0||n==1){
            return n; 
        }

        int fib1=fib(n-1);
        int fib2=fib(n-2);

        int ans = fib1+fib2;

        return ans;
    }
}