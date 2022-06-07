import { inject, injectable } from "inversify";
import "reflect-metadata"
import { createConnection } from "mysql2";
import { Pool } from "pg";
import { TYPES } from "./di-container/types";

type databaseType = "PostgresQL" | "MySQL";

// [✅]
interface Database {
    getAll(table: string): Promise<any>;
    get(table: string, id: number): Promise<any>;
    create(table: string, dto: any): Promise<any>;
    update(table: string, id: number, dto: any): Promise<void>;
    delete(table: string, id: number): Promise<number>;
}

class MySQL implements Database {
    private mysql;

    constructor() {
        this.mysql = createConnection({});
    }

    public async getAll(table: string): Promise<any> {
        try {
            return await this.mysql.query('SELECT * FROM $1', [table]);
        } catch(e) {
            console.log(e);
        }
    }

    public async get(table: string, id: number): Promise<any> {
        try {
            return await this.mysql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async create(table: string, dto: any): Promise<any> {
        try {
            return await this.mysql.query('INSERT INTO $1 (name, description, location) VALUES ()', []);
        } catch(e) {
            console.log(e);
        }
    }

    public async update(table: string, id: number, dto: any): Promise<any> {
        try {
            return await this.mysql.query('UPDATE $2 SET $3 = $4 WHERE id = $5 RETURNING *', []);
        } catch(e) {
            console.log(e);
        }
    }

    public async delete(table: string, id: number): Promise<any> {
        try {
            return await this.mysql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }
}

class PostgresQL implements Database {
    private postgresql: Pool;

    constructor() {
        this.postgresql = new Pool();
    }

    public async getAll(table: string): Promise<any> {
        try {
            return this.postgresql.query('SELECT * FROM $1', [table]);
        } catch(e) {
            console.log(e);
        }
    }

    public async get(table: string, id: number): Promise<any> {
        try {
            return this.postgresql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async create(table: string, dto: any): Promise<any> {
        try {
            return await this.postgresql.query('INSERT INTO $1 (name, description, location) VALUES ($2, $3, $4)', [table, dto.name, dto.description, dto.location]);
        } catch(e) {
            console.log(e);
        }
    }

    public async update(table: string, id: number, dto: any): Promise<any> {
        try {
            return await this.postgresql.query('UPDATE $1 SET $2 = $3 WHERE id = $4 RETURNING *', [table, dto.title, dto.payload, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async delete(table: string, id: number): Promise<any> {
        try {
            return await this.postgresql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }
}

class Repository {
    constructor(private database: Database) {}

    public async getAll(table: string): Promise<any> {
        return this.database.getAll(table);
    }

    public async get(table: string, id: number): Promise<any> {
        return this.database.get(table, id);
    }

    public async create(table: string, dto: any): Promise<any> {
        return this.database.create(table, dto);
    }

    public async update(table: string, id: number, dto: any): Promise<any> {
        return this.database.update(table, id, dto);
    }

    public async delete(table: string, id: number): Promise<any> {
        return this.database.delete(table, id);
    }
}

const r = new Repository(new PostgresQL());
const r2 = new Repository(new MySQL());

r.create("users", {username: "Arkadiy", location: "FI", description: "What the hell are you doing with other peoples, maybe you poison ?"});

// [❌, 💩]
@injectable()
class repository {
    constructor(@inject(TYPES.PostgresQL) private postgresql: POstgres, @inject(TYPES.MySQL) private mysql: MYsql) {}

    //some methods...

    public async update(type: databaseType, title: string, dto: any) {
        if(type === 'PostgresQL') {
            const obj = await this.postgresql.get(dto.title, dto.id);

            // Some code operations here...
        }
        if(type === 'MySQL') {
            const obj = await this.mysql.get(dto.title, dto.id);

            // Some code operations here....
        }
    }
}

@injectable()
class POstgres {
    private postgresql: Pool;

    constructor() {
        this.postgresql = new Pool();
    }

    public async getAll(table: string): Promise<any> {
        try {
            return this.postgresql.query('SELECT * FROM $1', [table]);
        } catch(e) {
            console.log(e);
        }
    }

    public async get(table: string, id: number): Promise<any> {
        try {
            return this.postgresql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async create(table: string, dto: any): Promise<any> {
        try {
            return await this.postgresql.query('INSERT INTO $1 (name, description, location) VALUES ($2, $3, $4)', [table, dto.name, dto.description, dto.location]);
        } catch(e) {
            console.log(e);
        }
    }

    public async update(table: string, id: number, dto: any): Promise<any> {
        try {
            return await this.postgresql.query('UPDATE $1 SET $2 = $3 WHERE id = $4 RETURNING *', [table, dto.title, dto.payload, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async delete(table: string, id: number): Promise<any> {
        try {
            return await this.postgresql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }
}

@injectable()
class MYsql {
    private mysql;

    constructor() {
        this.mysql = createConnection({});
    }

    public async getAll(table: string): Promise<any> {
        try {
            return await this.mysql.query('SELECT * FROM $1', [table]);
        } catch(e) {
            console.log(e);
        }
    }

    public async get(table: string, id: number): Promise<any> {
        try {
            return await this.mysql.query('SELECT * FROM $1 WHERE id = $2', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }

    public async create(table: string, dto: any): Promise<any> {
        try {
            return await this.mysql.query('INSERT INTO $1 (name, description, location) VALUES ()', []);
        } catch(e) {
            console.log(e);
        }
    }

    public async update(table: string, id: number, dto: any): Promise<any> {
        try {
            return await this.mysql.query('UPDATE $2 SET $3 = $4 WHERE id = $5 RETURNING *', []);
        } catch(e) {
            console.log(e);
        }
    }

    public async delete(table: string, id: number): Promise<any> {
        try {
            return await this.mysql.query('DELETE FROM $1 WHERE id = $2 RETURNING id', [table, id]);
        } catch(e) {
            console.log(e);
        }
    }
}

export { POstgres, MYsql }