class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let arr = [];
        let result =[];

        let map = new Map();

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        for(let [key,val] of map.entries()){
            arr = [...arr , [key,val]]
        }

        arr.sort((a,b)=>b[1] - a[1])


        for(let i = 0 ; i< k ;i++){
            result.push(arr[i][0])
        }

        return result; 
    }
}
