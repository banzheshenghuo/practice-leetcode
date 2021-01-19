// 思考：
// 移除一个元素很简单，只要将next指向修改就行
// 但是发现有一个问题，如果第一个元素的不对呢，我们可以构造一个新的最初节点

// 考虑问题很不全面,条件中止和每一次循环遍历都要很清楚

var removeElements = function (head, val) {
  const newHead = new ListNode(1, head)
  let cur = newHead

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return newHead.next
}
