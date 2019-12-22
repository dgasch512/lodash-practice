var _ = require('lodash');
const assert = require('assert');

const strNums = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3","2","3","8","4","6","2","6","4","3","3","8","3","2","7"];

function chunk(arr, num) {
  return _.chunk(arr, num);
}

if (typeof describe === 'function') {
  describe('chunk', () => {
    it('return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5
      );
    });
  });
} else {
  console.log(chunk(strNums, 5));


}