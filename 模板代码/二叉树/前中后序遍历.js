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

/**
 * ! 中序遍历
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/
 */

// * inorderRecur
function inorderRecur(root) {
  if (!root) return root

  inorderRecur(root.left)
  // ! do something
  console.log(root.val)
  inorderRecur(root.right)
}

// * inorderIterate
function inorderIterate(root) {
  if (!root) return root

  let cur = root
  const stack = []

  while (stack.length || cur) {
    // * 先将左子树入栈，直到叶子节点
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    // ! do something
    const node = stack.pop()
    console.log(node.val)

    // * 遍历完左树节点，然后查看右树节点，有则入栈
    if (node.right) {
      cur = node.right
    }
  }
}

/**
 * ! 后序遍历
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
 */

// *postorder recursion
function postorder(root) {
  if (!root) return root

  root.left && postorder(root.left)
  root.right && postorder(root.right)

  // !do something
  console.log(root.val)
}

// * iteration
// ! 没有标准写法，这里使用一种取巧方法，使用2个stack，
// 第一个stack 存储 中右左 进行迭代，然后被stack2存储，所以stack2返过来就是左右中

function postorderIteration(root) {
  if (!root) return []

  const stack1 = [root]
  const stack2 = []

  while (stack1.length) {
    const node = stack1.pop()
    stack2.push(node)

    node.left && stack1.push(node.left)
    node.right && stack1.push(node.right)
  }

  while (stack2.length) {
    // ! do something
    const node = stack2.pop()
  }
}
