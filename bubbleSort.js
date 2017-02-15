'use strict';

function bubbleSort(array) {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    //let's just assume everything will be fine, and it's already sorted
    for (let i = 1; i < (array.length); i++) {
      let left = array[i - 1];
      let right = array[i];

      if (left > right) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        //so easy--because we made the proper sacrifices to the gods of ES6
        unsorted = true;
        //we had to change something? ok--everything's not fine, and we'll have to look through everything one more time to be sure.
      }
    }
  }
  return array;
}
