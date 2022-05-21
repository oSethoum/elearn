"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const client_1 = require("@prisma/client");
const apollo_server_express_1 = require("apollo-server-express");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const path_1 = __importDefault(require("path"));
const resolvers_1 = require("./resolvers");
async function setup(app) {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [...type_graphql_2.resolvers, resolvers_1.FileResolver],
        emitSchemaFile: path_1.default.resolve(__dirname, "schema.graphql"),
        validate: false,
    });
    const prisma = new client_1.PrismaClient();
    await prisma.$connect();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: () => ({ prisma }),
    });
    await server.start();
    server.applyMiddleware({ app });
}
exports.setup = setup;
