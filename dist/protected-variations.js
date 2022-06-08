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
exports.MYsql = exports.POstgres = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const mysql2_1 = require("mysql2");
const pg_1 = require("pg");
const types_1 = require("./di-container/types");
class MySQL {
    mysql;
    constructor() {
        this.mysql = (0, mysql2_1.createConnection)({});
    }
    async getAll(table) {
        try {
            return await this.mysql.query('SELECT * FROM $1', [table]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async get(table, id) {
        try {
            return await this.mysql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async create(table, dto) {
        try {
            return await this.mysql.query('INSERT INTO $1 (name, description, location) VALUES ()', []);
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(table, id, dto) {
        try {
            return await this.mysql.query('UPDATE $2 SET $3 = $4 WHERE id = $5 RETURNING *', []);
        }
        catch (e) {
            console.log(e);
        }
    }
    async delete(table, id) {
        try {
            return await this.mysql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
}
class PostgresQL {
    postgresql;
    constructor() {
        this.postgresql = new pg_1.Pool();
    }
    async getAll(table) {
        try {
            return this.postgresql.query('SELECT * FROM $1', [table]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async get(table, id) {
        try {
            return this.postgresql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async create(table, dto) {
        try {
            return await this.postgresql.query('INSERT INTO $1 (name, description, location) VALUES ($2, $3, $4)', [table, dto.name, dto.description, dto.location]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(table, id, dto) {
        try {
            return await this.postgresql.query('UPDATE $1 SET $2 = $3 WHERE id = $4 RETURNING *', [table, dto.title, dto.payload, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async delete(table, id) {
        try {
            return await this.postgresql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
}
class Repository {
    database;
    constructor(database) {
        this.database = database;
    }
    async getAll(table) {
        return this.database.getAll(table);
    }
    async get(table, id) {
        return this.database.get(table, id);
    }
    async create(table, dto) {
        return this.database.create(table, dto);
    }
    async update(table, id, dto) {
        return this.database.update(table, id, dto);
    }
    async delete(table, id) {
        return this.database.delete(table, id);
    }
}
const r = new Repository(new PostgresQL());
const r2 = new Repository(new MySQL());
r.create("users", { username: "Arkadiy", location: "FI", description: "What the hell are you doing with other peoples, maybe you poison ?" });
// [❌, 💩]
let repository = class repository {
    postgresql;
    mysql;
    constructor(postgresql, mysql) {
        this.postgresql = postgresql;
        this.mysql = mysql;
    }
    //some methods...
    async update(type, title, dto) {
        if (type === 'PostgresQL') {
            const obj = await this.postgresql.get(dto.title, dto.id);
            // Some code operations here...
        }
        if (type === 'MySQL') {
            const obj = await this.mysql.get(dto.title, dto.id);
            // Some code operations here....
        }
    }
};
repository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.PostgresQL)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.MySQL)),
    __metadata("design:paramtypes", [POstgres, MYsql])
], repository);
let POstgres = class POstgres {
    postgresql;
    constructor() {
        this.postgresql = new pg_1.Pool();
    }
    async getAll(table) {
        try {
            return this.postgresql.query('SELECT * FROM $1', [table]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async get(table, id) {
        try {
            return this.postgresql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async create(table, dto) {
        try {
            return await this.postgresql.query('INSERT INTO $1 (name, description, location) VALUES ($2, $3, $4)', [table, dto.name, dto.description, dto.location]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(table, id, dto) {
        try {
            return await this.postgresql.query('UPDATE $1 SET $2 = $3 WHERE id = $4 RETURNING *', [table, dto.title, dto.payload, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async delete(table, id) {
        try {
            return await this.postgresql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
};
POstgres = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], POstgres);
exports.POstgres = POstgres;
let MYsql = class MYsql {
    mysql;
    constructor() {
        this.mysql = (0, mysql2_1.createConnection)({});
    }
    async getAll(table) {
        try {
            return await this.mysql.query('SELECT * FROM $1', [table]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async get(table, id) {
        try {
            return await this.mysql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
    async create(table, dto) {
        try {
            return await this.mysql.query('INSERT INTO $1 (name, description, location) VALUES ()', []);
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(table, id, dto) {
        try {
            return await this.mysql.query('UPDATE $2 SET $3 = $4 WHERE id = $5 RETURNING *', []);
        }
        catch (e) {
            console.log(e);
        }
    }
    async delete(table, id) {
        try {
            return await this.mysql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        }
        catch (e) {
            console.log(e);
        }
    }
};
MYsql = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MYsql);
exports.MYsql = MYsql;
//# sourceMappingURL=protected-variations.js.map