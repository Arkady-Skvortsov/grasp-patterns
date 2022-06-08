import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "./di-container/types";

// [✅]
class Product {
    private title: string;
    private price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    public get getPrice(): number {
        return this.price;
    }
}

class Check {
    private amount: number;
    
    constructor(amount: number) {
        this.amount = amount;
    }
    
    public getProductPrice(title: string, price: number): number {
        return this.getProduct(title, price).getPrice * this.amount;
    }
    
    private getProduct(title: string, price: number): Product {
        return new Product(title, price);
    }
}

class Calculator {
    private discount: number;

    constructor(discount: number) {
        this.discount = discount / 100;
    }

    public getProductSumm(amount: number, title: string, price: number): number {
        return this.createCheck(amount).getProductPrice(title, price) - (this.createCheck(amount).getProductPrice(title, price) * this.discount);
    }

    private createCheck(amount: number): Check {
        return new Check(amount);
    }
}

const calculator = new Calculator(45);

console.log(calculator.getProductSumm(2, "Cola", 200).toFixed(2)); // 220
console.log(calculator.getProductSumm(2, "Big Tasty", 200).toFixed(2)); // 220
console.log(calculator.getProductSumm(20, "Chicken-mac-nagets", 50).toFixed(2)); // 550

// [❌, 💩]

@injectable()
class product {
    private title: string;
    private price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    public get getPrice(): number {
        return this.price;
    }
}

@injectable()
class check {
    private amount: number;
    
    constructor(@inject(TYPES.Product) private product: product, amount: number) {
        this.amount = amount;
    }
    
    public get getProductPrice(): number {
        return this.product.getPrice * this.amount;
    }
}

@injectable()
class CALculator {
    private discount: number;

    constructor(@inject(TYPES.Check) private check: check, discount: number) { 
        this.discount = discount / 100;
    }

    public get getProductSumm(): number {
        return  this.check.getProductPrice - (this.check.getProductPrice  * this.discount);
    }
}

const cAlculator = new CALculator(new check(new product("Big Tasty", 200), 2), 45);

console.log(cAlculator.getProductSumm.toFixed(2)); // 220

export { Check, Calculator, Product, product, check }