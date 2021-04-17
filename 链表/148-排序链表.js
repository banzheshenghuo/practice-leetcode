/**
 * https://leetcode-cn.com/problems/sort-list/
 */

const { ListNode, makeListNode } = require("../工具/链表")

var sortList = function (head) {
  if (!head) return head

  return helper(head, head.next)
}

// 函数定义，排好序并返回头结点
//next 是升序的链表
//pre 是本次待插入的链表节点
function helper(pre, next) {
  if (!next) return pre

  const sortedHead = helper(next, next.next)
  let preHead = new ListNode(null, sortedHead)
  let cur = preHead

  while (true) {
    if (cur.next === null) {
      cur.next = pre
      pre.next = null
      break
    } else if (pre.val < cur.next.val) {
      const temp = cur.next
      cur.next = pre
      pre.next = temp
      break
    } else {
      cur = cur.next
    }
  }

  return preHead.next
}

const data = makeListNode([4, 2, 1, 3])

sortList(data)
