'use strict';
function accum() {
  let total = 0
  return function (number) {
    total += number
    return total
  }
}

const accumulator = accum()
console.log(accumulator(5)) 
console.log(accumulator(3))
console.log(accumulator(10))
