"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const information_expert_1 = require("../information-expert");
const types_1 = require("./types");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.Product).to(information_expert_1.Product);
container.bind(types_1.TYPES.Check).to(information_expert_1.Check);
//# sourceMappingURL=container.js.map