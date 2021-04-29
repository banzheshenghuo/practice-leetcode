/**
 * https://leetcode-cn.com/problems/binode-lcci/
 * https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/easy/binode-lcci
 */

// 关键点 前驱节点

// iterator
var convertBiNode = function (root) {
  if (!root) return null

  let pre
  let ans
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()

    if (node.hasMark) {
      // 记录头节点
      !ans && (ans = node)

      // 修改前驱节点的next指针
      pre && (pre.right = node)
      // 设置当前节点的left为null
      node.left = null
      // 设置当前节点为下一个节点的前驱结点
      pre = node
      continue
    }

    node.hasMark = true

    node.right && stack.push(node.right)
    stack.push(node)
    node.left && stack.push(node.left)
  }

  return ans
}
