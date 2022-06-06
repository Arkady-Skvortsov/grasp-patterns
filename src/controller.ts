import "reflect-metadata";
import { injectable } from "inversify";

// [✅]
@injectable()
class UsersController {
    constructor() {}

    public getAllUsers(): any {}
    public updateUser(dto: any, name: string): any {}
    public sendIventToFriends(dto: any, name: string): void {}
    public deleteUser(id: number): any {}
}

@injectable()
class InventarController {
    public updateInventar(dto: any) {}
}

@injectable()
class BooksController {
   public async getAllBooks() {}
   public async getBook() {}
   public async deleteBook() {}
}

@injectable()
class KeyBoardController {
   
   //Like in NestJS
   //@Post("/")
   //@Keyboard("Shift")
   public downloadFile(): boolean {
       return true;
   }
}

// [❌]

export { UsersController, InventarController, BooksController, KeyBoardController }