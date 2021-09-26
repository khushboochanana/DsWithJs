const LEFT = 0
const RIGHT = 1

class TreeNode {
  constructor (value) {
    this.value = value
    this.descendents = []
    this.parent = null
  }

  get left () {
    return this.descendents[LEFT]
  }

  set left (node) {
    this.descendents[LEFT] = node
    if (node) {
      node.parent = this
    }
  }

  get right () {
    return this.descendents[RIGHT]
  }

  set right (node) {
    this.descendents[RIGHT] = node
    if (node) {
      node.parent = this
    }
  }
}

let node1 = new TreeNode('nodeww')
console.log(node1)
let node2 = new TreeNode('ee')
node1.descendents.push('ghgh')

console.log(node1)
node1.descendents.push('geehgh')
node1.descendents.push('geehgreh')

console.log(node1)
