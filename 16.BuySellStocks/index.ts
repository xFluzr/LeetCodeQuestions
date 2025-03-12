function maxProfit(prices: number[]): number {
  let l = 0; // l -> buy // r->sell
  let maxProfit = 0;

  for (let r = 1; r < prices.length; r++) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
  }
  return maxProfit;
}
const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));
