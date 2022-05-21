"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = exports.updateUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const db_1 = __importDefault(require("../db"));
const updateUser = async (req, res) => {
    const body = req.body;
    const user = await db_1.default.user.findUnique({
        where: { id: body.id },
    });
    if (user?.password != "" || user?.password === body.password) {
        const updatePersonal = {
            update: {
                firstName: { set: body.firstName },
                lastName: { set: body.lastName },
            },
        };
        const updatePassword = body?.password != ""
            ? {
                password: body?.newPassword,
            }
            : {};
        const result = await db_1.default.user.update({
            where: { id: body.id },
            data: {
                username: { set: body.username },
                email: { set: body.email },
                teacher: user?.role === "teacher" ? updatePersonal : undefined,
                student: user?.role === "student" ? updatePersonal : undefined,
                admin: user?.role === "admin" ? updatePersonal : undefined,
                ...updatePassword,
            },
        });
        const { password, ...others } = result;
        return res.status(200).json(others);
    }
    else {
        // password does not match
        return res.status(400).json({
            error: "Password does not match",
        });
    }
};
exports.updateUser = updateUser;
const register = async (req, res) => {
    const { topic, year, firstName, lastName, role, password, ...others } = req.body;
    if (role != "student" && role != "teacher") {
        return res.status(400).json({
            message: "Invalid role",
        });
    }
    const user = await db_1.default.user.create({
        data: {
            disabled: true,
            role,
            ...others,
        },
    });
    if (role === "student") {
        const student = await db_1.default.student.create({
            data: {
                firstName,
                lastName,
                year: parseInt(year),
                topicId: parseInt(topic),
                userId: user.id,
            },
        });
        if (!student) {
            return res.status(400).send();
        }
    }
    else {
        const teacher = await db_1.default.teacher.create({
            data: {
                firstName,
                lastName,
                userId: user.id,
            },
        });
        if (!teacher) {
            return res.status(400).json({
                message: "Failed to create teacher",
            });
        }
    }
    return res.status(201).json({
        message: "created",
    });
};
exports.register = register;
const login = async (req, res) => {
    const user = await db_1.default.user.findFirst({
        where: {
            AND: [
                {
                    email: {
                        equals: req.body.email,
                    },
                },
                {
                    password: {
                        equals: req.body.password,
                    },
                },
            ],
        },
        include: {
            admin: true,
            student: {
                include: {
                    topic: true,
                },
            },
            teacher: true,
        },
    });
    if (!user) {
        return res.status(404).json({
            message: "Invalid credentials",
        });
    }
    else if (user.disabled) {
        return res.status(401).json({
            message: "Account disabled",
        });
    }
    const token = (0, jsonwebtoken_1.sign)({ userId: user?.id }, "secret", {
        expiresIn: 3600 * 24 * 7,
    });
    const date = new Date();
    date.setDate(date.getDate() + 7);
    res.cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        expires: req.body.rememberMe ? date : undefined,
    });
    const { password, ...payload } = user;
    return res.status(200).json({
        ...payload,
    });
};
exports.login = login;
const refresh = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({
            message: "No token provided",
        });
    }
    const { userId } = (0, jsonwebtoken_1.verify)(token, "secret");
    const user = await db_1.default.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            admin: true,
            student: {
                include: {
                    topic: true,
                },
            },
            teacher: true,
        },
    });
    if (!user) {
        return res.status(404).json({
            message: "Invalid credentials",
        });
    }
    else if (user.disabled) {
        return res.status(401).json({
            message: "Account disabled",
        });
    }
    const { password, ...payload } = user;
    return res.status(200).json({
        ...payload,
    });
};
exports.refresh = refresh;
const logout = (_, res) => {
    res.clearCookie("access_token").status(200).end();
};
exports.logout = logout;
