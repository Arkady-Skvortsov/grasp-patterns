import "reflect-metadata";
import { injectable } from "inversify";

// [✅]
@injectable()
class UsersController {
    constructor() {}

    public getAllUsers(): any {
        // Call service method, not working with Business logic here
    }
    public updateUser(dto: any, name: string): any {
        // Call service method, not working with Business logic here
    }
    public sendIventToFriends(dto: any, name: string): void {
        // Call service method, not working with Business logic here
    }
    public deleteUser(id: number): any {
        // Call service method, not working with Business logic here
    }
}

@injectable()
class InventarController {
    public updateInventar(dto: any) {
        // Call service method, not working with Business logic here
    }
}

@injectable()
class BooksController {
   public async getAllBooks() {
       // Call service method, not working with Business logic here
   }
   public async getBook() {
       // Call service method, not working with Business logic here
   }
   public async deleteBook() {
       // Call service method, not working with Business logic here
   }
}

// [❌]

@injectable()
class UsersService {
    constructor() {}
}

@injectable()
class InventarService {
    constructor() {}
}

@injectable()
class BooksService {
    constructor() {}
}

export { UsersController, InventarController, BooksController }