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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutStudentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminCreateNestedOneWithoutUserInput_1 = require("../inputs/AdminCreateNestedOneWithoutUserInput");
const TeacherCreateNestedOneWithoutUserInput_1 = require("../inputs/TeacherCreateNestedOneWithoutUserInput");
let UserCreateWithoutStudentInput = class UserCreateWithoutStudentInput {
    username;
    email;
    password;
    role;
    disabled;
    createdAt;
    updatedAt;
    teacher;
    admin;
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutStudentInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutStudentInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutStudentInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutStudentInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], UserCreateWithoutStudentInput.prototype, "disabled", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutStudentInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutStudentInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutUserInput_1.TeacherCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutStudentInput.prototype, "teacher", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutUserInput_1.AdminCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutStudentInput.prototype, "admin", void 0);
UserCreateWithoutStudentInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutStudentInput", {
        isAbstract: true
    })
], UserCreateWithoutStudentInput);
exports.UserCreateWithoutStudentInput = UserCreateWithoutStudentInput;
