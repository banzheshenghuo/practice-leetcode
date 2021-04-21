/**
 * https://leetcode-cn.com/problems/path-sum/submissions/
 */

var hasPathSumDFS = function (root, targetSum) {
  // 初始节点或者后续子节点不存在是直接返回false
  if (!root) return false

  if (!root.left && !root.right) {
    // 说明此时是叶子节点
    // targetSum从跟节点往下遍历时一直被减，如果到了叶子节点相减等于0
    // 说明该条路径的总和等于初始的 targetSum
    return root.val - targetSum === 0
  }

  return hasPathSumDFS(root.left, targetSum - root.val) || hasPathSumDFS(root.right, targetSum - root.val)
}

var hasPathSumBFS = function (root, targetSum) {
  if (!root) return false
  root.sum = 0
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()

    if (!node) continue

    if (!node.left && !node.right && node.sum + node.val === targetSum) return true

    const sum = node.val + node.sum
    if (node.right) {
      node.right.sum = sum
      stack.push(node.right)
    }

    if (node.left) {
      node.left.sum = sum
      stack.push(node.left)
    }
  }

  return false
}
