
// d对象本身没有a属性，所以读取d.a的时候，会去d的原型proxy对象找。这时，receiver就指向d，代表原始的读操作所在的那个对象。
const proxy = new Proxy({}, {
    get: function(target, property, receiver) {
        return receiver;
    }
});

const d = Object.create(proxy);
console.log(d.a === d); // true
