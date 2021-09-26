export class graph {
  constructor (ver) {
    this.vertices = ver
    this.aList = {}
    this.vertices.forEach(ver => {
      this.aList[ver] = new ll()
    })
  }

  addEdge (vertices, value) {
    this.aList[vertices].add(value, 'end')
  }

  addVertices (vertices) {
    if (this.aList[vertices]) {
      console.log('Already exists')
      return 'Already exists'
    }

    this.aList[vertices] = new ll()
  }

  drawGraph () {
    let prevTop = 0
    let prevPos = 0
    let position = ['left', 'right']
    for (let key in this.aList) {
      let top = Math.floor(Math.random() * 10) + 2
      let pos = Math.floor(Math.random() * 100) + 50
      var item = position[Math.floor(Math.random() * position.length)]
      let drawc = new draw()
      drawc.addCircle({ top: prevTop + top, [item]: prevPos + pos }, key)
      prevTop = prevTop + top + 20
      prevPos = prevPos + pos + 200
    }

    for (let key in this.aList) {
      let node1 = document.getElementById('circle' + key)
      let y1 = node1.offsetTop
      let x1 = node1.offsetLeft

      let y2 = 0
      let x2 = 0

      let pointer = this.aList[key].head
      let list = ''
      while (pointer.next !== null) {
        let node2 = document.getElementById('circle' + pointer.value)

        x2 = node2.offsetLeft
        y2 = node2.offsetTop
        let drawl = new draw()
        drawl.addLine({ x1, x2, y1, y2 }, 'svg' + pointer.value + key)
        drawl.addArrow({ x1, x2, y1, y2 })
        pointer = pointer.next
      }
    }
  }
}

let graph1 = new graph(['a', 'b', 'c', 'd'])
graph1.addEdge('a', 'b')
graph1.addEdge('a', 'c')
graph1.addEdge('b', 'c')
graph1.addEdge('d', 'a')
graph1.addEdge('d', 'b')
graph1.drawGraph()
