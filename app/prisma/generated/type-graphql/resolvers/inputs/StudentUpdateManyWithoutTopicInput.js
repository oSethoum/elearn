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
exports.StudentUpdateManyWithoutTopicInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutTopicInput_1 = require("../inputs/StudentCreateOrConnectWithoutTopicInput");
const StudentCreateWithoutTopicInput_1 = require("../inputs/StudentCreateWithoutTopicInput");
const StudentScalarWhereInput_1 = require("../inputs/StudentScalarWhereInput");
const StudentUpdateManyWithWhereWithoutTopicInput_1 = require("../inputs/StudentUpdateManyWithWhereWithoutTopicInput");
const StudentUpdateWithWhereUniqueWithoutTopicInput_1 = require("../inputs/StudentUpdateWithWhereUniqueWithoutTopicInput");
const StudentUpsertWithWhereUniqueWithoutTopicInput_1 = require("../inputs/StudentUpsertWithWhereUniqueWithoutTopicInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateManyWithoutTopicInput = class StudentUpdateManyWithoutTopicInput {
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
    TypeGraphQL.Field(_type => [StudentCreateWithoutTopicInput_1.StudentCreateWithoutTopicInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutTopicInput_1.StudentCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentUpsertWithWhereUniqueWithoutTopicInput_1.StudentUpsertWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentUpdateWithWhereUniqueWithoutTopicInput_1.StudentUpdateWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentUpdateManyWithWhereWithoutTopicInput_1.StudentUpdateManyWithWhereWithoutTopicInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereInput_1.StudentScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StudentUpdateManyWithoutTopicInput.prototype, "deleteMany", void 0);
StudentUpdateManyWithoutTopicInput = __decorate([
    TypeGraphQL.InputType("StudentUpdateManyWithoutTopicInput", {
        isAbstract: true
    })
], StudentUpdateManyWithoutTopicInput);
exports.StudentUpdateManyWithoutTopicInput = StudentUpdateManyWithoutTopicInput;
