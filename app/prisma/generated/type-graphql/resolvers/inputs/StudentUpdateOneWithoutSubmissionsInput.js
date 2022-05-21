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
exports.StudentUpdateOneWithoutSubmissionsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutSubmissionsInput_1 = require("../inputs/StudentCreateOrConnectWithoutSubmissionsInput");
const StudentCreateWithoutSubmissionsInput_1 = require("../inputs/StudentCreateWithoutSubmissionsInput");
const StudentUpdateWithoutSubmissionsInput_1 = require("../inputs/StudentUpdateWithoutSubmissionsInput");
const StudentUpsertWithoutSubmissionsInput_1 = require("../inputs/StudentUpsertWithoutSubmissionsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateOneWithoutSubmissionsInput = class StudentUpdateOneWithoutSubmissionsInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutSubmissionsInput_1.StudentCreateWithoutSubmissionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutSubmissionsInput_1.StudentCreateOrConnectWithoutSubmissionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentUpsertWithoutSubmissionsInput_1.StudentUpsertWithoutSubmissionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutSubmissionsInput_1.StudentUpdateWithoutSubmissionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateOneWithoutSubmissionsInput.prototype, "update", void 0);
StudentUpdateOneWithoutSubmissionsInput = __decorate([
    TypeGraphQL.InputType("StudentUpdateOneWithoutSubmissionsInput", {
        isAbstract: true
    })
], StudentUpdateOneWithoutSubmissionsInput);
exports.StudentUpdateOneWithoutSubmissionsInput = StudentUpdateOneWithoutSubmissionsInput;
