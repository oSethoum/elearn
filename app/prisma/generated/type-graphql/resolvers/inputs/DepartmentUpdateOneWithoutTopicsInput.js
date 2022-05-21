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
exports.DepartmentUpdateOneWithoutTopicsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DepartmentCreateOrConnectWithoutTopicsInput_1 = require("../inputs/DepartmentCreateOrConnectWithoutTopicsInput");
const DepartmentCreateWithoutTopicsInput_1 = require("../inputs/DepartmentCreateWithoutTopicsInput");
const DepartmentUpdateWithoutTopicsInput_1 = require("../inputs/DepartmentUpdateWithoutTopicsInput");
const DepartmentUpsertWithoutTopicsInput_1 = require("../inputs/DepartmentUpsertWithoutTopicsInput");
const DepartmentWhereUniqueInput_1 = require("../inputs/DepartmentWhereUniqueInput");
let DepartmentUpdateOneWithoutTopicsInput = class DepartmentUpdateOneWithoutTopicsInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => DepartmentCreateWithoutTopicsInput_1.DepartmentCreateWithoutTopicsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentCreateOrConnectWithoutTopicsInput_1.DepartmentCreateOrConnectWithoutTopicsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentUpsertWithoutTopicsInput_1.DepartmentUpsertWithoutTopicsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentWhereUniqueInput_1.DepartmentWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentUpdateWithoutTopicsInput_1.DepartmentUpdateWithoutTopicsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DepartmentUpdateOneWithoutTopicsInput.prototype, "update", void 0);
DepartmentUpdateOneWithoutTopicsInput = __decorate([
    TypeGraphQL.InputType("DepartmentUpdateOneWithoutTopicsInput", {
        isAbstract: true
    })
], DepartmentUpdateOneWithoutTopicsInput);
exports.DepartmentUpdateOneWithoutTopicsInput = DepartmentUpdateOneWithoutTopicsInput;
