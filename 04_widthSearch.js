const Deque = require('collections/deque')

let graph = {}

graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['johny'] = []

function isSeller(name) {
  return name[name.length - 1] === 'm'
}

let searchQueue = graph['you']

while (searchQueue.length) {
  let person = searchQueue.shift()
  const searched = []
  searchQueue = searchQueue.filter((i) => i !== person)
  if (!searched.find((i) => i === person)) {
    if (isSeller(person)) {
      console.log(`${person} is mango seller`)
      break
    } else {
      searchQueue = [...searchQueue, ...graph[person]]
      searched.push(person)
    }
  }
}

const graphs = {}
graphs.a = ['b', 'c']
graphs.b = ['f']
graphs.c = ['d', 'e']
graphs.d = ['f']
graphs.e = ['f']
graphs.f = ['g']

function breadthSearch(graph, start, end) {
  let queue = []
  queue.push(start)
  while (queue.length > 0) {
    const current = queue.shift()
    if (!graph[current]) {
      graph[current] = []
    }
    if (graph[current].includes(end)) {
      return true
    } else {
      queue = [...queue, ...graph[current]]
    }
  }
  return false
}
console.log(breadthSearch(graphs, 'a', 'g'))
