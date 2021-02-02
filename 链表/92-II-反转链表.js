/*
 * @Author: your name
 * @Date: 2021-02-03 06:25:56
 * @LastEditTime: 2021-02-03 06:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/92-II-反转链表.js
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

// 将交换链表的模板抽出来

// 思路，双指针，从哨兵节点开始迭代，快指针比慢指针快n-m+1，当快指针等于n时，此处可以记录替换部分的pre=slow和next=fast.next
// 将中间部分进行反转生成新的链表然后接上pre和 next
//  ? 中间链表是否可以直接返回不用生成新链表？

var reverseBetwwen = function (head, m, n) {
  if (!head) return head
  if (n === m) return head

  const preHead = new ListNode(null, head)
  let slow = preHead
  let fast = preHead
  let count = n - m + 1

  // 获取第n节点和m-1节点
  while (n) {
    n--
    if (count) {
      count--
      fast = fast.next
    } else {
      fast = fast.next
      slow = slow.next
    }
  }

  //保留原链表的pre和next节点
  let pre = slow
  let next = fast.next

  fast.next = null
  const [reversedStart, reversedEnd] = reverse(slow.next)

  pre.next = reversedStart
  reversedEnd.next = next

  return preHead.next
}

// 反转，这个就是模板
function reverse(head) {
  let end = head
  let pre = null

  while (head) {
    const next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return [pre, end]
}
