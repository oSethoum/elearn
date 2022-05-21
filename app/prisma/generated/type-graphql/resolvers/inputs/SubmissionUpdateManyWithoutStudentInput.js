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
exports.SubmissionUpdateManyWithoutStudentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SubmissionCreateOrConnectWithoutStudentInput_1 = require("../inputs/SubmissionCreateOrConnectWithoutStudentInput");
const SubmissionCreateWithoutStudentInput_1 = require("../inputs/SubmissionCreateWithoutStudentInput");
const SubmissionScalarWhereInput_1 = require("../inputs/SubmissionScalarWhereInput");
const SubmissionUpdateManyWithWhereWithoutStudentInput_1 = require("../inputs/SubmissionUpdateManyWithWhereWithoutStudentInput");
const SubmissionUpdateWithWhereUniqueWithoutStudentInput_1 = require("../inputs/SubmissionUpdateWithWhereUniqueWithoutStudentInput");
const SubmissionUpsertWithWhereUniqueWithoutStudentInput_1 = require("../inputs/SubmissionUpsertWithWhereUniqueWithoutStudentInput");
const SubmissionWhereUniqueInput_1 = require("../inputs/SubmissionWhereUniqueInput");
let SubmissionUpdateManyWithoutStudentInput = class SubmissionUpdateManyWithoutStudentInput {
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
    TypeGraphQL.Field(_type => [SubmissionCreateWithoutStudentInput_1.SubmissionCreateWithoutStudentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionCreateOrConnectWithoutStudentInput_1.SubmissionCreateOrConnectWithoutStudentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionUpsertWithWhereUniqueWithoutStudentInput_1.SubmissionUpsertWithWhereUniqueWithoutStudentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionWhereUniqueInput_1.SubmissionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionWhereUniqueInput_1.SubmissionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionWhereUniqueInput_1.SubmissionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionWhereUniqueInput_1.SubmissionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionUpdateWithWhereUniqueWithoutStudentInput_1.SubmissionUpdateWithWhereUniqueWithoutStudentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionUpdateManyWithWhereWithoutStudentInput_1.SubmissionUpdateManyWithWhereWithoutStudentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SubmissionScalarWhereInput_1.SubmissionScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionUpdateManyWithoutStudentInput.prototype, "deleteMany", void 0);
SubmissionUpdateManyWithoutStudentInput = __decorate([
    TypeGraphQL.InputType("SubmissionUpdateManyWithoutStudentInput", {
        isAbstract: true
    })
], SubmissionUpdateManyWithoutStudentInput);
exports.SubmissionUpdateManyWithoutStudentInput = SubmissionUpdateManyWithoutStudentInput;
