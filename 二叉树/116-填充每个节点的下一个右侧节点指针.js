/**
 * 116-填充每个节点的下一个右侧节点指针
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */

// * 要考虑到会有多层级的next指向

var connect = function (root) {
  // * 一层树已经不能满足需求，至少需要二层
  if (!root) return root

  connectTwoNode(root.left, root.right)

  return root
}

function connectTwoNode(nodeL, nodeR) {
  if (!nodeL || !nodeR) return

  nodeL.next = nodeR

  connectTwoNode(nodeL.left, nodeL.right)
  connectTwoNode(nodeR.left, nodeR.right)

  connectTwoNode(nodeL.right, nodeR.left)
}
