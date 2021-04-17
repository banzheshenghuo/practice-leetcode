/**
 * https://leetcode-cn.com/problems/partition-list/
 */

// * 链表的分隔和组合
var partition = function (head, x) {
  if (!head || !head.next) return head

  let preHeadA = new ListNode(null)
  let preHeadB = new ListNode(null)

  let pointA = preHeadA
  let pointB = preHeadB

  while (head) {
    if (head.val < x) {
      pointA.next = head
      pointA = pointA.next
    } else {
      pointB.next = head
      pointB = pointB.next
    }
    head = head.next
  }

  pointA.next = preHeadB.next
  pointB.next = null

  return preHeadA.next
}

var partition2 = function (head, x) {
  if (!head || !head.next) return head

  let a = []
  let b = []

  while (head) {
    head.val < x ? a.push(head) : b.push(head)
    head = head.next
  }

  const preHead = new ListNode(null)

  a.concat(b).reduce((pre, next) => {
    pre.next = next
    next.next = null
    return next
  }, preHead)

  return preHead.next
}
