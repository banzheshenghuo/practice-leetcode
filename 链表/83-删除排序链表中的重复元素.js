/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

var deleteDuplicates = function (head) {
  if (!head) return null

  const prevHead = new ListNode(null)
  let cur = head
  while (cur.next) {
    const curVal = cur.val
    const nextVal = cur.next.val
    if (curVal === nextVal) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}
