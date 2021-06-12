/**
 *  Это вспомогательный код для того чтобы сделать базовую демонстрацию работы методов.
 *  Его можно не смотреть 🙈
 -------------------------------------------------------------------------
 */

const makePromise = (num, isReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject)  reject(num);
      resolve(num);

    }, Math.random() * 2220)
  });
};



const anyBtn = document.getElementById('any');
anyBtn.addEventListener('click', () => {
  let test_any = [
    makePromise(1),
    makePromise(2),
    makePromise(3),
    makePromise(4),
  ];
  console.log('старт теста Promise._any')
  Promise._any(test_any, 0)
    .then((data) => {
      console.log(`Promise._any вернул ${data}`)
    })
    .catch((e) => {
      console.log('Promise._any вернулcя c ошибкой', e);
    })
})


const allBtn = document.getElementById('all');

allBtn.addEventListener('click', () => {
  let test_allSettled = [
    makePromise(5),
    makePromise(6),
    makePromise(7),
    makePromise(8),
  ];
  console.log('старт теста Promise._allSettled');
  Promise._allSettled(test_allSettled, 0)
    .then((data) => {
      console.log(`Promise._allSettled вернул ${data}`)
    })
})

const finallyBtn = document.getElementById('finally');
finallyBtn.addEventListener('click', () => {
  console.log('старт теста _finally с resolve');
  makePromise(1)
    .then((data) => {
      console.log(`сначала промис ${data} успешно разрешается`)
    })
    ._finally(() => {
        console.log('затем вызывается функция _finally после успешного выполнения')
      }
    )
  console.log('старт _finally с reject')
  makePromise(2, true)
    .catch((data) => {
      console.log(`сначала промис ${data} ловится в catch`)
    })
    ._finally(() => {
        console.log('затем вызывается функция _finally после reject')
      }
    )

})
