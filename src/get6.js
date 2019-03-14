
// 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
const target = Object.defineProperties({}, {
    foo: {
        value: 123,
        writable: false,
        configurable: false
    }
});

const handler = {
    get(target, propKey) {
        return 'abc';
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
// TypeError: Invariant check failed
