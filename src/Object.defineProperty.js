
// 对象属性的描述：https://wangdoc.com/javascript/stdlib/attributes.html#%E5%85%83%E5%B1%9E%E6%80%A7
var obj = {}

Object.defineProperty(obj, 'name', {
    configurable: false,
    enumerable: false,
    value: 'john',
    // writable: false,
    // get() {
    //
    // }
})
obj.name = 1111
console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
