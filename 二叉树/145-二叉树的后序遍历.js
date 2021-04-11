/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 */

// postorder

// recursion
var postorderRecursion = function (root) {
  if (!root) return []

  const arr = []

  postorder(root, arr)

  return arr
}

function postorder(node, arr) {
  node.left && postorder(node.left, arr)
  node.right && postorder(node.right, arr)

  arr.push(node.val)
}

// iteration
function postorderIterate(root) {
  if (!root) return []
  const arr = []
  const stack1 = [root]
  const stack2 = []

  while (stack1.length) {
    const node = stack1.pop()
    stack2.push(node)

    node.left && stack1.push(node.left)
    node.right && stack1.push(node.right)
  }

  while (stack2.length) {
    arr.push(stack2.pop().val)
  }

  return arr
}
