class Solution {
 
    hasDuplicate(nums) {
        let arr =[]; 
        for (let i = 0 ; i <nums.length ; i ++){
            if(!arr.includes(nums[i])){
                arr.push(nums[i]);
            }
        }
        if(arr.length < nums.length) return true
        else return false
    }
}
