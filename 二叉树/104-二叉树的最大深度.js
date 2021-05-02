/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// * 第一个想到的就是遍历所有的叶子节点，然后找到最路径最大的那个
var maxDepthItrator = function (root) {
  if (!root) return 0

  let max = 0

  let stack = [[root, 1]]
  while (stack.length) {
    const [node, level] = stack.pop()

    // 没必要都去对比，只要左右子节点没有才会去对比
    if (!node.left && !node.right) {
      max = Math.max(level, max)
    }

    node.right && stack.push([node.right, level + 1])
    node.left && stack.push([node.left, level + 1])
  }

  return max
}

let maxDepthRecursion = function (root) {
  let max = 0
  let helper = (node, depth) => {
    if (!node) return

    if (!node.left && !node.right) {
      max = Math.max(max, depth)
    }

    if (node.left) {
      helper(node.left, depth + 1)
    }
    if (node.right) {
      helper(node.right, depth + 1)
    }
  }
  helper(root, 1)
  return max
}
// @lc code=end
