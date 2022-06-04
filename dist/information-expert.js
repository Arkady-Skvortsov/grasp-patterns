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
exports.Product = exports.Calculator = exports.Check = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./di-container/types");
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
exports.Product = Product;
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
exports.Check = Check;
let Calculator = class Calculator {
    check;
    time;
    sale;
    constructor(check, time, sale) {
        this.check = check;
        this.time = time;
        this.sale = sale;
    }
    get getProductSumm() {
        let summ = 0;
        this.check.map((c) => summ = c.getProductPrice);
        return summ / 2;
    }
};
Calculator = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Check)),
    __metadata("design:paramtypes", [Array, String, Number])
], Calculator);
exports.Calculator = Calculator;
const product = new Product("Pen", 300);
const product2 = new Product("Watermelon", 200);
const check = new Check(product, 10);
const check2 = new Check(product2, 2);
const calculator = new Calculator([check, check2], "", 30);
console.log(check.getProductPrice, check2.getProductPrice);
//# sourceMappingURL=information-expert.js.map