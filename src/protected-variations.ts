import { inject, injectable } from "inversify";
import "reflect-metadata"
import { createClient } from 'redis';
import memoryCache, { Cache } from "memory-cache";
import { TYPES } from "./di-container/types";

type cacheType = "Redis" | "Memcached";

// [✅]
interface Cache {
    get(key: string): Promise<any>;
    add(key: string, value: string): Promise<void>;
    has(key: string): Promise<boolean>;
    del(key: string): Promise<void>;
}

class Redis implements Cache {
    private redis;

    constructor() {
        this.redis = createClient({});
    }

    public async get(key: string): Promise<any> {
        return this.redis.get(key);
    }
    public async add(key: string, value: string): Promise<void> {
        await this.redis.set(key, value);
    }
    public async has(key: string): Promise<boolean> {
        return await this.get(key) ? true : false;
    }
    public async del(key: string): Promise<void> {
        await this.redis.del(key);
    }
}

class Memcached implements Cache {
    private memcached;

    constructor() {
        this.memcached = new memoryCache.Cache();
    }

    public async get(key: string): Promise<any> {
        return this.memcached.get(key);
    }
    public async add(key: string, value: string): Promise<void> {
        await this.memcached.put(key, value);
    }
    public async has(key: string): Promise<boolean> {
        return await this.get(key) ? true : false;
    }
    public async del(key: string): Promise<void> {
        await this.memcached.del(key);
    }
}

class Repository {
    constructor(private cache: Cache) {}

    public async update() {}
}

const r = new Repository(new Redis());
const r2 = new Repository(new Memcached());

// [❌, 💩]
@injectable()
class repository {
    constructor(@inject(TYPES.Redis) private redis: REdis, @inject(TYPES.Memcached) private memcached: MEmcached) {}

    //some methods...

    public async update(type: cacheType, title: string, dto: any) {
        if(type === "Memcached") {
            const obj = await this.memcached.get(title);

            // Some code operations here...
        }
        if(type === "Redis") {
            const obj = await this.redis.get(title);

            // Some code operations here....
        }
    }
}

@injectable()
class REdis {
    private redis;

    constructor() {
        this.redis = createClient();
    }

    public async get(key: string): Promise<any> {
        return this.redis.get(key);
    }
    public async add(key: string, value: any): Promise<void> {
        await this.redis.set(key, value);
    }
    public async has(key: string): Promise<boolean> {
        return await this.get(key) ? true : false;
    }
    public async del(key: string): Promise<void> {
        await this.redis.del(key);
    }
}

@injectable()
class MEmcached {
    private memcached;

    constructor() {
        this.memcached = new memoryCache.Cache();
    }

    public async get(key: string): Promise<unknown> {
        return this.memcached.get(key);
    }
    public async add(key: string, value: any): Promise<void> {
        await this.memcached.put(key, value);
    }
    public async has(key: string): Promise<boolean> {
        return await this.get(key) ? true : false;
    }
    public async del(key: string): Promise<void> {
        await this.memcached.del(key);
    }
}

export { REdis, MEmcached }