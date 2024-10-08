Number.prototype.RealValueOf = Number.prototype.valueOf
realPow = Math.pow
realMin = Math.min
realMax = Math.max
realSin = Math.sin
realCos = Math.cos

// Lets screw up timeouts too
realTimeout = setTimeout
realInterval = setInterval

Number.prototype.valueOf = function () {
    return realPow(Math.random(), 2) * 2 * this.RealValueOf();
};

Boolean.prototype.valueOf = function () {
    return Math.random() > 0.5;
}

Math.pow = function (x, y) {
    return realPow(x.valueOf(), y.valueOf()).valueOf();
}

Math.min = function (...values) {
    return realMin(...values).valueOf();
}

Math.max = function (...values) {
    return realMax(...values).valueOf();
}

Math.sin = function (x) {
    return realSin(x.valueOf()).valueOf();
}

Math.cos = function (x) {
    return realCos(x.valueOf()).valueOf();
}

setTimeout = function(...values) {
    if (values.length > 1){
        values[1] = values[1].valueOf();
    }
    return realTimeout(...values);
}
setInterval = function(...values) {
    if (values.length > 1){
        values[1] = values[1].valueOf();
    }
    return realInterval(...values);
}
