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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
__exportStar(require("./auth"), exports);
const middleware_1 = require("../middleware");
const auth_1 = require("./auth");
function setup(app) {
    app.post("/api/login", auth_1.login);
    app.post("/api/register", auth_1.register);
    app.post("/api/refresh", auth_1.refresh);
    app.post("/api/update-user", auth_1.updateUser);
    app.post("/api/logout", middleware_1.tokenAuth, auth_1.logout);
}
exports.setup = setup;
