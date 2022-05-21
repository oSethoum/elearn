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
exports.AssignmentFileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateAssignmentFileArgs_1 = require("./args/AggregateAssignmentFileArgs");
const CreateAssignmentFileArgs_1 = require("./args/CreateAssignmentFileArgs");
const DeleteAssignmentFileArgs_1 = require("./args/DeleteAssignmentFileArgs");
const DeleteManyAssignmentFileArgs_1 = require("./args/DeleteManyAssignmentFileArgs");
const FindFirstAssignmentFileArgs_1 = require("./args/FindFirstAssignmentFileArgs");
const FindManyAssignmentFileArgs_1 = require("./args/FindManyAssignmentFileArgs");
const FindUniqueAssignmentFileArgs_1 = require("./args/FindUniqueAssignmentFileArgs");
const GroupByAssignmentFileArgs_1 = require("./args/GroupByAssignmentFileArgs");
const UpdateAssignmentFileArgs_1 = require("./args/UpdateAssignmentFileArgs");
const UpdateManyAssignmentFileArgs_1 = require("./args/UpdateManyAssignmentFileArgs");
const UpsertAssignmentFileArgs_1 = require("./args/UpsertAssignmentFileArgs");
const helpers_1 = require("../../../helpers");
const AssignmentFile_1 = require("../../../models/AssignmentFile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAssignmentFile_1 = require("../../outputs/AggregateAssignmentFile");
const AssignmentFileGroupBy_1 = require("../../outputs/AssignmentFileGroupBy");
let AssignmentFileCrudResolver = class AssignmentFileCrudResolver {
    async assignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async assignmentFiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAssignmentFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAssignmentFile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAssignmentFile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignmentFile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAssignmentFileArgs_1.FindUniqueAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "assignmentFile", null);
__decorate([
    TypeGraphQL.Query(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAssignmentFileArgs_1.FindFirstAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "findFirstAssignmentFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [AssignmentFile_1.AssignmentFile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAssignmentFileArgs_1.FindManyAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "assignmentFiles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateAssignmentFileArgs_1.CreateAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "createAssignmentFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteAssignmentFileArgs_1.DeleteAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "deleteAssignmentFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateAssignmentFileArgs_1.UpdateAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "updateAssignmentFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAssignmentFileArgs_1.DeleteManyAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "deleteManyAssignmentFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAssignmentFileArgs_1.UpdateManyAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "updateManyAssignmentFile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AssignmentFile_1.AssignmentFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertAssignmentFileArgs_1.UpsertAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "upsertAssignmentFile", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAssignmentFile_1.AggregateAssignmentFile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAssignmentFileArgs_1.AggregateAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "aggregateAssignmentFile", null);
__decorate([
    TypeGraphQL.Query(_returns => [AssignmentFileGroupBy_1.AssignmentFileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAssignmentFileArgs_1.GroupByAssignmentFileArgs]),
    __metadata("design:returntype", Promise)
], AssignmentFileCrudResolver.prototype, "groupByAssignmentFile", null);
AssignmentFileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => AssignmentFile_1.AssignmentFile)
], AssignmentFileCrudResolver);
exports.AssignmentFileCrudResolver = AssignmentFileCrudResolver;
