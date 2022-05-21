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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Assignment_1 = require("../../../models/Assignment");
const Course_1 = require("../../../models/Course");
const Lesson_1 = require("../../../models/Lesson");
const Meeting_1 = require("../../../models/Meeting");
const Teacher_1 = require("../../../models/Teacher");
const Topic_1 = require("../../../models/Topic");
const CourseAssignmentsArgs_1 = require("./args/CourseAssignmentsArgs");
const CourseLessonsArgs_1 = require("./args/CourseLessonsArgs");
const CourseMeetingsArgs_1 = require("./args/CourseMeetingsArgs");
const helpers_1 = require("../../../helpers");
let CourseRelationsResolver = class CourseRelationsResolver {
    async topic(course, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).course.findUnique({
            where: {
                id: course.id,
            },
        }).topic({});
    }
    async assignments(course, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).course.findUnique({
            where: {
                id: course.id,
            },
        }).assignments(args);
    }
    async teacher(course, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).course.findUnique({
            where: {
                id: course.id,
            },
        }).teacher({});
    }
    async meetings(course, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).course.findUnique({
            where: {
                id: course.id,
            },
        }).meetings(args);
    }
    async lessons(course, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).course.findUnique({
            where: {
                id: course.id,
            },
        }).lessons(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_1.Course, Object]),
    __metadata("design:returntype", Promise)
], CourseRelationsResolver.prototype, "topic", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Assignment_1.Assignment], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_1.Course, Object, CourseAssignmentsArgs_1.CourseAssignmentsArgs]),
    __metadata("design:returntype", Promise)
], CourseRelationsResolver.prototype, "assignments", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Teacher_1.Teacher, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_1.Course, Object]),
    __metadata("design:returntype", Promise)
], CourseRelationsResolver.prototype, "teacher", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Meeting_1.Meeting], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_1.Course, Object, CourseMeetingsArgs_1.CourseMeetingsArgs]),
    __metadata("design:returntype", Promise)
], CourseRelationsResolver.prototype, "meetings", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Lesson_1.Lesson], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_1.Course, Object, CourseLessonsArgs_1.CourseLessonsArgs]),
    __metadata("design:returntype", Promise)
], CourseRelationsResolver.prototype, "lessons", null);
CourseRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Course_1.Course)
], CourseRelationsResolver);
exports.CourseRelationsResolver = CourseRelationsResolver;
