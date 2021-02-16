/*
 * @Author: your name
 * @Date: 2021-02-16 10:48:50
 * @LastEditTime: 2021-02-16 11:17:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/二叉树/108-将有序数组转换为二叉搜索树.js
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 */

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null

  var mid = (nums.length / 2) | 0
  var node = new TreeNode(nums[mid])

  node.left = sortedArrayToBST(nums.slice(0, mid))
  node.right = sortedArrayToBST(nums.slice(mid + 1))

  return node
}
