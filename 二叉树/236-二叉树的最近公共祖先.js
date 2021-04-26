/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */
// * 第一个想法就是遍历找到对应节点，且吧节点路径生成一个数组

// * 初始版 特别费时
var lowestCommonAncestor = function (root, p, q) {
  const pArr = preorder(root, p)
  const qArr = preorder(root, q)

  for (let i = pArr.length - 1; i >= 0; i--) {
    const curNode = pArr[i]
    let j = qArr.length - 1

    while (j >= 0) {
      if (curNode === qArr[j]) {
        return curNode
      } else {
        j--
      }
    }
  }
}

function preorder(root, target) {
  if (!root) return []

  let stack = [[root, []]]
  while (stack.length) {
    const [node, arr] = stack.pop()

    if (node.val === target.val) {
      return arr.concat(node)
    }

    node.right && stack.push([node.right, arr.concat(node)])
    node.left && stack.push([node.left, arr.concat(node)])
  }

  return []
}

// * 递归
// * 求最近的相同公共节点，也就是异侧的情况
// * 如果只在一侧说明另一节点不在当前子树中，将该节点继续上传
var lowestCommonAncestorRecursion = function (root, p, q) {
  if (!root) return null

  if (root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestorRecursion(root.left, p, q)
  const right = lowestCommonAncestorRecursion(root.right, p, q)

  if (left && right) return root
  if (right) return right
  if (left) return left
}
