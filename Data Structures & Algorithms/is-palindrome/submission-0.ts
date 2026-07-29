class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let arr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

        let left = 0;
        let right = arr.length-1;

        while(left < right){

            if(arr[left] !== arr[right]){
                return false;
            }

            left++;
            right--;
        }

        return true 

    }
}