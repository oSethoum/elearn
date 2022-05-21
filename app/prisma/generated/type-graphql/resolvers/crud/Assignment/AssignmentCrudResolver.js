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
exports.AssignmentCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateAssignmentArgs_1 = require("./args/AggregateAssignmentArgs");
const CreateAssignmentArgs_1 = require("./args/CreateAssignmentArgs");
const DeleteAssignmentArgs_1 = require("./args/DeleteAssignmentArgs");
const DeleteManyAssignmentArgs_1 = require("./args/DeleteManyAssignmentArgs");
const FindFirstAssignmentArgs_1 = require("./args/FindFirstAssignmentArgs");
const FindManyAssignmentArgs_1 = require("./args/FindManyAssignmentArgs");
const FindUniqueAssignmentArgs_1 = require("./args/FindUniqueAssignmentArgs");
const GroupByAssignmentArgs_1 = require("./args/GroupByAssignmentArgs");
const UpdateAssignmentArgs_1 = require("./args/UpdateAssignmentArgs");
const UpdateManyAssignmentArgs_1 = require("./args/UpdateManyAssignmentArgs");
const UpsertAssignmentArgs_1 = require("./args/UpsertAssignmentArgs");
const helpers_1 = require("../../../helpers");
const Assignment_1 = require("../../../models/Assignment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAssignment_1 = require("../../outputs/AggregateAssignment");
const AssignmentGroupBy_1 = require("../../outputs/AssignmentGroupBy");
let AssignmentCrudResolver = class AssignmentCrudResolver {
    async assignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async assignments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAssignment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAssignment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAssignment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).assignment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Assignment_1.Assignment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAssignmentArgs_1.FindUniqueAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "assignment", null);
__decorate([
    TypeGraphQL.Query(_returns => Assignment_1.Assignment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAssignmentArgs_1.FindFirstAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "findFirstAssignment", null);
__decorate([
    TypeGraphQL.Query(_returns => [Assignment_1.Assignment], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAssignmentArgs_1.FindManyAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "assignments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Assignment_1.Assignment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateAssignmentArgs_1.CreateAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "createAssignment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Assignment_1.Assignment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteAssignmentArgs_1.DeleteAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "deleteAssignment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Assignment_1.Assignment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateAssignmentArgs_1.UpdateAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "updateAssignment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAssignmentArgs_1.DeleteManyAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "deleteManyAssignment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAssignmentArgs_1.UpdateManyAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "updateManyAssignment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Assignment_1.Assignment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertAssignmentArgs_1.UpsertAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "upsertAssignment", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAssignment_1.AggregateAssignment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAssignmentArgs_1.AggregateAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "aggregateAssignment", null);
__decorate([
    TypeGraphQL.Query(_returns => [AssignmentGroupBy_1.AssignmentGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAssignmentArgs_1.GroupByAssignmentArgs]),
    __metadata("design:returntype", Promise)
], AssignmentCrudResolver.prototype, "groupByAssignment", null);
AssignmentCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Assignment_1.Assignment)
], AssignmentCrudResolver);
exports.AssignmentCrudResolver = AssignmentCrudResolver;
