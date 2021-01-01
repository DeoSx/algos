const numbers = [5, 6, 3, 7, 4, 10]

function summ(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

function summRecursive(arr) {
  let total
  if (arr.length) {
    total = arr[0] + summRecursive(arr.slice(1))
    return total
  } else {
    return 0
  }
}

summRecursive(numbers)

function highest(arr) {
  let high = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (high < arr[i]) {
      high = arr[i]
    }
  }
  console.log(high)
  return high
}

highest(numbers)

function quicksort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]
    const less = []
    const greater = []
    arr.map((i) =>
      i < pivot ? less.push(i) : i > pivot ? greater.push(i) : null
    )
    return [...quicksort(less), pivot, ...quicksort(greater)]
  }
}

console.log(quicksort(numbers))
