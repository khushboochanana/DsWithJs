export class draw {
  constructor () {}

  addCircle (pos, id) {
    let graphArea = document.getElementById('graph')
    let canv = document.createElement('canvas')
    canv.style.position = 'absolute'
    canv.width = 40
    canv.height = 40
    canv.style.top = pos.top + 'px'
    if (pos.left) canv.style.left = pos.left + 'px'
    if (pos.right) canv.style.right = pos.right + 'px'
    canv.id = 'circle' + id
    graphArea.appendChild(canv)
    this.drawCircle(id)
  }
  drawCircle (id) {
    const canvas = document.getElementById('circle' + id)
    let context = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 20

    context.beginPath()
    context.fillStyle = 'blue'
    context.arc(centerX, centerY, radius / 2, 0, 2 * Math.PI, false)
    context.fill()
    context = canvas.getContext('2d')
    context.font = '9pt'
    context.fillStyle = 'white'
    context.textAlign = 'center'
    context.fillText(id, centerX, centerY + 4)
  }

  drawLine ({ x1, y1, x2, y2 }, id) {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    newLine.setAttribute('id', 'line2')
    newLine.setAttribute('x1', x1 + 5)
    newLine.setAttribute('y1', y1 + 5)
    newLine.setAttribute('x2', x2 + 5)
    newLine.setAttribute('y2', y2 + 5)
    newLine.style.position = 'absolute'
    newLine.setAttribute('stroke', 'black')
    document.getElementById(id).append(newLine)
  }

  angle ({ x1, y1, x2, y2 }) {
    var dy = y2 - y1
    var dx = x2 - x1
    var theta = Math.atan2(dy, dx) // range (-PI, PI]
    theta *= 180 / Math.PI // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta
  }
  addArrow ({ x1, y1, x2, y2 }) {
    let arrow = document.createElement('i')
    arrow.class = 'arrow'

    let angle = this.angle({ x1, y1, x2, y2 })

    arrow.style.transform = 'rotate(-' + angle + 'deg)'
    document.getElementById('graph').appendChild(arrow)
  }

  addLine ({ x1, y1, x2, y2 }, id) {
    let graphArea = document.getElementById('graph')
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.id = id
    svg.style.position = 'absolute'
    svg.style.width = '100%'
    svg.style.height = '100%'
    graphArea.appendChild(svg)
    this.drawLine({ x1, y1, x2, y2 }, id)
  }
}
