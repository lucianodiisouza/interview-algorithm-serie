// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length "size"
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  const newChunk = [];
  let index = 0;

  while (index < arr.length) {
    newChunk.push(arr.slice(index, index + size));
    index += size;
  }

  return newChunk
}

module.exports = chunk;
