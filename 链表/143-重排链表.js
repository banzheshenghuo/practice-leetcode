/**
 * https://leetcode-cn.com/problems/reorder-list/
 */
var reorderList = function (head) {
  if (!head) return head

  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }

  const preHead = new ListNode(null)
  cur = preHead

  let len = arr.length - 1
  let i = 0

  while (i <= len / 2) {
    cur.next = arr[i]
    cur.next.next = arr[len - i]
    cur = cur.next.next
    cur.next = null
    i++
  }

  return preHead.next
}
