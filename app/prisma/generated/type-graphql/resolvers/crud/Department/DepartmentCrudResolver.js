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
exports.DepartmentCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateDepartmentArgs_1 = require("./args/AggregateDepartmentArgs");
const CreateDepartmentArgs_1 = require("./args/CreateDepartmentArgs");
const DeleteDepartmentArgs_1 = require("./args/DeleteDepartmentArgs");
const DeleteManyDepartmentArgs_1 = require("./args/DeleteManyDepartmentArgs");
const FindFirstDepartmentArgs_1 = require("./args/FindFirstDepartmentArgs");
const FindManyDepartmentArgs_1 = require("./args/FindManyDepartmentArgs");
const FindUniqueDepartmentArgs_1 = require("./args/FindUniqueDepartmentArgs");
const GroupByDepartmentArgs_1 = require("./args/GroupByDepartmentArgs");
const UpdateDepartmentArgs_1 = require("./args/UpdateDepartmentArgs");
const UpdateManyDepartmentArgs_1 = require("./args/UpdateManyDepartmentArgs");
const UpsertDepartmentArgs_1 = require("./args/UpsertDepartmentArgs");
const helpers_1 = require("../../../helpers");
const Department_1 = require("../../../models/Department");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDepartment_1 = require("../../outputs/AggregateDepartment");
const DepartmentGroupBy_1 = require("../../outputs/DepartmentGroupBy");
let DepartmentCrudResolver = class DepartmentCrudResolver {
    async department(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async departments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDepartment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDepartment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).department.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDepartment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).department.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Department_1.Department, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueDepartmentArgs_1.FindUniqueDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "department", null);
__decorate([
    TypeGraphQL.Query(_returns => Department_1.Department, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstDepartmentArgs_1.FindFirstDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "findFirstDepartment", null);
__decorate([
    TypeGraphQL.Query(_returns => [Department_1.Department], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyDepartmentArgs_1.FindManyDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "departments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Department_1.Department, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateDepartmentArgs_1.CreateDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "createDepartment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Department_1.Department, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteDepartmentArgs_1.DeleteDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "deleteDepartment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Department_1.Department, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateDepartmentArgs_1.UpdateDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "updateDepartment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyDepartmentArgs_1.DeleteManyDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "deleteManyDepartment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyDepartmentArgs_1.UpdateManyDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "updateManyDepartment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Department_1.Department, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertDepartmentArgs_1.UpsertDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "upsertDepartment", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateDepartment_1.AggregateDepartment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateDepartmentArgs_1.AggregateDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "aggregateDepartment", null);
__decorate([
    TypeGraphQL.Query(_returns => [DepartmentGroupBy_1.DepartmentGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByDepartmentArgs_1.GroupByDepartmentArgs]),
    __metadata("design:returntype", Promise)
], DepartmentCrudResolver.prototype, "groupByDepartment", null);
DepartmentCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Department_1.Department)
], DepartmentCrudResolver);
exports.DepartmentCrudResolver = DepartmentCrudResolver;
