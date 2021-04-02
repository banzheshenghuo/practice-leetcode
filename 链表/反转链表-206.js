const {makeListNode}  = require('../工具/链表')

function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  // 返回反转后的头节点
  return prev
}


function reverseRecursion(head){
  if(head === null || head.next === null) return head

  const last = reverseRecursion(head.next)

  head.next.next = head
  head.next = null

  return last
}

const listNodes = makeListNode([1,2,3,4,5])

reverseRecursion(listNodes)