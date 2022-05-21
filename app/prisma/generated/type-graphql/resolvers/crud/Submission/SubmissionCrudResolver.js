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
exports.SubmissionCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSubmissionArgs_1 = require("./args/AggregateSubmissionArgs");
const CreateSubmissionArgs_1 = require("./args/CreateSubmissionArgs");
const DeleteManySubmissionArgs_1 = require("./args/DeleteManySubmissionArgs");
const DeleteSubmissionArgs_1 = require("./args/DeleteSubmissionArgs");
const FindFirstSubmissionArgs_1 = require("./args/FindFirstSubmissionArgs");
const FindManySubmissionArgs_1 = require("./args/FindManySubmissionArgs");
const FindUniqueSubmissionArgs_1 = require("./args/FindUniqueSubmissionArgs");
const GroupBySubmissionArgs_1 = require("./args/GroupBySubmissionArgs");
const UpdateManySubmissionArgs_1 = require("./args/UpdateManySubmissionArgs");
const UpdateSubmissionArgs_1 = require("./args/UpdateSubmissionArgs");
const UpsertSubmissionArgs_1 = require("./args/UpsertSubmissionArgs");
const helpers_1 = require("../../../helpers");
const Submission_1 = require("../../../models/Submission");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSubmission_1 = require("../../outputs/AggregateSubmission");
const SubmissionGroupBy_1 = require("../../outputs/SubmissionGroupBy");
let SubmissionCrudResolver = class SubmissionCrudResolver {
    async submission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async submissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSubmission(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSubmission(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySubmission(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).submission.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Submission_1.Submission, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSubmissionArgs_1.FindUniqueSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "submission", null);
__decorate([
    TypeGraphQL.Query(_returns => Submission_1.Submission, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSubmissionArgs_1.FindFirstSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "findFirstSubmission", null);
__decorate([
    TypeGraphQL.Query(_returns => [Submission_1.Submission], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySubmissionArgs_1.FindManySubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "submissions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Submission_1.Submission, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSubmissionArgs_1.CreateSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "createSubmission", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Submission_1.Submission, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSubmissionArgs_1.DeleteSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "deleteSubmission", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Submission_1.Submission, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSubmissionArgs_1.UpdateSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "updateSubmission", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySubmissionArgs_1.DeleteManySubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "deleteManySubmission", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySubmissionArgs_1.UpdateManySubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "updateManySubmission", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Submission_1.Submission, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSubmissionArgs_1.UpsertSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "upsertSubmission", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSubmission_1.AggregateSubmission, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSubmissionArgs_1.AggregateSubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "aggregateSubmission", null);
__decorate([
    TypeGraphQL.Query(_returns => [SubmissionGroupBy_1.SubmissionGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySubmissionArgs_1.GroupBySubmissionArgs]),
    __metadata("design:returntype", Promise)
], SubmissionCrudResolver.prototype, "groupBySubmission", null);
SubmissionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Submission_1.Submission)
], SubmissionCrudResolver);
exports.SubmissionCrudResolver = SubmissionCrudResolver;
