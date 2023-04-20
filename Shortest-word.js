/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/


// Solution

function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// or

function findShort(s) {
  let arr = s.split(' ');
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}