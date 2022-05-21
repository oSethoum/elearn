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
exports.CourseUpdateManyWithoutTeacherInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CourseCreateOrConnectWithoutTeacherInput_1 = require("../inputs/CourseCreateOrConnectWithoutTeacherInput");
const CourseCreateWithoutTeacherInput_1 = require("../inputs/CourseCreateWithoutTeacherInput");
const CourseScalarWhereInput_1 = require("../inputs/CourseScalarWhereInput");
const CourseUpdateManyWithWhereWithoutTeacherInput_1 = require("../inputs/CourseUpdateManyWithWhereWithoutTeacherInput");
const CourseUpdateWithWhereUniqueWithoutTeacherInput_1 = require("../inputs/CourseUpdateWithWhereUniqueWithoutTeacherInput");
const CourseUpsertWithWhereUniqueWithoutTeacherInput_1 = require("../inputs/CourseUpsertWithWhereUniqueWithoutTeacherInput");
const CourseWhereUniqueInput_1 = require("../inputs/CourseWhereUniqueInput");
let CourseUpdateManyWithoutTeacherInput = class CourseUpdateManyWithoutTeacherInput {
    create;
    connectOrCreate;
    upsert;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
__decorate([
    TypeGraphQL.Field(_type => [CourseCreateWithoutTeacherInput_1.CourseCreateWithoutTeacherInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutTeacherInput_1.CourseCreateOrConnectWithoutTeacherInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseUpsertWithWhereUniqueWithoutTeacherInput_1.CourseUpsertWithWhereUniqueWithoutTeacherInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereUniqueInput_1.CourseWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereUniqueInput_1.CourseWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereUniqueInput_1.CourseWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereUniqueInput_1.CourseWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseUpdateWithWhereUniqueWithoutTeacherInput_1.CourseUpdateWithWhereUniqueWithoutTeacherInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseUpdateManyWithWhereWithoutTeacherInput_1.CourseUpdateManyWithWhereWithoutTeacherInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseScalarWhereInput_1.CourseScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateManyWithoutTeacherInput.prototype, "deleteMany", void 0);
CourseUpdateManyWithoutTeacherInput = __decorate([
    TypeGraphQL.InputType("CourseUpdateManyWithoutTeacherInput", {
        isAbstract: true
    })
], CourseUpdateManyWithoutTeacherInput);
exports.CourseUpdateManyWithoutTeacherInput = CourseUpdateManyWithoutTeacherInput;
