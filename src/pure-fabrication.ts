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

    public async getBooks(): Promise<any> {}
    public async getBook(id: number): Promise<any> {}
    public async createBook(dto: IBook): Promise<any> {}
    public async updateBook(id: number, dto: IBook): Promise<any> {}
    public async deleteBook(id: number): Promise<any> {}
}

// // [❌, 💩 * 2^3]
class book {
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

    public async getBooks(): Promise<any> {}
    public async getBook(): Promise<any> {}
    public async createBook(): Promise<any> {}
    public async updateBook(): Promise<any> {}
    public async deleteBook(): Promise<any> {}
}

export { Repository }