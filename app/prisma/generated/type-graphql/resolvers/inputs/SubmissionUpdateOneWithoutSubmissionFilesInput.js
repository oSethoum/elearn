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
exports.SubmissionUpdateOneWithoutSubmissionFilesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SubmissionCreateOrConnectWithoutSubmissionFilesInput_1 = require("../inputs/SubmissionCreateOrConnectWithoutSubmissionFilesInput");
const SubmissionCreateWithoutSubmissionFilesInput_1 = require("../inputs/SubmissionCreateWithoutSubmissionFilesInput");
const SubmissionUpdateWithoutSubmissionFilesInput_1 = require("../inputs/SubmissionUpdateWithoutSubmissionFilesInput");
const SubmissionUpsertWithoutSubmissionFilesInput_1 = require("../inputs/SubmissionUpsertWithoutSubmissionFilesInput");
const SubmissionWhereUniqueInput_1 = require("../inputs/SubmissionWhereUniqueInput");
let SubmissionUpdateOneWithoutSubmissionFilesInput = class SubmissionUpdateOneWithoutSubmissionFilesInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => SubmissionCreateWithoutSubmissionFilesInput_1.SubmissionCreateWithoutSubmissionFilesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionCreateOrConnectWithoutSubmissionFilesInput_1.SubmissionCreateOrConnectWithoutSubmissionFilesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionUpsertWithoutSubmissionFilesInput_1.SubmissionUpsertWithoutSubmissionFilesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionWhereUniqueInput_1.SubmissionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionUpdateWithoutSubmissionFilesInput_1.SubmissionUpdateWithoutSubmissionFilesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateOneWithoutSubmissionFilesInput.prototype, "update", void 0);
SubmissionUpdateOneWithoutSubmissionFilesInput = __decorate([
    TypeGraphQL.InputType("SubmissionUpdateOneWithoutSubmissionFilesInput", {
        isAbstract: true
    })
], SubmissionUpdateOneWithoutSubmissionFilesInput);
exports.SubmissionUpdateOneWithoutSubmissionFilesInput = SubmissionUpdateOneWithoutSubmissionFilesInput;
