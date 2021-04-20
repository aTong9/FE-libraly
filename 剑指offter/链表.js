// 视频地址：https://www.bilibili.com/video/BV1P5411H77a?p=2
// 链表：JS实现方式

// 1、单向链表：线性的数据结构。不连续跟 数组区分
// 2、双向链表：顾名思义就是两条链
// 3、单向循环链表：
// 4、双向循环链表：
// 5、环形链表：


// JS实现单向链表
class Node {
  constructor(element) {
    this.element = element // 元素
    this.next = null  // next 指针
  }
}

class linkedList {
  constructor() {
    this.size = 0 // 长度
    this.head = null // 头指针
  }
  append(element) {
    let node = new Node(element)
    // 链表为空
    if (this.head === null) { // 或者 this.size === 0 链表为空
      this.head = node
    } else {
      let current = this.getNode(this.size - 1)
      current.next = node
    }
    this.size++
  }
  // 插入链表
  appendAt(position, element) {
    if (position < 0 || position > this.size) {
      throw new Error('position out range')
    }
    let node = new Node(element)

    if (position === 0) {
      node.next = this.head
      this.head = node
      console.log('this.head', this.head)
    } else {
      let pre = this.getNode(position - 1)
      node.next = pre.next
      pre.next = node
    }
    this.size++
  }
  // 删除某个位置的链表
  removeAt(position) {
    if (position < 0 || position >= this.size) {
      throw new Error('removeAt position out range')
    }
    let current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      let pre = this.getNode(position - 1)
      current = pre.next
      pre.next = current.next
    }
    this.size--
  }
  // 查找指定元素索引
  indexOf(element) {
    let current = this.head // 从头开始
    for (let i = 0; i < this.size; i++) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // 获取元素索引
  getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('out range')
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }
}

const ll = new linkedList()
console.log('ll', ll)
ll.append(1)
ll.append(2)
// ll.append(3)
// ll.append(4)
ll.appendAt(2, 3)
// ll.removeAt(2)

// console.log(ll.indexOf(1))
console.log(ll.indexOf(2))
// console.log(ll.indexOf(3))
// console.log(ll.indexOf(4))
console.dir(ll, {
  depth: 100
})