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
exports.CourseCreateWithoutAssignmentsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LessonCreateNestedManyWithoutCourseInput_1 = require("../inputs/LessonCreateNestedManyWithoutCourseInput");
const MeetingCreateNestedManyWithoutCourseInput_1 = require("../inputs/MeetingCreateNestedManyWithoutCourseInput");
const TeacherCreateNestedOneWithoutCoursesInput_1 = require("../inputs/TeacherCreateNestedOneWithoutCoursesInput");
const TopicCreateNestedOneWithoutCoursesInput_1 = require("../inputs/TopicCreateNestedOneWithoutCoursesInput");
let CourseCreateWithoutAssignmentsInput = class CourseCreateWithoutAssignmentsInput {
    title;
    year;
    description;
    published;
    createdAt;
    updatedAt;
    topic;
    teacher;
    meetings;
    lessons;
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CourseCreateWithoutAssignmentsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CourseCreateWithoutAssignmentsInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutCoursesInput_1.TopicCreateNestedOneWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "topic", void 0);
__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutCoursesInput_1.TeacherCreateNestedOneWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "teacher", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingCreateNestedManyWithoutCourseInput_1.MeetingCreateNestedManyWithoutCourseInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "meetings", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonCreateNestedManyWithoutCourseInput_1.LessonCreateNestedManyWithoutCourseInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseCreateWithoutAssignmentsInput.prototype, "lessons", void 0);
CourseCreateWithoutAssignmentsInput = __decorate([
    TypeGraphQL.InputType("CourseCreateWithoutAssignmentsInput", {
        isAbstract: true
    })
], CourseCreateWithoutAssignmentsInput);
exports.CourseCreateWithoutAssignmentsInput = CourseCreateWithoutAssignmentsInput;
