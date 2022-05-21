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
exports.TopicUpdateManyWithoutDepartmentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutDepartmentInput_1 = require("../inputs/TopicCreateOrConnectWithoutDepartmentInput");
const TopicCreateWithoutDepartmentInput_1 = require("../inputs/TopicCreateWithoutDepartmentInput");
const TopicScalarWhereInput_1 = require("../inputs/TopicScalarWhereInput");
const TopicUpdateManyWithWhereWithoutDepartmentInput_1 = require("../inputs/TopicUpdateManyWithWhereWithoutDepartmentInput");
const TopicUpdateWithWhereUniqueWithoutDepartmentInput_1 = require("../inputs/TopicUpdateWithWhereUniqueWithoutDepartmentInput");
const TopicUpsertWithWhereUniqueWithoutDepartmentInput_1 = require("../inputs/TopicUpsertWithWhereUniqueWithoutDepartmentInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicUpdateManyWithoutDepartmentInput = class TopicUpdateManyWithoutDepartmentInput {
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
    TypeGraphQL.Field(_type => [TopicCreateWithoutDepartmentInput_1.TopicCreateWithoutDepartmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutDepartmentInput_1.TopicCreateOrConnectWithoutDepartmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutDepartmentInput_1.TopicUpsertWithWhereUniqueWithoutDepartmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereUniqueInput_1.TopicWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereUniqueInput_1.TopicWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereUniqueInput_1.TopicWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereUniqueInput_1.TopicWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutDepartmentInput_1.TopicUpdateWithWhereUniqueWithoutDepartmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutDepartmentInput_1.TopicUpdateManyWithWhereWithoutDepartmentInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicScalarWhereInput_1.TopicScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicUpdateManyWithoutDepartmentInput.prototype, "deleteMany", void 0);
TopicUpdateManyWithoutDepartmentInput = __decorate([
    TypeGraphQL.InputType("TopicUpdateManyWithoutDepartmentInput", {
        isAbstract: true
    })
], TopicUpdateManyWithoutDepartmentInput);
exports.TopicUpdateManyWithoutDepartmentInput = TopicUpdateManyWithoutDepartmentInput;
