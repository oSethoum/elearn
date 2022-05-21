"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const DBClient = {
    instance: new client_1.PrismaClient(),
};
Object.freeze(DBClient);
exports.default = DBClient.instance;
