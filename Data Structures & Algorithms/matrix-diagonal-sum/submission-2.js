class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    diagonalSum(mat) {
        let n = mat.length;
        let sum = 0;

        for (let i = 0; i < mat.length; i++) {
            //main d
            sum += mat[i][i];

            //secondary d
            if (i !== n - 1 - i) {
                sum += mat[i][n - 1 - i];
            }
        }


        return sum;
    }
}
