import { inject, injectable } from "inversify";
import { TYPES } from "./di-container/types";

interface IBook {
    title: string;
    pages: number;
    author: string;
}

// [✅]
class Book {
    private title: string;
    private pages: number;
    private author: string;

    constructor(book: IBook) {
        this.title = book.title;
        this.pages = book.pages;
        this.author = book.author;
    }

    get getTitle(): string {
        return this.title;
    }

    get getPages(): number {
        return this.pages
    }

    get getAuthor(): string {
        return this.author;
    }
}

@injectable()
class BooksService {
  constructor(@inject(TYPES.Repository) private repository: Repository) {}

  public async getBooks(): Promise<IBook[]> {
    return this.repository.getBooks();
  }
  public getBook(id: number): Promise<IBook> {
    return this.repository.getBook(id);
  }
  public createBook(dto: IBook): Promise<IBook> {
    return this.repository.createBook(dto);
  }
  public updateBook(id: number, dto: IBook): Promise<IBook> {
    return this.repository.updateBook(id, dto);
  }
  public deleteBook(id: number): Promise<number> {
    return this.repository.deleteBook(id);
  }
}

@injectable()
class Repository {
    constructor() {}

    public async getBooks(): Promise<IBook[]> {
        try {
          
        } catch(e) {
            console.log(e);
        }
    };
    public getBook(id: number): Promise<IBook> {
        try {

        } catch(e) {
            console.log(e);
        }
    }
    public createBook(dto: IBook): Promise<IBook> {}
    public updateBook(id: number, dto: IBook): Promise<IBook> {}
    public deleteBook(id: number): Promise<number> {}
}

// [❌]
// class book {
//     private title: string;
//     private pages: number;
//     private author: string;

//     constructor(book: IBook) {
//         this.title = book.title;
//         this.pages = book.pages;
//         this.author = book.author;
//     }

//     get getTitle(): string {
//         return this.title;
//     }

//     get getPages(): number {
//         return this.pages
//     }

//     get getAuthor(): string {
//         return this.author;
//     }

//     public getBooks(): Promise<IBook[]> {}

//     public getBook(): Promise<IBook> {}

//     public createBook(): Promise<IBook> {}

//     public updateBook(): Promise<IBook> {}

//     public deleteBook(): Promise<IBook> {}
// }

export { Repository }