/*
 * @Author: your name
 * @Date: 2021-01-19 13:48:45
 * @LastEditTime: 2021-01-21 13:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/2-两数相加.js
 * https://leetcode-cn.com/problems/add-two-numbers/
 */

// 思考
// 最简单的就是遍历这2个链表，然后得到结果后想加，然后生成一个链表
// 先做最笨的办法
// var addTwoNumbers = function (l1, l2) {
//   let l1Str = ''
//   let l2Str = ''

//   while(l1 || l2){
//     if(l1){
//       l1Str = `${l1.val}` + l1Str
//       l1 = l1.next
//     }

//     if(l2){
//       l2Str = `${l2.val}` + l2Str
//       l2 = l2.next
//     }
//   }

//   const sumedresult =  `${parseInt(l1Str) + parseInt(l2Str)}`

//   let curNode = null
//   const newList = new ListNode(false,curNode)

//   while(sumedresult){
//     const len = sumedresult.length
//     const curVal = parseInt(sumedresult[len-1])
//     sumedresult = sumedresult.slice(0,len-1)

//     curNode = new ListNode(curVal)

//   }

// }

// 思路：
// 1. 其实一开始主要的问题是没想到如何处理 进 位
// 2. 还有如果新建一条链表
// 3. 边界条件还是要注意，其次是对进位值的把控

// 创建新链表：
// 1. 创建一个头结点
// 2. 创建一个动态节点，指向头结点
// 最后输出的是头结点.next

var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let curNode = head
  let addVal = 0

  while (addVal || l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0

    const curVal = val1 + val2 + addVal
    curNode.next = new ListNode(curVal % 10)
    curNode = curNode.next

    addVal = curVal >= 10 ? 1 : 0

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return head.next
}
