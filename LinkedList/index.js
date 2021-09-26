class ll {
  constructor () {
    this.head = { next: null, value: null }
    this.tail = { next: null, value: null }
  }

  add (value, position) {
    if (position === 'start') {
      if (this.head.value === null) {
        this.head = { value: value, next: { value: null, next: null } }
        this.tail = this.head
      } else {
        let node = { value: value, next: this.head }
        this.head = node
      }
    }
    if (position === 'end') {
      if (this.tail.next === null) {
        this.head = { value: value, next: { value: null, next: null } }
        this.tail = this.head
      } else {
        this.tail.next = { value: value, next: { value: null, next: null } }
        this.tail = this.tail.next
      }
    }
  }

  getHead () {
    console.log(this.head)
    return this.head
  }

  getTail () {
    console.log(this.tail)
    return this.tail
  }

  print () {
    let pointer = this.head
    let list = ''
    do {
      list += pointer.value + ' > '
      pointer = pointer.next
    } while (pointer.next !== null)
    console.log(list)
  }
}
