import { Container } from 'inversify';
import 'reflect-metadata';
import { BooksController, InventarController, UsersController } from '../controller';
import { check, product } from '../creator';
import { MEmcached, REdis } from '../indirection';
import { CHeck, Check, PRoduct, Product } from '../information-expert';
import { MYsql, POstgres } from '../protected-variations';
import { Repository } from '../pure-fabrication';
import { TYPES } from './types';

const container = new Container();

container.bind<Product>(TYPES.Product).to(Product);
container.bind<Check>(TYPES.Check).to(Check);
container.bind<PRoduct>(TYPES.PRoduct).to(PRoduct);
container.bind<CHeck>(TYPES.CHeck).to(CHeck);
container.bind<check>(TYPES.check).to(check);
container.bind<product>(TYPES.product).to(product);
container.bind<UsersController>(TYPES.UsersController).to(UsersController);
container.bind<BooksController>(TYPES.BooksController).to(BooksController);
container.bind<InventarController>(TYPES.InventarController).to(InventarController);
container.bind<Repository>(TYPES.Repository).to(Repository);
container.bind<REdis>(TYPES.Redis).to(REdis);
container.bind<MEmcached>(TYPES.Memcached).to(MEmcached);
container.bind<POstgres>(TYPES.PostgresQL).to(POstgres);
container.bind<MYsql>(TYPES.MySQL).to(MYsql);

export { container };