/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 */

// 递归的2个要点
// 1. 找到 base case
// 2. 明确函数的定义并相信他，不要陷入人脑递归
var invertTree = function (root) {
  if (!root) return null

  // * 交换左右节点
  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
}
