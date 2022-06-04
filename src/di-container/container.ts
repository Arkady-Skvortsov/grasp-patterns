import { Container } from 'inversify';
import 'reflect-metadata';
import { Check, Product } from '../information-expert';
import { TYPES } from './types';

const container = new Container();

container.bind<Product>(TYPES.Product).to(Product);
container.bind<Check>(TYPES.Check).to(Check);

export { container };