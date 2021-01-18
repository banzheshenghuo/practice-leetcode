// 思考：
// 1. 最简单的方法，先遍历链表A并给每个节点打上标记，然后遍历链表B，如果发现有标记，说明是相交节点，没有则说明没有相交
// 缺点 空间复杂度高
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null

  while (headA !== null) {
    headA.tag = true
    headA = headA.next
  }

  while (headB !== null) {
    if (headB.tag) return headB
    headB = headB.next
  }

  return null
}

//2. 链表A和链表B如果相交，链表会有3种片段，A独有的,B独有的，都包含的，A和B独立片段的长度可能不一样，
// ? 怎么感觉耗时还增加了
function getIntersectionNode1(headA, headB) {
  if (headA === null || headB === null) return null

  let changedA = false
  let changedB = false

  let nodeA = headA
  let nodeB = headB
  while (nodeA !== null && nodeB !== null) {
    if (nodeA === nodeB) return nodeA
    nodeA = nodeA.next === null && !changedA ? (changedA = true && headB) : nodeA.next
    nodeB = nodeB.next === null && !changedB ? (changedB = true && headA) : nodeB.next
  }

  return null
}

// !终止条件很重要啊
var getIntersectionNode2 = function (headA, headB) {
  // 清除高度差
  let pA = headA,
    pB = headB
  while (pA || pB) {
    if (pA === pB) return pA
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return null
}
