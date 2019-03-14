### ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
```
var proxy = new Proxy(target, handler);
```
Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

