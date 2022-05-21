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
exports.UserUpdateWithoutTeacherInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminUpdateOneWithoutUserInput_1 = require("../inputs/AdminUpdateOneWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const StudentUpdateOneWithoutUserInput_1 = require("../inputs/StudentUpdateOneWithoutUserInput");
let UserUpdateWithoutTeacherInput = class UserUpdateWithoutTeacherInput {
    username;
    email;
    password;
    role;
    disabled;
    createdAt;
    updatedAt;
    admin;
    student;
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "disabled", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminUpdateOneWithoutUserInput_1.AdminUpdateOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "admin", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneWithoutUserInput_1.StudentUpdateOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutTeacherInput.prototype, "student", void 0);
UserUpdateWithoutTeacherInput = __decorate([
    TypeGraphQL.InputType("UserUpdateWithoutTeacherInput", {
        isAbstract: true
    })
], UserUpdateWithoutTeacherInput);
exports.UserUpdateWithoutTeacherInput = UserUpdateWithoutTeacherInput;
