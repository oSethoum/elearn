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
exports.LessonFileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateLessonFileArgs_1 = require("./args/AggregateLessonFileArgs");
const CreateLessonFileArgs_1 = require("./args/CreateLessonFileArgs");
const DeleteLessonFileArgs_1 = require("./args/DeleteLessonFileArgs");
const DeleteManyLessonFileArgs_1 = require("./args/DeleteManyLessonFileArgs");
const FindFirstLessonFileArgs_1 = require("./args/FindFirstLessonFileArgs");
const FindManyLessonFileArgs_1 = require("./args/FindManyLessonFileArgs");
const FindUniqueLessonFileArgs_1 = require("./args/FindUniqueLessonFileArgs");
const GroupByLessonFileArgs_1 = require("./args/GroupByLessonFileArgs");
const UpdateLessonFileArgs_1 = require("./args/UpdateLessonFileArgs");
const UpdateManyLessonFileArgs_1 = require("./args/UpdateManyLessonFileArgs");
const UpsertLessonFileArgs_1 = require("./args/UpsertLessonFileArgs");
const helpers_1 = require("../../../helpers");
const LessonFile_1 = require("../../../models/LessonFile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLessonFile_1 = require("../../outputs/AggregateLessonFile");
const LessonFileGroupBy_1 = require("../../outputs/LessonFileGroupBy");
let LessonFileCrudResolver = class LessonFileCrudResolver {
    async lessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async lessonFiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLessonFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLessonFile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLessonFile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lessonFile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => LessonFile_1.LessonFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueLessonFileArgs_1.FindUniqueLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "lessonFile", null);
__decorate([
    TypeGraphQL.Query(_returns => LessonFile_1.LessonFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstLessonFileArgs_1.FindFirstLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "findFirstLessonFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [LessonFile_1.LessonFile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyLessonFileArgs_1.FindManyLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "lessonFiles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => LessonFile_1.LessonFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateLessonFileArgs_1.CreateLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "createLessonFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => LessonFile_1.LessonFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteLessonFileArgs_1.DeleteLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "deleteLessonFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => LessonFile_1.LessonFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateLessonFileArgs_1.UpdateLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "updateLessonFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyLessonFileArgs_1.DeleteManyLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "deleteManyLessonFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyLessonFileArgs_1.UpdateManyLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "updateManyLessonFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => LessonFile_1.LessonFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertLessonFileArgs_1.UpsertLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "upsertLessonFile", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateLessonFile_1.AggregateLessonFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateLessonFileArgs_1.AggregateLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "aggregateLessonFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [LessonFileGroupBy_1.LessonFileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByLessonFileArgs_1.GroupByLessonFileArgs]),
    __metadata("design:returntype", Promise)
], LessonFileCrudResolver.prototype, "groupByLessonFile", null);
LessonFileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => LessonFile_1.LessonFile)
], LessonFileCrudResolver);
exports.LessonFileCrudResolver = LessonFileCrudResolver;
