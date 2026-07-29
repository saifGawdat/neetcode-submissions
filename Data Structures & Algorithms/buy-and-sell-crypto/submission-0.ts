class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let max = 0;

        while (right < prices.length) {
            let profit = prices[right] - prices[left];

            if (profit > max) {
                max = profit;
            }

            if (prices[right] < prices[left]) {
                left = right;
            }
            
            right++;
        }

        return max;
    }
}