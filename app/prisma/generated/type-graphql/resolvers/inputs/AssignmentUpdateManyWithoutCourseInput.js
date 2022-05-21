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
exports.AssignmentUpdateManyWithoutCourseInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentCreateOrConnectWithoutCourseInput_1 = require("../inputs/AssignmentCreateOrConnectWithoutCourseInput");
const AssignmentCreateWithoutCourseInput_1 = require("../inputs/AssignmentCreateWithoutCourseInput");
const AssignmentScalarWhereInput_1 = require("../inputs/AssignmentScalarWhereInput");
const AssignmentUpdateManyWithWhereWithoutCourseInput_1 = require("../inputs/AssignmentUpdateManyWithWhereWithoutCourseInput");
const AssignmentUpdateWithWhereUniqueWithoutCourseInput_1 = require("../inputs/AssignmentUpdateWithWhereUniqueWithoutCourseInput");
const AssignmentUpsertWithWhereUniqueWithoutCourseInput_1 = require("../inputs/AssignmentUpsertWithWhereUniqueWithoutCourseInput");
const AssignmentWhereUniqueInput_1 = require("../inputs/AssignmentWhereUniqueInput");
let AssignmentUpdateManyWithoutCourseInput = class AssignmentUpdateManyWithoutCourseInput {
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
    TypeGraphQL.Field(_type => [AssignmentCreateWithoutCourseInput_1.AssignmentCreateWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentCreateOrConnectWithoutCourseInput_1.AssignmentCreateOrConnectWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentUpsertWithWhereUniqueWithoutCourseInput_1.AssignmentUpsertWithWhereUniqueWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereUniqueInput_1.AssignmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereUniqueInput_1.AssignmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereUniqueInput_1.AssignmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereUniqueInput_1.AssignmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentUpdateWithWhereUniqueWithoutCourseInput_1.AssignmentUpdateWithWhereUniqueWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentUpdateManyWithWhereWithoutCourseInput_1.AssignmentUpdateManyWithWhereWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentScalarWhereInput_1.AssignmentScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentUpdateManyWithoutCourseInput.prototype, "deleteMany", void 0);
AssignmentUpdateManyWithoutCourseInput = __decorate([
    TypeGraphQL.InputType("AssignmentUpdateManyWithoutCourseInput", {
        isAbstract: true
    })
], AssignmentUpdateManyWithoutCourseInput);
exports.AssignmentUpdateManyWithoutCourseInput = AssignmentUpdateManyWithoutCourseInput;
