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
exports.SubmissionFileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSubmissionFileArgs_1 = require("./args/AggregateSubmissionFileArgs");
const CreateSubmissionFileArgs_1 = require("./args/CreateSubmissionFileArgs");
const DeleteManySubmissionFileArgs_1 = require("./args/DeleteManySubmissionFileArgs");
const DeleteSubmissionFileArgs_1 = require("./args/DeleteSubmissionFileArgs");
const FindFirstSubmissionFileArgs_1 = require("./args/FindFirstSubmissionFileArgs");
const FindManySubmissionFileArgs_1 = require("./args/FindManySubmissionFileArgs");
const FindUniqueSubmissionFileArgs_1 = require("./args/FindUniqueSubmissionFileArgs");
const GroupBySubmissionFileArgs_1 = require("./args/GroupBySubmissionFileArgs");
const UpdateManySubmissionFileArgs_1 = require("./args/UpdateManySubmissionFileArgs");
const UpdateSubmissionFileArgs_1 = require("./args/UpdateSubmissionFileArgs");
const UpsertSubmissionFileArgs_1 = require("./args/UpsertSubmissionFileArgs");
const helpers_1 = require("../../../helpers");
const SubmissionFile_1 = require("../../../models/SubmissionFile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSubmissionFile_1 = require("../../outputs/AggregateSubmissionFile");
const SubmissionFileGroupBy_1 = require("../../outputs/SubmissionFileGroupBy");
let SubmissionFileCrudResolver = class SubmissionFileCrudResolver {
    async submissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async submissionFiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSubmissionFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSubmissionFile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySubmissionFile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submissionFile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSubmissionFileArgs_1.FindUniqueSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "submissionFile", null);
__decorate([
    TypeGraphQL.Query(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSubmissionFileArgs_1.FindFirstSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "findFirstSubmissionFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [SubmissionFile_1.SubmissionFile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySubmissionFileArgs_1.FindManySubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "submissionFiles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSubmissionFileArgs_1.CreateSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "createSubmissionFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSubmissionFileArgs_1.DeleteSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "deleteSubmissionFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSubmissionFileArgs_1.UpdateSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "updateSubmissionFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySubmissionFileArgs_1.DeleteManySubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "deleteManySubmissionFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySubmissionFileArgs_1.UpdateManySubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "updateManySubmissionFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SubmissionFile_1.SubmissionFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSubmissionFileArgs_1.UpsertSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "upsertSubmissionFile", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSubmissionFile_1.AggregateSubmissionFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSubmissionFileArgs_1.AggregateSubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "aggregateSubmissionFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [SubmissionFileGroupBy_1.SubmissionFileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySubmissionFileArgs_1.GroupBySubmissionFileArgs]),
    __metadata("design:returntype", Promise)
], SubmissionFileCrudResolver.prototype, "groupBySubmissionFile", null);
SubmissionFileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => SubmissionFile_1.SubmissionFile)
], SubmissionFileCrudResolver);
exports.SubmissionFileCrudResolver = SubmissionFileCrudResolver;
