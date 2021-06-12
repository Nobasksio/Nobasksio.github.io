/**
 *  Это вспомогательный код чтобы показать как работает асинхронный filter.
 *  Его можно не смотреть 🙈
 -------------------------------------------------------------------------
 */

const btn = document.getElementById('refresh');
btn.addEventListener('click', () => {
  document.location.reload();
})

const a = new AsyncArray([1, 2, 3, 4, 5, 6, 10]);

console.log(`вызываем функцию
const a = new AsyncArray([1, 2, 3, 4, 5, 6, 10]);
filter(a,
  (item, idx, src) => item % 2 === 0,
  (array) => {
      array.print()
      const endTime = new Date;
      console.log('end Unix timestamp', endTime.getTime());
      console.log(функция выполнялась endTime.getTime() - startTime.getTime()} ms);
    }
);

Чтобы подключить мой код в своем проекте просто 
`)

const startTime = new Date;
console.log('start Unix timestamp', startTime.getTime());

filter(a,
  (item, idx, src) => item % 2 === 0,
  (array) => {
    array.print()
    const endTime = new Date;
    console.log('end Unix timestamp', endTime.getTime());
    console.log(`функция выполнялась ${endTime.getTime() -  startTime.getTime()} ms`);
  }
);
