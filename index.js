
// todo достать из репы это апи

(() => {

  const _wrap = (fn, cb) => {
    setTimeout(() => {
      cb(fn());
    }, Math.random() * 20);
  };

  const AsyncArray = function(initial) {
    if (initial && !(initial instanceof Array)) {
      throw new Error('initial value is not an array');
    }

    const a = initial ? Array.from(initial) : [];

    this.set = (index, value, cb) => _wrap(() => { a[index] = value }, cb);
    this.push = (value, cb) => _wrap(() => { a.push(value) }, cb);

    this.get = (index, cb) => _wrap(() => a[index], cb);
    this.pop = (cb) => _wrap(() => a.pop(), cb);
    this.length = (cb) => _wrap(() => a.length, cb);

    this.print = () => { console.log(a.toString()); };
  }

  const add = (a, b, cb) => _wrap(() => a + b, cb);
  const subtract = (a, b, cb) => _wrap(() => a - b, cb);
  const multiply = (a, b, cb) => _wrap(() => a * b, cb);
  const divide = (a, b, cb) => _wrap(() => a / b, cb);
  const mod = (a, b, cb) => _wrap(() => a % b, cb);

  const less = (a, b, cb) => _wrap(() => a < b, cb);
  const equal = (a, b, cb) => _wrap(() => a == b, cb);
  const lessOrEqual = (a, b, cb) => _wrap(() => a <= b, cb);
  const sqrt = (x, cb) => _wrap(() => Math.sqrt(x), cb);

  window.Homework = {
    AsyncArray,
    add,
    subtract,
    multiply,
    divide,
    mod,
    less,
    equal,
    lessOrEqual,
    sqrt
  };

  Object.freeze(window.Homework);
})();

const {
  AsyncArray,
  add,
  subtract,
  multiply,
  divide,
  mod,
  less,
  equal,
  lessOrEqual,
  sqrt
} = Homework;

const a = new AsyncArray([1, 2, 3, 4, 5, 6, 7]);

// function filter(
//   array: AsyncArray,
//   fn: (cur: any, idx: Number, src: AsyncArray) => Boolean,
//   cb: (result: AsyncArray) => void) {
// }

async function filter(arr, fn, cb) {

  // проверить массив

  // проверить функцию

  // проверить коллбэк

  const newArray = new AsyncArray();

  let test = 0;

  const promiseLen = new Promise((resolve, reject) => {
    arr.length((len) => resolve(len));
  });
  promiseLen
    .then(async (len) => {

      for (let i = 0; true;) {
        let canEnd = false;

        await new Promise((resolve) => {
            arr.get(i, (item) => {
              resolve(item);
            });
        }).then((item) => {
          return {isEqual: fn(item, i, arr), item}
        }).then(({isEqual, item}) => {
          if(isEqual) return newArray.push(item, () => {})
        }).then(() => {
          return new Promise((resolve, reject) => {
            add(i, 1, (result) => resolve(result))
          })
        }).then((nowIndex) => {
          i = nowIndex;
          return new Promise((resolve) => {
            less(nowIndex, len, (isLess) => resolve(isLess))
          })
        }).then((isLess) => {
          if (!isLess) canEnd = true;
        })
          .catch((e) => {
            throw e;
          })

        if(canEnd) {
          break;
        }
      }
  }).then(() => {
    cb(newArray);
  })
}


filter(a,
  (item, idx, src) => item % 2 === 0,
  (array) => array.length((len) => console.log(len))
);
