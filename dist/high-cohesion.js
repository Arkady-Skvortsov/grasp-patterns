"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temp = exports.Date = void 0;
// [✅]
class dateTemp {
    constructor() { }
    temperatureDate() { }
}
class Date extends dateTemp {
    constructor() {
        super();
    }
    someMethod() {
        console.log("someMethod() for date");
    }
    someMethod2() { }
    temperatureDate() { }
}
exports.Date = Date;
class Temp extends dateTemp {
    constructor() {
        super();
    }
    diff() {
        console.log("Temp diff");
    }
    add() { }
    maxByDate() { }
    minByDate() { }
}
exports.Temp = Temp;
const date = new Date();
const temp = new Temp();
temp.diff();
date.someMethod();
// [❌]
class DateTemp {
    constructor() { }
    dateDiff() { }
    dateAdd() { }
    tempDiff() { }
    tempAdd() { }
    dateTemperatureByTime() { }
}
//# sourceMappingURL=high-cohesion.js.map