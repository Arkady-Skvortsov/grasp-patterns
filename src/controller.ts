import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "./di-container/types";

// [✅]
@injectable()
class UsersController {
    constructor(@inject(TYPES.usersService) private usersService: usersService) {}
    
    // GET /users
    public async getAllUsers(): Promise<any> {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.getAllUsers();
        } catch(e) {
            console.log(e);
        }
    }

    // PUT /user/:name
    public async updateUser(dto: any, name: string): Promise<any> {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.updateUser(dto, name);
        } catch(e) {
            console.log(e);
        }
    }

    // POST /user/:name/invite
    public async sendIventToFriends(dto: any, name: string): Promise<void> {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.sendIventToFriends(dto, name);
        } catch(e) {
            console.log(e);
        }
    }

    // DELETE /user/:name
    public async deleteUser(name: string): Promise<any> {
        // Call service method, not working with Business logic here
        try {
            return this.usersService.deleteUser(name);
        } catch(e) {
            console.log(e);
        }
    }
}

@injectable()
class usersService {
    constructor(@inject(TYPES.Repository) private repository: Repository) {}
    
    public async getAllUsers(): Promise<any> {
        return this.repository.getAllUsers();
    }

    public async updateUser(dto: any, name: string): Promise<any> {
        const upUser = await this.repository.updateUser(name, dto);

        //
    }

    public async sendIventToFriends(dto: any, name: string): Promise<any> {
        // Operations with other services and repository here
        const user = this.repository.getUser(name);
    }

    public async deleteUser(name: string): Promise<any> {
        return this.repository.deleteUser(name);
    }
}

@injectable()
class Repository {
    constructor() {}

    public async getAllUsers(): Promise<any> {}
    public async getUser(name: string): Promise<any> {}
    public async updateUser(dto: any, name: string): Promise<any> {}
    public async deleteUser(name: string): Promise<any> {}
}

// [❌, 💩]

@injectable()
class UsersService {
    constructor(@inject(TYPES.Repository) private repository: Repository) {}
    
    // GET /users
    public async getAllUsers(): Promise<any> {
       try {
           return this.repository.getAllUsers();
       } catch(e) {
           console.log(e);
       }
    }

    public async getUser(name: string): Promise<any> {
        try {
            return this.repository.getUser(name);
        } catch(e) {
            console.log(e);
        }
    }

    public async sendIventToFriends(dto: any, name: string): Promise<any> {
        try {
            const currentUser = await this.repository.getUser(name);

            // Some operations later.....
        } catch(e) {
            console.log(e);
        }
    }

    public async deleteUser(name: string): Promise<any> {
        try {
            return this.repository.deleteUser(name);
        } catch(e) {
            console.log(e);
        }
    }
}

export { UsersController, usersService }