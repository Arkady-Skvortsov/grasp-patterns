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
    
    constructor(@inject(TYPES.Product) private product: Product, amount: number) {
        this.amount = amount;
    }
    
    public get getProductPrice(): number {
        return this.product.getPrice * this.amount;
    }
}

@injectable()
class Calculator {
    private discount: number;

    constructor(@inject(TYPES.Check) private check: Check[], discount: number) {
        this.discount = discount / 100;
    }

    public get getProductSumm(): number {
        let summ: number = 0;

        this.check.map((c) => summ = c.getProductPrice)

        return summ / this.discount;
    }
}

const product = new Product("Pen", 300);
const check = new Check(product, 10);
const calculator = new Calculator([check], 30);

console.log(check.getProductPrice); // 3000

console.log(calculator.getProductSumm); // 400

// [❌, 💩]
@injectable()
class PRoduct {
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
class CHeck {
    private amount: number;
    
    constructor(amount: number) {
        this.amount = amount;
    }
    
    public get getAmount(): number {
        return this.amount;
    }
}

@injectable()
class CAlculator {
    private discount: number;

    constructor(@inject(TYPES.PRoduct) private product: PRoduct, @inject(TYPES.CHeck) private check: CHeck, private disc: number) {
        this.discount = disc;
    }

    public get getProductPrice(): number {
        return this.product.getPrice * this.check.getAmount;
    }

    public get getProductSumm(): number {
        return this.getProductPrice / this.discount;
    }
}

const Clculator = new CAlculator(new PRoduct("milk", 200), new CHeck(200), 20);

console.log(Clculator.getProductSumm);

export { Check, Calculator, Product, PRoduct, CHeck }