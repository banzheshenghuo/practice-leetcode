/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

// * 思路：
// * 1. 假设链表长度是 a+b ，b是链表环的长度，a是环之前的长度
// * 2. fast指针走了f步，slow走了s步。因为fast每次走2步，slow每次走一步，所以f = 2s
// * 3. fast和slow第一次相遇，fast比slow多走n个环长度（b）,所以f = s + nb
// * 4. 已知 f = s + nb 和 f = 2s ，所以可得 s = nb
// * 5. 然后从头结点开始走到环入口的步数为k，k = a + nb，而目前slow走了s步即nb，所以再走a步就可以到达环入口

// 自己写的
var detectCycle = function (head) {
  if (!head) return null

  let slow = head
  let fast = head

  let hasCycle = false

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      hasCycle = true
      fast = head
      break
    }
  }

  if (!hasCycle) return null

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}

// 大佬写的
var detectCycle2 = function (head) {
  if (!head) return null

  let slow = head
  let fast = head

  while (true) {
    if (!fast || !fast.next) return null

    slow = slow.next
    fast = fast.next.next

    if (fast === slow) {
      fast = head
      break
    }
  }

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
