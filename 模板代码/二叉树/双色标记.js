// * 类似打tag，通过迭代实现前中后序遍历，
// * 不过层序遍历不知道可以用不

function traverse(arr) {
  if (!root) return []

  let stack = [root]

  while (stack.length) {
    const node = stack.pop()

    if (node.isTraversed) {
      // do something
      continue
    }

    // * 此处对节点打tag，当已遍历则修改属性为true，表示已访问
    node.isTraversed = true

    // * 此处可以根据前中后序遍历来调整添加顺序
    // * 前序  右-左
    // * 中序  右-根-左
    // * 后序  左-右-根

    // 目前是中序
    // 其实如果是前序可以不用添加tag，优先操作跟节点就行。
    node.right && stack.push(node.right)
    stack.push(node)
    node.left && stack.push(node.left)
  }
}
