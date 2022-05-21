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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateLessonArgs_1 = require("./args/AggregateLessonArgs");
const CreateLessonArgs_1 = require("./args/CreateLessonArgs");
const DeleteLessonArgs_1 = require("./args/DeleteLessonArgs");
const DeleteManyLessonArgs_1 = require("./args/DeleteManyLessonArgs");
const FindFirstLessonArgs_1 = require("./args/FindFirstLessonArgs");
const FindManyLessonArgs_1 = require("./args/FindManyLessonArgs");
const FindUniqueLessonArgs_1 = require("./args/FindUniqueLessonArgs");
const GroupByLessonArgs_1 = require("./args/GroupByLessonArgs");
const UpdateLessonArgs_1 = require("./args/UpdateLessonArgs");
const UpdateManyLessonArgs_1 = require("./args/UpdateManyLessonArgs");
const UpsertLessonArgs_1 = require("./args/UpsertLessonArgs");
const helpers_1 = require("../../../helpers");
const Lesson_1 = require("../../../models/Lesson");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLesson_1 = require("../../outputs/AggregateLesson");
const LessonGroupBy_1 = require("../../outputs/LessonGroupBy");
let LessonCrudResolver = class LessonCrudResolver {
    async lesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async lessons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLesson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLesson(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLesson(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lesson.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Lesson_1.Lesson, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueLessonArgs_1.FindUniqueLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "lesson", null);
__decorate([
    TypeGraphQL.Query(_returns => Lesson_1.Lesson, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstLessonArgs_1.FindFirstLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "findFirstLesson", null);
__decorate([
    TypeGraphQL.Query(_returns => [Lesson_1.Lesson], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyLessonArgs_1.FindManyLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "lessons", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Lesson_1.Lesson, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateLessonArgs_1.CreateLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "createLesson", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Lesson_1.Lesson, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteLessonArgs_1.DeleteLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "deleteLesson", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Lesson_1.Lesson, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateLessonArgs_1.UpdateLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "updateLesson", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyLessonArgs_1.DeleteManyLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "deleteManyLesson", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyLessonArgs_1.UpdateManyLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "updateManyLesson", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Lesson_1.Lesson, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertLessonArgs_1.UpsertLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "upsertLesson", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateLesson_1.AggregateLesson, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateLessonArgs_1.AggregateLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "aggregateLesson", null);
__decorate([
    TypeGraphQL.Query(_returns => [LessonGroupBy_1.LessonGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByLessonArgs_1.GroupByLessonArgs]),
    __metadata("design:returntype", Promise)
], LessonCrudResolver.prototype, "groupByLesson", null);
LessonCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Lesson_1.Lesson)
], LessonCrudResolver);
exports.LessonCrudResolver = LessonCrudResolver;
