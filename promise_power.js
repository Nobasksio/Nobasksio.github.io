const _wrap = (fn, cb) => {
  setTimeout(() => {
    cb(fn());
  }, Math.random() * 20);
};

const makePromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, Math.random() * 2220)
  });
};

Promise._any = function (promiseArr, waitTimeMs = 0) {

  return new Promise((resolve, reject) => {

    const TICK_TIME = 10;
    const errors = [];
    // начинаем проверять все промисы
    // если хоть один разрашился то возвращаем его
    // если вернули rejected, сладываем в массив;
    promiseArr.forEach((item) => {
      item
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          error.push(e);
        })
    })

    // EXTRA_BONUS
    // добавил условие на максимальное ожидание
    let counter = 0;
    setInterval(() => {
      // проверяем если rejected столько же сколько промисов то возвращаем ошибку
      if(errors.length === promiseArr.length) reject(errors);
      if(waitTimeMs && counter >= waitTimeMs) return reject('timeout');
      counter += TICK_TIME;
    }, TICK_TIME)
  })

};

let test = [
  makePromise(1),
  makePromise(2),
  makePromise(3),
  makePromise(4),
];
// Promise._any(test, 100).then((data) => {
//   console.log('успех', data)
// }).catch((e) => {
//   console.log(e);
// })

Promise._allSettled = function (promiseArr, waitTimeMs) {
  return new Promise((resolve, reject) => {

    const TICK_TIME = 10;
    const results = [];
    // начинаем проверять все промисы
    // если хоть один разрашился то возвращаем его
    // если вернули rejected, сладываем в массив;
    promiseArr.forEach((item) => {
      item
        .then((data) => {
          results.push(data);
        })
        .catch((e) => {
          results.push(e);
        }).finally()
    })

    // EXTRA_BONUS
    // добавил условие на максимальное ожидание
    let counter = 0;
    setInterval(() => {
      // проверяем если rejected столько же сколько промисов то возвращаем ошибку
      if(results.length === promiseArr.length) resolve(results);
      if(waitTimeMs && counter >= waitTimeMs) return reject('timeout');
      counter += TICK_TIME;
    }, TICK_TIME)
  })
};

/**
 * реализация finally
 * @param fn
 * @return {Promise | Error}
 * @private
 */
Promise.prototype._finally = function (fn) {

  return this.then(()=> {
    if (fn && typeof fn === 'function'){
      fn()
    } else {
      throw 'Передана не функция'
    }
  })

};

let test2 = () => {};

console.log('test', typeof test2);

makePromise(1).then((data) => {
  console.log('test1', data)
})
  ._finally(() =>{
  console.log('я чемпион')
  }
)
