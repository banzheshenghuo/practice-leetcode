/*
 * @Author: your name
 * @Date: 2021-02-17 09:43:08
 * @LastEditTime: 2021-02-17 10:35:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/122-买卖股票的最佳时机.js
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

// 思路
// 已知每天的股票价格，想要知道最大利润
// 按照提前知道明天比今天贵就买入今天的股票然后明天卖

var maxProfit = function (prices) {
  if (prices.length === 1) return 0

  var sum = 0
  var i = 1

  while (i < prices.length) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1]
    }
    i++
  }

  return sum
}
