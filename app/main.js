"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const path_1 = require("path");
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const graphql = __importStar(require("./src/graphql"));
const routes = __importStar(require("./src/routes"));
const public_1 = require("./src/routes/public");
const graphql_upload_1 = require("graphql-upload");
async function main() {
    const app = (0, express_1.default)();
    // middleware
    app.use((0, morgan_1.default)("dev"));
    app.use((0, express_1.json)({ limit: "50mb" }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, graphql_upload_1.graphqlUploadExpress)());
    (0, public_1.publicRoutes)(app);
    routes.setup(app);
    await graphql.setup(app);
    app.use(express_1.default.static("public"));
    app.get("*", (req, res) => {
        res.sendFile((0, path_1.join)(__dirname, "public", "index.html"));
    });
    const port = 3001;
    app.listen({ port }, () => console.log(`server is listening on ${port}/!`));
}
main().catch(console.error);
