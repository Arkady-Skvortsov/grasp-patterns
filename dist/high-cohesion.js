"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = exports.Temp = void 0;
// [✅]
class dateTemp {
    constructor() { }
    temperatureDate() { }
}
class Date extends dateTemp {
    constructor() {
        super();
    }
    diff() {
        console.log("someMethod() for date");
    }
    add() { }
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
    temperatureDate() { }
}
exports.Temp = Temp;
const date = new Date();
const temp = new Temp();
temp.diff();
date.diff();
// [❌, 💩]
class DateTemp {
    constructor() { }
    dateDiff() { }
    dateAdd() { }
    tempDiff() { }
    tempAdd() { }
    dateTemperatureByTime() { }
}
//# sourceMappingURL=high-cohesion.js.map