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
exports.usersService = exports.UsersController = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./di-container/types");
// [✅]
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    // GET /users
    async getAllUsers() {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.getAllUsers();
        }
        catch (e) {
            console.log(e);
        }
    }
    // PUT /user/:name
    async updateUser(dto, name) {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.updateUser(dto, name);
        }
        catch (e) {
            console.log(e);
        }
    }
    // POST /user/:name/invite
    async sendIventToFriends(dto, name) {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.sendIventToFriends(dto, name);
        }
        catch (e) {
            console.log(e);
        }
    }
    // DELETE /user/:name
    async deleteUser(name) {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.deleteUser(name);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UsersController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.usersService)),
    __metadata("design:paramtypes", [usersService])
], UsersController);
exports.UsersController = UsersController;
let usersService = class usersService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getAllUsers() {
        return this.repository.getAllUsers();
    }
    async updateUser(dto, name) {
        const upUser = await this.repository.updateUser(name, dto);
        //
    }
    async sendIventToFriends(dto, name) {
        // Operations with other services and repository here
        const user = this.repository.getUser(name);
    }
    async deleteUser(name) {
        return this.repository.deleteUser(name);
    }
};
usersService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Repository)),
    __metadata("design:paramtypes", [Repository])
], usersService);
exports.usersService = usersService;
let Repository = class Repository {
    constructor() { }
    async getAllUsers() { }
    async getUser(name) { }
    async updateUser(dto, name) { }
    async deleteUser(name) { }
};
Repository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Repository);
// [❌, 💩]
let UsersService = class UsersService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    // GET /users
    async getAllUsers() {
        try {
            return this.repository.getAllUsers();
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUser(name) {
        try {
            return this.repository.getUser(name);
        }
        catch (e) {
            console.log(e);
        }
    }
    async sendIventToFriends(dto, name) {
        try {
            const currentUser = await this.repository.getUser(name);
            // Some operations later.....
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteUser(name) {
        try {
            return this.repository.deleteUser(name);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UsersService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Repository)),
    __metadata("design:paramtypes", [Repository])
], UsersService);
//# sourceMappingURL=controller.js.map