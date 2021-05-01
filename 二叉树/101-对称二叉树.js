/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  let helper = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    if (left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left)
    } else {
      return false
    }
  }
  return helper(root, root)
}

// * 我想的是通过先前序遍历将数数据储存至数组中，然后按照根右左判断是否和数组的数据对应
var isSymmetric2 = function (root) {
  // 对比左右子树，可以分别使用根左右和跟右左遍历，如果不相同说明不对称
  let nodes = []
  dfs(root, nodes)

  const isNoMatch = dfsValid(root, nodes)

  return !isNoMatch
}

function dfs(root, nodes) {
  if (!root) {
    nodes.push(null)
    return
  }

  nodes.push(root.val)
  dfs(root.left, nodes)
  dfs(root.right, nodes)
}

function dfsValid(root, nodes) {
  const val = nodes.shift()

  if (!root) {
    return
  }

  if (root.val !== val) {
    return true
  }

  return dfsValid(root.right, nodes) || dfsValid(root.left, nodes)
}
