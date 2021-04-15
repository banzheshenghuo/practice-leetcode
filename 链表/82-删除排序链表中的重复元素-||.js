/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/fu-xue-ming-zhu-di-gui-die-dai-yi-pian-t-wy0h/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { makeListNode, ListNode } = require("../工具/链表")

// 最初版本 错误
var deleteDuplicates = function (head) {
  if (!head) return null

  const preHead = new ListNode(null, head)
  let cur = preHead

  while (cur.next && cur.next.next) {
    let a = cur.next
    let b = cur.next.next
    let hasDuplicate = false
    while (a.val === b.val) {
      b = b.next
      hasDuplicate = true
    }

    if (hasDuplicate) {
      cur.next = b.next
    } else {
      cur.next = a
    }

    cur = cur.next
  }

  return preHead.next
}

var deleteDuplicatesByIteration = function (head) {
  if (!head) return null

  // 哨兵节点
  const preHead = new ListNode(null, head)
  let pre = preHead
  let cur = preHead

  while (cur) {
    // 过滤重复的节点，最终输出为重复节点的最后一个节点
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next
    }

    //
    if (pre.next === cur) {
      pre = pre.next
    } else {
      pre.next = cur.next
    }

    cur = cur.next
  }

  return preHead.next
}

var deleteDuplicatesByRecursion = function (head) {
  if (!head) return head
  if (!head.next) return head

  if (head.val !== head.next.val) {
    head.next = deleteDuplicatesByRecursion(head.next)
  } else {
    let point = head.next
    while (point && head.val === point.val) {
      point = point.next
    }

    return deleteDuplicatesByRecursion(point)
  }
}

deleteDuplicatesByRecursion(makeListNode([1, 2, 3, 3, 4, 4, 5]))
