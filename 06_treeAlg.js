const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11
          }
        ]
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    v: 5,
    c: [
      {
        v: 10
      },
      {
        v: 15
      }
    ]
  }
]

const recursive = (tree) => {
  let sum = 0

  tree.forEach((node) => {
    sum += node.v

    if (node.c && node.c.length) {
      sum += recursive(node.c)
    }
    return node.v
  })
  return sum
}

const iterable = (tree) => {
  let sum = 0
  const stack = []

  tree.forEach((node) => stack.push(node))

  while (stack.length) {
    const node = stack.pop()
    sum += node.v

    if (node.c && node.c.length) {
      node.c.forEach((i) => stack.push(i))
    }
  }
  return sum
}

console.log(recursive(tree))
console.log(iterable(tree))
