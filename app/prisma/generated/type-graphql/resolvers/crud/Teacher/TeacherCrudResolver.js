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
exports.TeacherCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateTeacherArgs_1 = require("./args/AggregateTeacherArgs");
const CreateTeacherArgs_1 = require("./args/CreateTeacherArgs");
const DeleteManyTeacherArgs_1 = require("./args/DeleteManyTeacherArgs");
const DeleteTeacherArgs_1 = require("./args/DeleteTeacherArgs");
const FindFirstTeacherArgs_1 = require("./args/FindFirstTeacherArgs");
const FindManyTeacherArgs_1 = require("./args/FindManyTeacherArgs");
const FindUniqueTeacherArgs_1 = require("./args/FindUniqueTeacherArgs");
const GroupByTeacherArgs_1 = require("./args/GroupByTeacherArgs");
const UpdateManyTeacherArgs_1 = require("./args/UpdateManyTeacherArgs");
const UpdateTeacherArgs_1 = require("./args/UpdateTeacherArgs");
const UpsertTeacherArgs_1 = require("./args/UpsertTeacherArgs");
const helpers_1 = require("../../../helpers");
const Teacher_1 = require("../../../models/Teacher");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeacher_1 = require("../../outputs/AggregateTeacher");
const TeacherGroupBy_1 = require("../../outputs/TeacherGroupBy");
let TeacherCrudResolver = class TeacherCrudResolver {
    async teacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teachers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTeacher(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTeacher(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTeacherArgs_1.FindUniqueTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "teacher", null);
__decorate([
    TypeGraphQL.Query(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTeacherArgs_1.FindFirstTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "findFirstTeacher", null);
__decorate([
    TypeGraphQL.Query(_returns => [Teacher_1.Teacher], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTeacherArgs_1.FindManyTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "teachers", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateTeacherArgs_1.CreateTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "createTeacher", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteTeacherArgs_1.DeleteTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "deleteTeacher", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateTeacherArgs_1.UpdateTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "updateTeacher", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTeacherArgs_1.DeleteManyTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "deleteManyTeacher", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTeacherArgs_1.UpdateManyTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "updateManyTeacher", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertTeacherArgs_1.UpsertTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "upsertTeacher", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateTeacher_1.AggregateTeacher, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTeacherArgs_1.AggregateTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "aggregateTeacher", null);
__decorate([
    TypeGraphQL.Query(_returns => [TeacherGroupBy_1.TeacherGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTeacherArgs_1.GroupByTeacherArgs]),
    __metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "groupByTeacher", null);
TeacherCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], TeacherCrudResolver);
exports.TeacherCrudResolver = TeacherCrudResolver;
