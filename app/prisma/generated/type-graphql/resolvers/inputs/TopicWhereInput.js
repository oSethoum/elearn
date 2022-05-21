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
var TopicWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CourseListRelationFilter_1 = require("../inputs/CourseListRelationFilter");
const DepartmentRelationFilter_1 = require("../inputs/DepartmentRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StudentListRelationFilter_1 = require("../inputs/StudentListRelationFilter");
let TopicWhereInput = TopicWhereInput_1 = class TopicWhereInput {
    AND;
    OR;
    NOT;
    id;
    name;
    years;
    department;
    departmentId;
    courses;
    students;
};
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TopicWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "years", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentRelationFilter_1.DepartmentRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "department", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "departmentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseListRelationFilter_1.CourseListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "courses", void 0);
__decorate([
    TypeGraphQL.Field(_type => StudentListRelationFilter_1.StudentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicWhereInput.prototype, "students", void 0);
TopicWhereInput = TopicWhereInput_1 = __decorate([
    TypeGraphQL.InputType("TopicWhereInput", {
        isAbstract: true
    })
], TopicWhereInput);
exports.TopicWhereInput = TopicWhereInput;
