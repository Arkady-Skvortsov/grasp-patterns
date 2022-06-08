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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEmcached = exports.REdis = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const redis_1 = require("redis");
const memory_cache_1 = __importDefault(require("memory-cache"));
const types_1 = require("./di-container/types");
class Redis {
    redis;
    constructor() {
        this.redis = (0, redis_1.createClient)({});
    }
    async get(key) {
        return this.redis.get(key);
    }
    async add(key, value) {
        await this.redis.set(key, value);
    }
    async has(key) {
        return await this.get(key) ? true : false;
    }
    async del(key) {
        await this.redis.del(key);
    }
}
class Memcached {
    memcached;
    constructor() {
        this.memcached = new memory_cache_1.default.Cache();
    }
    async get(key) {
        return this.memcached.get(key);
    }
    async add(key, value) {
        await this.memcached.put(key, value);
    }
    async has(key) {
        return await this.get(key) ? true : false;
    }
    async del(key) {
        await this.memcached.del(key);
    }
}
class Repository {
    cache;
    constructor(cache) {
        this.cache = cache;
    }
    async update() { }
}
const r = new Repository(new Redis());
const r2 = new Repository(new Memcached());
// [❌, 💩]
let repository = class repository {
    redis;
    memcached;
    constructor(redis, memcached) {
        this.redis = redis;
        this.memcached = memcached;
    }
    //some methods...
    async update(type, title, dto) {
        if (type === "Memcached") {
            const obj = await this.memcached.get(title);
            // Some code operations here...
        }
        if (type === "Redis") {
            const obj = await this.redis.get(title);
            // Some code operations here....
        }
    }
};
repository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Redis)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.Memcached)),
    __metadata("design:paramtypes", [REdis, MEmcached])
], repository);
let REdis = class REdis {
    redis;
    constructor() {
        this.redis = (0, redis_1.createClient)();
    }
    async get(key) {
        return this.redis.get(key);
    }
    async add(key, value) {
        await this.redis.set(key, value);
    }
    async has(key) {
        return await this.get(key) ? true : false;
    }
    async del(key) {
        await this.redis.del(key);
    }
};
REdis = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], REdis);
exports.REdis = REdis;
let MEmcached = class MEmcached {
    memcached;
    constructor() {
        this.memcached = new memory_cache_1.default.Cache();
    }
    async get(key) {
        return this.memcached.get(key);
    }
    async add(key, value) {
        await this.memcached.put(key, value);
    }
    async has(key) {
        return await this.get(key) ? true : false;
    }
    async del(key) {
        await this.memcached.del(key);
    }
};
MEmcached = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MEmcached);
exports.MEmcached = MEmcached;
//# sourceMappingURL=indirection.js.map