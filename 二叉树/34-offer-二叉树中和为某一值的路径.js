/**
 * https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 */
var pathSum = function (root, target) {
  if (!root) return []

  let result = []
  let arr = []

  DFS(root, target, arr, result)

  return result
}

function DFS(node, target, arr, result) {
  if (!node.left && !node.right && node.val === target) {
    result.push([].concat(arr, node.val))
    return
  }
  target = target - node.val
  arr = [].concat(arr, node.val)

  node.left && DFS(node.left, target, arr, result)
  node.right && DFS(node.right, target, arr, result)
}
