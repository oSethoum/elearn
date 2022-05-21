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
exports.LessonRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Course_1 = require("../../../models/Course");
const Lesson_1 = require("../../../models/Lesson");
const LessonFile_1 = require("../../../models/LessonFile");
const LessonLessonFilesArgs_1 = require("./args/LessonLessonFilesArgs");
const helpers_1 = require("../../../helpers");
let LessonRelationsResolver = class LessonRelationsResolver {
    async lessonFiles(lesson, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.findUnique({
            where: {
                id: lesson.id,
            },
        }).lessonFiles(args);
    }
    async course(lesson, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.findUnique({
            where: {
                id: lesson.id,
            },
        }).course({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [LessonFile_1.LessonFile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Lesson_1.Lesson, Object, LessonLessonFilesArgs_1.LessonLessonFilesArgs]),
    __metadata("design:returntype", Promise)
], LessonRelationsResolver.prototype, "lessonFiles", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Course_1.Course, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Lesson_1.Lesson, Object]),
    __metadata("design:returntype", Promise)
], LessonRelationsResolver.prototype, "course", null);
LessonRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Lesson_1.Lesson)
], LessonRelationsResolver);
exports.LessonRelationsResolver = LessonRelationsResolver;
