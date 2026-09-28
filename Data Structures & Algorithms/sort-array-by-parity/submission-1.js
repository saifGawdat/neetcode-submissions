class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let ans = [];

        for(let num of nums){
            if(num % 2 === 0){
                ans.push(num)
            }
        }

        for(let num of nums){
            if(num % 2 !== 0){
                ans.push(num)
            }
        }


        return ans
    }
}
