"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const tokenAuth = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, "secret");
        // @ts-ignore
        req.payload = payload;
        return next();
    }
    catch {
        return res.sendStatus(403).json({ message: "Invalid token" });
    }
};
exports.tokenAuth = tokenAuth;
