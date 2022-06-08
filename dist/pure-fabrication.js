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
exports.Repository = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./di-container/types");
// [✅]
class Book {
    title;
    pages;
    author;
    constructor(book) {
        this.title = book.title;
        this.pages = book.pages;
        this.author = book.author;
    }
    get getTitle() {
        return this.title;
    }
    get getPages() {
        return this.pages;
    }
    get getAuthor() {
        return this.author;
    }
}
let BooksService = class BooksService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getBooks() {
        return this.repository.getBooks();
    }
    getBook(id) {
        return this.repository.getBook(id);
    }
    createBook(dto) {
        return this.repository.createBook(dto);
    }
    updateBook(id, dto) {
        return this.repository.updateBook(id, dto);
    }
    deleteBook(id) {
        return this.repository.deleteBook(id);
    }
};
BooksService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Repository)),
    __metadata("design:paramtypes", [Repository])
], BooksService);
let Repository = class Repository {
    constructor() { }
    async getBooks() { }
    async getBook(id) { }
    async createBook(dto) { }
    async updateBook(id, dto) { }
    async deleteBook(id) { }
};
Repository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Repository);
exports.Repository = Repository;
// // [❌, 💩 * 2^3]
class book {
    title;
    pages;
    author;
    constructor(book) {
        this.title = book.title;
        this.pages = book.pages;
        this.author = book.author;
    }
    get getTitle() {
        return this.title;
    }
    get getPages() {
        return this.pages;
    }
    get getAuthor() {
        return this.author;
    }
    async getBooks() { }
    async getBook() { }
    async createBook() { }
    async updateBook() { }
    async deleteBook() { }
}
//# sourceMappingURL=pure-fabrication.js.map