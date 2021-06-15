# Домашнее задание по асинхронности

### 1. Основное задание

Вариант 10

Реализовать операцию filter для асинхронного массива.

```
function filter(
    array: AsyncArray,
    fn: (cur: any, idx: Number, src: AsyncArray) => Boolean,
    cb: (result: AsyncArray) => void) {
}
```
[Смотреть на GitHub Pages реализацию](https://nobasksio.github.io/)

[Исходный код](https://github.com/Nobasksio/Nobasksio.github.io/blob/master/async/index.js)

Чтобы подключить в свой проект просто вставьте тег
```
<script src="https://nobasksio.github.io/async/index.js"></script>
```

### 2. Бонусное задание

##### Реализовать в отдельном файле собственную версию методов:

[Смотреть на GitHub Pages реализацию](https://nobasksio.github.io/bonus.html)

[Исходный код](https://github.com/Nobasksio/Nobasksio.github.io/blob/master/bonus/promise_power.js)

Чтобы подключить в свой проект просто вставьте тег
```
<script src="https://nobasksio.github.io/bonus/promise_power.js"></script>
```

### 2. Дополнительное задание rxjs

Последнюю версию я залил уже после дедлайна. 

Она касается правок в третьем задании. Не уверен что она архитектурно лучше, но она работает для всех случаев. 

Предпоследняя версия работала начиная со второго значения(я использовал pairwise).

[Смотреть на GitHub Pages реализацию](https://nobasksio.github.io/shri-rxjs-hw)

[Исходный код](https://github.com/Nobasksio/Nobasksio.github.io/blob/master/shri-rxjs-hw/index.html)



