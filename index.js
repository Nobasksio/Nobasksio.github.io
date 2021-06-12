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

/**
 * Релазиация функции filter (10 вариант)
 * @param arr: AsyncArray
 * @param fn: (cur: any, idx: Number, src: AsyncArray) => Boolean
 * @param cb: (result: AsyncArray) => void)
 */
async function filter(arr, fn, cb) {

  if (!(arr instanceof AsyncArray)) {
    throw 'Переданный массив не является экземпляром класса AsyncArray';
  }


  if (!(fn instanceof Function)) {
    throw 'Второй аргумент не является фунцией';
  }

  // проверить коллбэк
  if (!(fn instanceof Function)) {
    throw 'Третий аргумент не является функцией';
  }

  const newArray = new AsyncArray();

  const promiseLen = new Promise((resolve, reject) => {
    try {
      arr.length((len) => resolve(len));
    } catch (e) {
      reject(e);
    }
  });
  promiseLen
    .then(async (len) => {

      for (let i = 0; true;) {
        let canEnd = false;

        await new Promise((resolve) => {
            arr.get(i, (item) => {
              resolve(item);
            });
        })
          .then((item) => {
          return {isEqual: fn(item, i, arr), item}
        })
          .then(({isEqual, item}) => {
          if(isEqual) return newArray.push(item, () => {})
        })
          .then(() => {
          return new Promise((resolve, reject) => {
            add(i, 1, (result) => resolve(result))
          })
        })
          .then((nowIndex) => {
          i = nowIndex;
          return new Promise((resolve) => {
            less(nowIndex, len, (isLess) => resolve(isLess))
          })
        })
          .then((isLess) => {
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
  }).catch((e) => {
    throw `Во время выполнения вознила ошибка: ${e}`;
  })
}

/**
 * Конец реализации
 */






/**
 *  Начало вспомогательного кода. Его можно не смотреть 🙈
-------------------------------------------------------------------------
 */

console.log(`вызываем функцию
const a = new AsyncArray([1, 2, 3, 4, 5, 6, 7]);
filter(a,
  (item, idx, src) => item % 2 === 0,
  (array) => array.length((len) => {
    console.log(len)
    console.log('end' , new Date);
  })
);
`)

const startTime = new Date;
console.log('start Unix timestamp', startTime.getTime());

filter(a,
  (item, idx, src) => item % 2 === 0,
  (array) => array.length((len) => {
    console.log(len)
    const endTime = new Date;
    console.log('end Unix timestamp', endTime.getTime());
    console.log(`функция выполнялась ${endTime.getTime() -  startTime.getTime()} ms`);
  })
);
