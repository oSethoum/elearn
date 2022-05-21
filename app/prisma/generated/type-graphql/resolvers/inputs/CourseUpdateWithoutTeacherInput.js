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
exports.CourseUpdateWithoutTeacherInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentUpdateManyWithoutCourseInput_1 = require("../inputs/AssignmentUpdateManyWithoutCourseInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LessonUpdateManyWithoutCourseInput_1 = require("../inputs/LessonUpdateManyWithoutCourseInput");
const MeetingUpdateManyWithoutCourseInput_1 = require("../inputs/MeetingUpdateManyWithoutCourseInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateOneWithoutCoursesInput_1 = require("../inputs/TopicUpdateOneWithoutCoursesInput");
let CourseUpdateWithoutTeacherInput = class CourseUpdateWithoutTeacherInput {
    title;
    year;
    description;
    published;
    createdAt;
    updatedAt;
    topic;
    assignments;
    meetings;
    lessons;
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutCoursesInput_1.TopicUpdateOneWithoutCoursesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "topic", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentUpdateManyWithoutCourseInput_1.AssignmentUpdateManyWithoutCourseInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "assignments", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingUpdateManyWithoutCourseInput_1.MeetingUpdateManyWithoutCourseInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "meetings", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonUpdateManyWithoutCourseInput_1.LessonUpdateManyWithoutCourseInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseUpdateWithoutTeacherInput.prototype, "lessons", void 0);
CourseUpdateWithoutTeacherInput = __decorate([
    TypeGraphQL.InputType("CourseUpdateWithoutTeacherInput", {
        isAbstract: true
    })
], CourseUpdateWithoutTeacherInput);
exports.CourseUpdateWithoutTeacherInput = CourseUpdateWithoutTeacherInput;
