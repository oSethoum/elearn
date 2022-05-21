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
exports.AdminUpdateOneWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminCreateOrConnectWithoutUserInput_1 = require("../inputs/AdminCreateOrConnectWithoutUserInput");
const AdminCreateWithoutUserInput_1 = require("../inputs/AdminCreateWithoutUserInput");
const AdminUpdateWithoutUserInput_1 = require("../inputs/AdminUpdateWithoutUserInput");
const AdminUpsertWithoutUserInput_1 = require("../inputs/AdminUpsertWithoutUserInput");
const AdminWhereUniqueInput_1 = require("../inputs/AdminWhereUniqueInput");
let AdminUpdateOneWithoutUserInput = class AdminUpdateOneWithoutUserInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutUserInput_1.AdminCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminUpsertWithoutUserInput_1.AdminUpsertWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminUpdateWithoutUserInput_1.AdminUpdateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminUpdateOneWithoutUserInput.prototype, "update", void 0);
AdminUpdateOneWithoutUserInput = __decorate([
    TypeGraphQL.InputType("AdminUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AdminUpdateOneWithoutUserInput);
exports.AdminUpdateOneWithoutUserInput = AdminUpdateOneWithoutUserInput;
