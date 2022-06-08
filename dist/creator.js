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
exports.check = exports.product = exports.Product = exports.Calculator = exports.Check = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./di-container/types");
// [✅]
class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
}
exports.Product = Product;
class Check {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    getProductPrice(title, price) {
        return this.getProduct(title, price).getPrice * this.amount;
    }
    getProduct(title, price) {
        return new Product(title, price);
    }
}
exports.Check = Check;
class Calculator {
    discount;
    constructor(discount) {
        this.discount = discount / 100;
    }
    getProductSumm(amount, title, price) {
        return this.createCheck(amount).getProductPrice(title, price) - (this.createCheck(amount).getProductPrice(title, price) * this.discount);
    }
    createCheck(amount) {
        return new Check(amount);
    }
}
exports.Calculator = Calculator;
const calculator = new Calculator(45);
console.log(calculator.getProductSumm(2, "Cola", 200).toFixed(2)); // 220
console.log(calculator.getProductSumm(2, "Big Tasty", 200).toFixed(2)); // 220
console.log(calculator.getProductSumm(20, "Chicken-mac-nagets", 50).toFixed(2)); // 550
// [❌, 💩]
let product = class product {
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
product = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [String, Number])
], product);
exports.product = product;
let check = class check {
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
check = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Product)),
    __metadata("design:paramtypes", [product, Number])
], check);
exports.check = check;
let CALculator = class CALculator {
    check;
    discount;
    constructor(check, discount) {
        this.check = check;
        this.discount = discount / 100;
    }
    get getProductSumm() {
        return this.check.getProductPrice - (this.check.getProductPrice * this.discount);
    }
};
CALculator = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Check)),
    __metadata("design:paramtypes", [check, Number])
], CALculator);
const cAlculator = new CALculator(new check(new product("Big Tasty", 200), 2), 45);
console.log(cAlculator.getProductSumm.toFixed(2)); // 220
//# sourceMappingURL=creator.js.map