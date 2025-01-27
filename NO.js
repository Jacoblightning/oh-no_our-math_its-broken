Number.prototype.RealValueOf = Number.prototype.valueOf
realPow = Math.pow
realMin = Math.min
realMax = Math.max
realSin = Math.sin
realCos = Math.cos

MATHDEBUG = True

rcdeb = console.debug

console.debug = function(...values) {
    if (MATHDEBUG){
        rcdeb(...values);
    }
}

// Lets screw up timeouts too
realTimeout = setTimeout
realInterval = setInterval

Number.prototype.valueOf = function () {
    console.debug("valueOf called with "+ this.RealValueOf());
    let tret = realPow(Math.random(), 2) * 2 * this.RealValueOf();
    console.debug("Returning "+tret);
    return tret;
};

Boolean.prototype.valueOf = function () {
    let tret = Math.random() > 0.5;
    console.debug("Boolean valueOf called. Returning "+tret);
    return tret;
}

Math.pow = function (x, y) {
    console.debug("pow called with "+x+", "+y);
    let tret = realPow(x.valueOf(), y.valueOf()).valueOf();
    console.debug("Returning "+tret)
    return tret;
}

Math.min = function (...values) {
    console.debug("Min called with "+values);
    let tret = realMin(...values).valueOf();
    console.debug("Returning "+tret);
    return tret;
}

Math.max = function (...values) {
    console.debug("Max called with "+values);
    let tret = realMax(...values).valueOf();
    console.debug("Returning "+tret);
    return tret;
}

Math.sin = function (x) {
    console.debug("Sin called with "+x);
    let tret = realSin(x.valueOf()).valueOf();;
    console.debug("Returning "+tret);
    return tret;
}

Math.cos = function (x) {
    console.debug("Cos called with "+x);
    let tret = realCos(x.valueOf()).valueOf();
    console.debug("Returning "+tret);
    return tret;
}

setTimeout = function(...values) {
    if (values.length > 1){
        values[1] = values[1].valueOf();
    }
    console.log("SettingTimeout("+values);
    return realTimeout(...values);
}
setInterval = function(...values) {
    if (values.length > 1){
        values[1] = values[1].valueOf();
    }
    console.log("SettingInterval("+values);
    return realInterval(...values);
}
