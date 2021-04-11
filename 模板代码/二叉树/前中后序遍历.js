/**
 * ! 前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

// * 递归前序遍历
function preorderRecur(root) {
  if (!root) return root

  // ! do something
  console.log(root.val)

  preorderRecur(root.left)
  preorderRecur(root.right)
}

// * 迭代的思路是自己使用 stack来模拟系统的调用栈
function preorderIteration() {
  if (!root) return root

  const stack = []
  stack.push(root)

  while (stack.length) {
    const currNode = stack.pop()
    // ! do something

    // ! 迭代 前序遍历 先push right 后push left，这样保证每次先取出来的都是left
    currNode.right && stack.push(currNode.right)
    currNode.left && stack.push(currNode.left)
  }
}
