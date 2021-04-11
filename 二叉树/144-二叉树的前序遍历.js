/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

// 前序遍历

// 迭代
var preorderTraversalIteration = function (root) {
  const arr = []
  if (!root) return arr
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    arr.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }

  return arr
}

// recursion
function preorderRecursion(root) {
  const arr = []
  if (!root) return arr

  recursion(root, arr)

  return arr
}

function recursion(node, arr) {
  if (!node) return

  arr.push(node.val)

  node.left && recursion(node.left, arr)
  node.right && recursion(node.right, arr)
}
