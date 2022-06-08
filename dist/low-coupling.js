"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./di-container/types");
// [✅]
let Product = class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
};
Product = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [String, Number])
], Product);
let Check = class Check {
    product;
    amount;
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
    get getProductPrice() {
        return this.product.getPrice * this.amount;
    }
};
Check = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Product)),
    __metadata("design:paramtypes", [Product, Number])
], Check);
let Calculator = class Calculator {
    check;
    discount;
    constructor(check, discount) {
        this.check = check;
        this.discount = discount / 100;
    }
    get getProductSumm() {
        let summ = 0;
        this.check.map((c) => summ = c.getProductPrice);
        return summ / this.discount;
    }
};
Calculator = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Check)),
    __metadata("design:paramtypes", [Array, Number])
], Calculator);
const product = new Product("Pen", 300);
const check = new Check(product, 10);
const calculator = new Calculator([check], 30);
console.log(check.getProductPrice); // 3000
console.log(calculator.getProductSumm); // 400
// [❌, 💩]
let PRoduct = class PRoduct {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
};
PRoduct = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [String, Number])
], PRoduct);
let CHeck = class CHeck {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    get getAmount() {
        return this.amount;
    }
};
CHeck = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [Number])
], CHeck);
let CAlculator = class CAlculator {
    product;
    check;
    disc;
    discount;
    constructor(product, check, disc) {
        this.product = product;
        this.check = check;
        this.disc = disc;
        this.discount = disc;
    }
    get getProductPrice() {
        return this.product.getPrice * this.check.getAmount;
    }
    get getProductSumm() {
        return this.getProductPrice / this.discount;
    }
};
CAlculator = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.PRoduct)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.CHeck)),
    __metadata("design:paramtypes", [PRoduct, CHeck, Number])
], CAlculator);
const Clculator = new CAlculator(new PRoduct("milk", 200), new CHeck(200), 20);
console.log(Clculator.getProductSumm);
//# sourceMappingURL=low-coupling.js.map