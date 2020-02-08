let duck, mallard, flamingo
let flock = []
const SPEED = 5000
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0)

  duck = new Duck(window.innerWidth / 2, window.innerHeight / 2) // Create new duck in the middle of the screen
  mallard = new Mallard(100, 100)
  flamingo = new Flamingo(200, 200)
  flock.push(duck)
  flock.push(mallard)
  flock.push(flamingo)
}
function draw() {
  //   duck.show()
  //   mallard.show()
  //   flamingo.show()
  background(0)
  let movement =
    Math.sin(((performance.now() % SPEED) / SPEED) * Math.PI * 2) * 1000
  for (let f of flock) {
    f.show()
    f.x = movement + window.innerWidth / 2
  }
}

class Duck {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = 100
    this.color = [255, 255, 0] //RGB values for yellow
  }
  show() {
    fill(this.color)
    ellipse(this.x, this.y, this.radius, this.radius)
  }
}

class Mallard extends Duck {
  constructor(x, y) {
    super(x, y)
    this.color = [0, 255, 0]
  }
}

class Flamingo extends Duck {
  constructor(x, y) {
    super(x, y)
    this.color = [220, 100, 100]
    this.height = this.radius * 2
  }
  show() {
    fill(this.color)
    ellipse(this.x, this.y, this.radius, this.height)
  }
}
