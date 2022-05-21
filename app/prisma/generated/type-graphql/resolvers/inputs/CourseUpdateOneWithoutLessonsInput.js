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
exports.CourseUpdateOneWithoutLessonsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CourseCreateOrConnectWithoutLessonsInput_1 = require("../inputs/CourseCreateOrConnectWithoutLessonsInput");
const CourseCreateWithoutLessonsInput_1 = require("../inputs/CourseCreateWithoutLessonsInput");
const CourseUpdateWithoutLessonsInput_1 = require("../inputs/CourseUpdateWithoutLessonsInput");
const CourseUpsertWithoutLessonsInput_1 = require("../inputs/CourseUpsertWithoutLessonsInput");
const CourseWhereUniqueInput_1 = require("../inputs/CourseWhereUniqueInput");
let CourseUpdateOneWithoutLessonsInput = class CourseUpdateOneWithoutLessonsInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => CourseCreateWithoutLessonsInput_1.CourseCreateWithoutLessonsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutLessonsInput_1.CourseCreateOrConnectWithoutLessonsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseUpsertWithoutLessonsInput_1.CourseUpsertWithoutLessonsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseWhereUniqueInput_1.CourseWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseUpdateWithoutLessonsInput_1.CourseUpdateWithoutLessonsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateOneWithoutLessonsInput.prototype, "update", void 0);
CourseUpdateOneWithoutLessonsInput = __decorate([
    TypeGraphQL.InputType("CourseUpdateOneWithoutLessonsInput", {
        isAbstract: true
    })
], CourseUpdateOneWithoutLessonsInput);
exports.CourseUpdateOneWithoutLessonsInput = CourseUpdateOneWithoutLessonsInput;
