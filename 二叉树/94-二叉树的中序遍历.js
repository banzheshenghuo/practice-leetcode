/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */

// * recursion

var inorderTraversal = function (root) {
  const arr = []
  if (!root) return arr

  recursion(root, arr)

  return arr
}

function recursion(node, arr) {
  node.left && recursion(node.left, arr)
  arr.push(node.val)
  node.right && recursion(node.right, arr)
}

// iteration

// origin myself
// 思路类似前序遍历 加了颜色标记
var inorderIteration1 = function (root) {
  if (!root) return []

  const arr = []
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()

    // * 需要通过颜色标记，跌打过的节点不再查找子树
    if (node.isIterated) {
      arr.push(node.val)
      continue
    }

    node.isIterated = true

    node.right && stack.push(node.right)

    if (node.left) {
      stack.push(node, node.left)
    } else {
      arr.push(node.val)
    }
  }

  return arr
}

// best practice
function inorderIteration2(root) {
  if (!root) return []

  const arr = []
  const stack = []
  let cur = root

  while (stack.length || cur) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    node = stack.pop()
    arr.push(node.val)

    if (node.right) {
      cur = node.right
    }
  }

  return arr
}
