class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);
        let counter = 0;
        for (let i = 0; i < g.length; i++) {
            for (let j = 0; j < s.length; j++) {
                if (s[j] >= g[i]) {
                    counter++;
                    s.splice(j, 1);
                    break;
                }
            }
        }

        return counter;
    }
}
