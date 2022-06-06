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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyBoardController = exports.BooksController = exports.InventarController = exports.UsersController = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
// [✅]
let UsersController = class UsersController {
    constructor() { }
    getAllUsers() { }
    updateUser(dto, name) { }
    sendIventToFriends(dto, name) { }
    deleteUser(id) { }
};
UsersController = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], UsersController);
exports.UsersController = UsersController;
let InventarController = class InventarController {
    updateInventar(dto) { }
};
InventarController = __decorate([
    (0, inversify_1.injectable)()
], InventarController);
exports.InventarController = InventarController;
let BooksController = class BooksController {
    async getAllBooks() { }
    async getBook() { }
    async deleteBook() { }
};
BooksController = __decorate([
    (0, inversify_1.injectable)()
], BooksController);
exports.BooksController = BooksController;
let KeyBoardController = class KeyBoardController {
    //Like in NestJS
    //@Post("/")
    //@Keyboard("Shift")
    downloadFile() {
        return true;
    }
};
KeyBoardController = __decorate([
    (0, inversify_1.injectable)()
], KeyBoardController);
exports.KeyBoardController = KeyBoardController;
//# sourceMappingURL=controller.js.map