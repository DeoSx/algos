const sortedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let count = 0

function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1
  let counter = 0

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]
    counter += 1
    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null
}

function recursiveBinarySearch(array, item, start, end) {
  const middle = Math.floor((start + end) / 2)
  count += 1
  if (item === array[middle]) {
    return middle
  }

  if (item > array[middle]) {
    return recursiveBinarySearch(array, item, middle + 1, end)
  } else {
    return recursiveBinarySearch(array, item, start, middle - 1)
  }
}

console.log(recursiveBinarySearch(sortedNumbers, 12, 0, sortedNumbers.length))
console.log(count)
