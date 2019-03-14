var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});

let obj = Object.create(proxy);
console.log(obj.time); // 35
