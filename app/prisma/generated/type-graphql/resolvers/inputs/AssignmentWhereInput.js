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
var AssignmentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentFileListRelationFilter_1 = require("../inputs/AssignmentFileListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CourseRelationFilter_1 = require("../inputs/CourseRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubmissionListRelationFilter_1 = require("../inputs/SubmissionListRelationFilter");
let AssignmentWhereInput = AssignmentWhereInput_1 = class AssignmentWhereInput {
    AND;
    OR;
    NOT;
    id;
    title;
    createdAt;
    updatedAt;
    published;
    content;
    description;
    course;
    courseId;
    submissions;
    assignmentFiles;
};
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AssignmentWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseRelationFilter_1.CourseRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "course", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "courseId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionListRelationFilter_1.SubmissionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "submissions", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentFileListRelationFilter_1.AssignmentFileListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AssignmentWhereInput.prototype, "assignmentFiles", void 0);
AssignmentWhereInput = AssignmentWhereInput_1 = __decorate([
    TypeGraphQL.InputType("AssignmentWhereInput", {
        isAbstract: true
    })
], AssignmentWhereInput);
exports.AssignmentWhereInput = AssignmentWhereInput;
