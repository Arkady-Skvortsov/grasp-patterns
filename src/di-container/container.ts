import { Container } from 'inversify';
import 'reflect-metadata';
import { BooksController, InventarController, UsersController } from '../controller';
import { MEmcached, REdis } from '../indirection';
import { Check, Product } from '../information-expert';
import { Repository } from '../pure-fabrication';
import { TYPES } from './types';

const container = new Container();

container.bind<Product>(TYPES.Product).to(Product);
container.bind<Check>(TYPES.Check).to(Check);
container.bind<UsersController>(TYPES.UsersController).to(UsersController);
container.bind<BooksController>(TYPES.BooksController).to(BooksController);
container.bind<InventarController>(TYPES.InventarController).to(InventarController);
container.bind<Repository>(TYPES.Repository).to(Repository);
container.bind<REdis>(TYPES.Redis).to(REdis);
container.bind<MEmcached>(TYPES.Memcached).to(MEmcached);

export { container };