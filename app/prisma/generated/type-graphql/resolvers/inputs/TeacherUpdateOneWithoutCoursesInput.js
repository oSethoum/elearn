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
exports.TeacherUpdateOneWithoutCoursesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TeacherCreateOrConnectWithoutCoursesInput_1 = require("../inputs/TeacherCreateOrConnectWithoutCoursesInput");
const TeacherCreateWithoutCoursesInput_1 = require("../inputs/TeacherCreateWithoutCoursesInput");
const TeacherUpdateWithoutCoursesInput_1 = require("../inputs/TeacherUpdateWithoutCoursesInput");
const TeacherUpsertWithoutCoursesInput_1 = require("../inputs/TeacherUpsertWithoutCoursesInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherUpdateOneWithoutCoursesInput = class TeacherUpdateOneWithoutCoursesInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutCoursesInput_1.TeacherCreateWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherCreateOrConnectWithoutCoursesInput_1.TeacherCreateOrConnectWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherUpsertWithoutCoursesInput_1.TeacherUpsertWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateWithoutCoursesInput_1.TeacherUpdateWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TeacherUpdateOneWithoutCoursesInput.prototype, "update", void 0);
TeacherUpdateOneWithoutCoursesInput = __decorate([
    TypeGraphQL.InputType("TeacherUpdateOneWithoutCoursesInput", {
        isAbstract: true
    })
], TeacherUpdateOneWithoutCoursesInput);
exports.TeacherUpdateOneWithoutCoursesInput = TeacherUpdateOneWithoutCoursesInput;
