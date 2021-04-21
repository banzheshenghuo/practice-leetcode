/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 */

// 中序排序获取所有数据后取索引
var kthSmallest = function (root, k) {
  // 其实很清楚就是中序遍历得到第几位
  const arr = []
  inorder(root, arr)
  return arr[k - 1]
}

function inorder(root, arr) {
  root.left && inorder(root.left, arr)
  arr.push(root.val)
  root.right && inorder(root.right, arr)
}

// 迭代标记法
var kthSmallestTag = function (root, k) {
  // 中序迭代 标记法
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    if (cur.isIterated) {
      k = k - 1
      if (k === 0) return cur.val
      continue
    }

    cur.isIterated = true

    cur.right && stack.push(cur.right)

    if (cur.left) {
      stack.push(cur, cur.left)
    } else {
      k = k - 1
      if (k === 0) return cur.val
    }
  }

  return -1
}
