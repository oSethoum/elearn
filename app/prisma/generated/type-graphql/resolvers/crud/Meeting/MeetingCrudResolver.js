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
exports.MeetingCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateMeetingArgs_1 = require("./args/AggregateMeetingArgs");
const CreateMeetingArgs_1 = require("./args/CreateMeetingArgs");
const DeleteManyMeetingArgs_1 = require("./args/DeleteManyMeetingArgs");
const DeleteMeetingArgs_1 = require("./args/DeleteMeetingArgs");
const FindFirstMeetingArgs_1 = require("./args/FindFirstMeetingArgs");
const FindManyMeetingArgs_1 = require("./args/FindManyMeetingArgs");
const FindUniqueMeetingArgs_1 = require("./args/FindUniqueMeetingArgs");
const GroupByMeetingArgs_1 = require("./args/GroupByMeetingArgs");
const UpdateManyMeetingArgs_1 = require("./args/UpdateManyMeetingArgs");
const UpdateMeetingArgs_1 = require("./args/UpdateMeetingArgs");
const UpsertMeetingArgs_1 = require("./args/UpsertMeetingArgs");
const helpers_1 = require("../../../helpers");
const Meeting_1 = require("../../../models/Meeting");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMeeting_1 = require("../../outputs/AggregateMeeting");
const MeetingGroupBy_1 = require("../../outputs/MeetingGroupBy");
let MeetingCrudResolver = class MeetingCrudResolver {
    async meeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async meetings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMeeting(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMeeting(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueMeetingArgs_1.FindUniqueMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "meeting", null);
__decorate([
    TypeGraphQL.Query(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstMeetingArgs_1.FindFirstMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "findFirstMeeting", null);
__decorate([
    TypeGraphQL.Query(_returns => [Meeting_1.Meeting], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyMeetingArgs_1.FindManyMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "meetings", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateMeetingArgs_1.CreateMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "createMeeting", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteMeetingArgs_1.DeleteMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "deleteMeeting", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateMeetingArgs_1.UpdateMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "updateMeeting", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyMeetingArgs_1.DeleteManyMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "deleteManyMeeting", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyMeetingArgs_1.UpdateManyMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "updateManyMeeting", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertMeetingArgs_1.UpsertMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "upsertMeeting", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateMeeting_1.AggregateMeeting, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateMeetingArgs_1.AggregateMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "aggregateMeeting", null);
__decorate([
    TypeGraphQL.Query(_returns => [MeetingGroupBy_1.MeetingGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByMeetingArgs_1.GroupByMeetingArgs]),
    __metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "groupByMeeting", null);
MeetingCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], MeetingCrudResolver);
exports.MeetingCrudResolver = MeetingCrudResolver;
