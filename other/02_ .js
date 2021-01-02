class Human {
  constructor(name) {
    this.name = name
  }

  say() {
    return `Hello i'm ${this.name}, i love blabla`
  }
}

class Men extends Human {
  constructor(name) {
    super(name)
  }
}

class Coder extends Human {
  constructor(name) {
    super(name)
  }

  say() {
    return `Hello i'm ${this.name}, i love coding`
  }
}

const men = new Men('Sasha')
const coder = new Coder('Pasha')

console.log(men.say())
console.log(coder.say())
