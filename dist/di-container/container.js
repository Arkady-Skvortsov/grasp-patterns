"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const controller_1 = require("../controller");
const information_expert_1 = require("../information-expert");
const types_1 = require("./types");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.Product).to(information_expert_1.Product);
container.bind(types_1.TYPES.Check).to(information_expert_1.Check);
container.bind(types_1.TYPES.UsersController).to(controller_1.UsersController);
container.bind(types_1.TYPES.BooksController).to(controller_1.BooksController);
container.bind(types_1.TYPES.InventarController).to(controller_1.InventarController);
container.bind(types_1.TYPES.KeyboardController).to(controller_1.KeyBoardController);
//# sourceMappingURL=container.js.map