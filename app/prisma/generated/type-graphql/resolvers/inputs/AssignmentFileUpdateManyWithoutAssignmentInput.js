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
exports.AssignmentFileUpdateManyWithoutAssignmentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentFileCreateOrConnectWithoutAssignmentInput_1 = require("../inputs/AssignmentFileCreateOrConnectWithoutAssignmentInput");
const AssignmentFileCreateWithoutAssignmentInput_1 = require("../inputs/AssignmentFileCreateWithoutAssignmentInput");
const AssignmentFileScalarWhereInput_1 = require("../inputs/AssignmentFileScalarWhereInput");
const AssignmentFileUpdateManyWithWhereWithoutAssignmentInput_1 = require("../inputs/AssignmentFileUpdateManyWithWhereWithoutAssignmentInput");
const AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput_1 = require("../inputs/AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput");
const AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput_1 = require("../inputs/AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput");
const AssignmentFileWhereUniqueInput_1 = require("../inputs/AssignmentFileWhereUniqueInput");
let AssignmentFileUpdateManyWithoutAssignmentInput = class AssignmentFileUpdateManyWithoutAssignmentInput {
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
    TypeGraphQL.Field(_type => [AssignmentFileCreateWithoutAssignmentInput_1.AssignmentFileCreateWithoutAssignmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileCreateOrConnectWithoutAssignmentInput_1.AssignmentFileCreateOrConnectWithoutAssignmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput_1.AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileWhereUniqueInput_1.AssignmentFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileWhereUniqueInput_1.AssignmentFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileWhereUniqueInput_1.AssignmentFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileWhereUniqueInput_1.AssignmentFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput_1.AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileUpdateManyWithWhereWithoutAssignmentInput_1.AssignmentFileUpdateManyWithWhereWithoutAssignmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentFileScalarWhereInput_1.AssignmentFileScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentFileUpdateManyWithoutAssignmentInput.prototype, "deleteMany", void 0);
AssignmentFileUpdateManyWithoutAssignmentInput = __decorate([
    TypeGraphQL.InputType("AssignmentFileUpdateManyWithoutAssignmentInput", {
        isAbstract: true
    })
], AssignmentFileUpdateManyWithoutAssignmentInput);
exports.AssignmentFileUpdateManyWithoutAssignmentInput = AssignmentFileUpdateManyWithoutAssignmentInput;
