import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "./di-container/types";

// [✅]
@injectable()
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

@injectable()
class Check {
    private amount: number;
    
    constructor(amount: number) {
        this.amount = amount;
    }
    
    public get getProductPrice(): number {
        return this.product.getPrice * this.amount;
    }
}

@injectable()
class Calculator {
    private discount: number;

    constructor(discount: number) {
        this.discount = discount / 100;
    }

    public get getProductSumm(): number {
        let summ: number = 0;

        this.createCheck.map((c) => summ = c.getProductPrice)

        return summ / (this.discount * 2);
    }

    private createCheck(amount: number) {
        return [new Check(amount)];
    }
}

// const calculator = new Calculator([new Check(new Product("Pen", 300), 10)], 30);

// console.log(calculator.getProductSumm); // 400

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
    
    constructor(@inject(TYPES.Product) private product: Product, amount: number) {
        this.amount = amount;
    }
    
    public get getProductPrice(): number {
        return this.product.getPrice * this.amount;
    }
}

@injectable()
class CAlculator {
    private discount: number;

    constructor(@inject(TYPES.Check) private check: Check[], discount: number) {
        this.discount = discount / 100;
    }

    public get getProductSumm(): number {
        let summ: number = 0;

        this.check.map((c) => summ = c.getProductPrice)

        return summ / (this.discount * 2);
    }
}

const cAlculator = new Calculator([new Check(new Product("Pen", 300), 10)], 30);

console.log(cAlculator.getProductSumm);

export { Check, Calculator, Product }