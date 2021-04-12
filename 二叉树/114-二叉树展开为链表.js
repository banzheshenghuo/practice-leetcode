/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
 * 题解 https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--26/
 */

// ! right answers
// 定义
// 1. 将其拍平
// 2, 将右子树链接到左子树的叶子节点
var flatten = function (root) {
  if (!root) return

  flatten(root.left)
  flatten(root.right)

  const left = root.left
  const right = root.right

  // 拍平
  root.left = null
  root.right = left

  // 链接
  let p = root
  while (p.right) {
    p = p.right
  }

  p.right = right
}

// origin error
// 将右子树移动到左子树并返回右子树节点
var flatten2 = function (root) {
  if (!root) return root

  reverseRecursion(root)

  return root
}

function reverseRecursion(node) {
  if (!node) return node

  const nodeR = node.right

  node.right && (node.right = reverseRecursion(node.left))
  node.left && (node.left.right = reverseRecursion(nodeR))

  return nodeR
}
