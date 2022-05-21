"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = void 0;
const db_1 = __importDefault(require("../db"));
const publicRoutes = (app) => {
    app.get("/api/topics", (req, res) => {
        db_1.default.topic
            .findMany({
            include: {
                department: {
                    select: {
                        name: true,
                    },
                },
            },
        })
            .then((topics) => {
            res.json(topics);
        });
    });
    app.get("/api/departments", (_, res) => {
        db_1.default.department
            .findMany({
            include: {
                topics: true,
            },
        })
            .then((departments) => {
            res.json(departments);
        });
    });
    app.get("/api/topics/:id", (req, res) => {
        const id = req.params.id;
        db_1.default.topic
            .findUnique({
            where: {
                id: Number(id),
            },
            include: {
                department: {
                    select: {
                        name: true,
                    },
                },
            },
        })
            .then((topic) => {
            res.json(topic);
        });
    });
};
exports.publicRoutes = publicRoutes;
