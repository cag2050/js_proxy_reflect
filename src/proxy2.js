var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});

console.log(proxy.name);
console.log(proxy.time);
console.log(proxy.title);
proxy.age = 18
console.log(proxy.age);
