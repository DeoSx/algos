const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {}
}
const costs = { a: 6, b: 2, fin: Infinity }
const parents = { a: 'start', b: 'start', fin: null }

function dijkstra(costs, graph, parents) {
  const processed = []
  let node = findLowestCostNode(costs, processed)
  while (node) {
    const cost = costs[node]
    const neighbors = graph[node]
    Object.keys(neighbors).forEach((n) => {
      let newCost = cost + neighbors[n]
      if (costs[n] > newCost) {
        costs[n] = newCost
        parents[n] = node
      }
    })
    processed.push(node)
    node = findLowestCostNode(costs, processed)
  }
  console.log(costs, parents)
  return { costs, parents }
}

function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity
  let lowestCostNode = null

  Object.keys(costs).forEach((node) => {
    const cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  })
  return lowestCostNode
}

dijkstra(costs, graph, parents)
