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
var CourseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentListRelationFilter_1 = require("../inputs/AssignmentListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const LessonListRelationFilter_1 = require("../inputs/LessonListRelationFilter");
const MeetingListRelationFilter_1 = require("../inputs/MeetingListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TeacherRelationFilter_1 = require("../inputs/TeacherRelationFilter");
const TopicRelationFilter_1 = require("../inputs/TopicRelationFilter");
let CourseWhereInput = CourseWhereInput_1 = class CourseWhereInput {
    AND;
    OR;
    NOT;
    id;
    title;
    year;
    description;
    published;
    createdAt;
    updatedAt;
    topic;
    topicId;
    assignments;
    teacher;
    teacherId;
    meetings;
    lessons;
};
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CourseWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicRelationFilter_1.TopicRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "topic", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "topicId", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentListRelationFilter_1.AssignmentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "assignments", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherRelationFilter_1.TeacherRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "teacher", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "teacherId", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingListRelationFilter_1.MeetingListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "meetings", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonListRelationFilter_1.LessonListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseWhereInput.prototype, "lessons", void 0);
CourseWhereInput = CourseWhereInput_1 = __decorate([
    TypeGraphQL.InputType("CourseWhereInput", {
        isAbstract: true
    })
], CourseWhereInput);
exports.CourseWhereInput = CourseWhereInput;
