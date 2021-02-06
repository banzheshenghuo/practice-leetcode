/*
 * @Author: your name
 * @Date: 2021-01-21 13:35:16
 * @LastEditTime: 2021-01-28 08:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/24-两两家里换链表节点.js
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

思考：
开始想的错了，其实就是前后交换，没那么复杂。
1. 进行遍历，遍历到的当前节点和他的next是否为null，为null就返回头节点
2. 不为null 则进行交换
  a  b 
  a.next = b.next
  b.next = b.next.next  
  a.next.next = b
然后遍历进入下一个的节点


var swapPairs = function (head) {
  if(!head) return head

  var newList = new ListNode(false,head)
  var newHead = newList
  var curNode = head

  while(curNode && curNode.next){
    newHead.next = curNode.next
    curNode.next = curNode.next.next
    newHead.next.next = curNode

    newHead = curNode
    curNode = curNode.next
  }

  return newList.next
  
}
