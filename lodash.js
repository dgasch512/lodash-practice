var _ = require('lodash');
const assert = require('assert');

const strNums = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3","2","3","8","4","6","2","6","4","3","3","8","3","2","7"];
let myEmps = 
  [
  {"id":"1","employee_name":"Craig Jensen","employee_salary":"0","employee_age":"20"},
  {"id":"2","employee_name":"Philipe Harmon","employee_salary":"12300","employee_age":"99"},
  {"id":"3","employee_name":"Judy Smith","employee_salary":"123","employee_age":"23"},
  {"id":"4","employee_name":"Ravi Robinson","employee_salary":"1500","employee_age":"35"},
  {"id":"5","employee_name":"Amit Negi111","employee_salary":"123456","employee_age":"44"},
  {"id":"6","employee_name":"Kelly Livingston","employee_salary":"1023","employee_age":"23"},
  {"id":"7","employee_name":"John Doe","employee_salary":"8111","employee_age":"75"},
  {"id":"8","employee_name":"Jane Doe","employee_salary":"12443","employee_age":"23"}
  ];

//  1
function chunk(arr, num) {
  return _.chunk(arr, num);
}
console.log(chunk(myEmps, 4));

// 2
function reverse(arr) {
  return _.reverse(arr);
}
console.log(reverse(myEmps));



// 3
function without(arr, loser) {
  return _.without(arr, loser);
}
console.log(without(strNums, 1,2));

// 4
function nthOf(arr, n) {
  return _.nth(arr, n);
}

console.log(nthOf(myEmps, 2));

// 5
function indexOf(arr, value, index) {
  return _.indexOf(arr, value, index);
}
console.log(indexOf(myEmps, 'Kelly Livingston', 3));


if (typeof describe === 'function') {
  describe('chunk', () => {
    it('return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5
      );
    });
  });

  describe('reverse', () => {
    it('should return the array in reverse order', () => {
      const array = reverse([1,2,3]);
      assert.equal(
        array[0], 3
      );
    });
  });
  describe('without', () => {
    it('should return array without specified element', () => {
      const arr = without([1,2,1,3], 1,2);
      assert.equal(
        arr[0,1], 3
      );
    });
  });
  describe('nthOf', () => {
    it('should find the chosen element by index', () => {
      const arr = nthOf([44, 34, 25, 6], 2);
      assert.equal(
        arr, 25
     );
    });
  });
  describe('indexOf', () => {
    it('should find the chosen index of an element', () => {
      const arr = indexOf([44, 34, 25, 6], 44);
      assert.equal(
        arr, 0
     );
    });
  });

} 