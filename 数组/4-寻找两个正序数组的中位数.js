/**
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * https://zhuanlan.zhihu.com/p/115919224 题解
 */

// * 解法一：最简单的就是合并2个数组，然后排序寻找中位数
// * 中位数是按顺序排列中间位置的数，如果所处数据是奇数，则取中间数，如果是偶数，则取中间2数的平均数
var findMedianSortedArrays = function (nums1, nums2) {
  const num = [].concat(nums1, nums2)

  num.sort((a, b) => a - b)

  if (num.length % 2 === 0) {
    return (num[num.length / 2] + num[num.length / 2 - 1]) / 2
  } else {
    return num[(num.length / 2) | 0]
  }
}
