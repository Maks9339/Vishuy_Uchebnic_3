const btn1_53 = document.querySelector('#task1_53');

btn1_53.addEventListener('click', function() {
    let sym = Symbol('секретный ключ');
    
    let obj = {
        a: 1,
        b: 2,
        [sym]: 'данные под символом'
    };

    console.log('Объект с символьным ключом:');
    console.log(obj);
    console.log('Значение по символу:', obj[sym]);
});

const btn1_54 = document.querySelector('#task1_54');

btn1_54.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3};
    let sym = Symbol();
    obj[sym] = 'text';
    for (let key in obj) {
        console.log(obj[key]);
    }
})

const btn1_56 = document.querySelector('#task1_56');

btn1_56.addEventListener('click', function() {
    let arr = [1, 2, 3];
    let sym = Symbol();

    arr[sym] = function() {
        let sum = 0;
        for (let item of this) {
            sum += item;
        }
        return sum;
    };

    console.log('Исходный массив:', arr);
    console.log('Сумма (№2):', arr[sym]());

    arr.push(4);
    arr.push(5);

    console.log('Массив после push (№3):', arr);
    console.log('Новая сумма:', arr[sym]());
});

const btn1_57 = document.querySelector('#task1_57');

btn1_57.addEventListener('click', function() {
    let obj1 = {a: 10, b: 20, c: 30};
    let obj2 = {x: 5, y: 5, z: 5};

    function addSumMethod(obj) {
        let sym = Symbol.for('sum');
        obj[sym] = function() {
            let sum = 0;
            for (let key in this) {
                if (typeof this[key] === 'number') {
                    sum += this[key];
                }
            }
            return sum;
        };
    }

    addSumMethod(obj1);
    addSumMethod(obj2);

    let globalSym = Symbol.for('sum');

    console.log('Сумма obj1:', obj1[globalSym]());
    console.log('Сумма obj2:', obj2[globalSym]());
    console.log('Символы идентичны:', obj1[globalSym] === obj2[globalSym]);
});

const btn1_58 = document.querySelector('#task1_58')
const btn2_58 = document.querySelector('#task2_58')

btn1_58.addEventListener('click', function() {
    let sym1 = Symbol.for('test1');
    let key1 = Symbol.keyFor(sym1)

    console.log(key1)
})

btn2_58.addEventListener('click', function(){ 
    let sym2 = Symbol.for('test2')
    let key2 = Symbol.keyFor(sym2)

    console.log(key2)
})

const btn1_59 = document.querySelector('#task1_59');

btn1_59.addEventListener('click', function() {
    let map = new Map();
    let set = new Set();

    console.log('Map имеет Symbol.iterator:', typeof map[Symbol.iterator]); 
    console.log('Set имеет Symbol.iterator:', typeof set[Symbol.iterator]);

    if (map[Symbol.iterator] && set[Symbol.iterator]) {
        alert('Обе коллекции имеют встроенный итератор (см. консоль)');
    }
});