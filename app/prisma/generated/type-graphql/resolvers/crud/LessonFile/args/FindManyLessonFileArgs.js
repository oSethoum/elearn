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
exports.FindManyLessonFileArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LessonFileOrderByWithRelationInput_1 = require("../../../inputs/LessonFileOrderByWithRelationInput");
const LessonFileWhereInput_1 = require("../../../inputs/LessonFileWhereInput");
const LessonFileWhereUniqueInput_1 = require("../../../inputs/LessonFileWhereUniqueInput");
const LessonFileScalarFieldEnum_1 = require("../../../../enums/LessonFileScalarFieldEnum");
let FindManyLessonFileArgs = class FindManyLessonFileArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
__decorate([
    TypeGraphQL.Field(_type => LessonFileWhereInput_1.LessonFileWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileOrderByWithRelationInput_1.LessonFileOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileWhereUniqueInput_1.LessonFileWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileScalarFieldEnum_1.LessonFileScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyLessonFileArgs.prototype, "distinct", void 0);
FindManyLessonFileArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyLessonFileArgs);
exports.FindManyLessonFileArgs = FindManyLessonFileArgs;
