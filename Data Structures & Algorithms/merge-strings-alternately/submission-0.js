class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p1 = 0
        let p2 = 0
        let arr =[]

        while(p1 < word1.length || p2 <word2.length){
            arr.push(word1[p1])
            arr.push(word2[p2])
            p1++
            p2++
        }

        return arr.join('')
    }
}
