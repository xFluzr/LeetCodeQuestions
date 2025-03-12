function maxProfit(prices) {
    var l = 0; // l -> buy // r->sell
    var maxProfit = 0;
    for (var r = 1; r < prices.length; r++) {
        if (prices[l] < prices[r]) {
            var profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        }
        else {
            l = r;
        }
    }
    return maxProfit;
}
var prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
