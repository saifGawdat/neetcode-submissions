class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
       let max = "";

        let i = 0;
        let j = i + 1;
        let z = j + 1;

        while (z < num.length) {
            if (num[i] === num[j] && num[i] === num[z]) {
                let arr = [num[i], num[j], num[z]];
                arr = arr.join("");

                if (arr > max) {
                    max = arr;
                }
            }

            i++;
            j++;
            z++;
        }

        return max;
    }
}
