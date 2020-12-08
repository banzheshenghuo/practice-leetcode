// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// 思路 第一个想的就是通过贪心算法
// 能不能将其分解为局部问题，然后通过局部的最优解组成最终解。
// 其实就是低点买入，高点卖出，
// !(有问题，out) 可以使用双指针，对比快指针比慢指针之间的绝对值最大，作为卖出日，如果没有比慢指针更大，当天就不进行买入，移动慢指针（但是有个问题，每次都需要遍历貌似会很慢，这里感觉可以优化）
// 问题：好像不行啊，如果中途低价卖出，后面在低价买入在卖出
// [1,2,3,4,5,1,8]
// 7
// 4 + 7

function maxProfit(prices) {
  if (prices.length <= 1) return 0

  let i = 0,
    j = 1,
    len = prices.length
  while (i < len) {
    let earn = 0
    const buyPrice = prices[i]

    for (; j < len; j++) {
      const salePrice = prices[j]
      if (Math.max(salePrice - buyPrice, earn) !== earn) {
        earn = salePrice - buyPrice
      }
    }
  }
}
