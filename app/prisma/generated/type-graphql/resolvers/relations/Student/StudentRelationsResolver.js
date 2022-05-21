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
exports.StudentRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Student_1 = require("../../../models/Student");
const Submission_1 = require("../../../models/Submission");
const Topic_1 = require("../../../models/Topic");
const User_1 = require("../../../models/User");
const StudentSubmissionsArgs_1 = require("./args/StudentSubmissionsArgs");
const helpers_1 = require("../../../helpers");
let StudentRelationsResolver = class StudentRelationsResolver {
    async user(student, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).user({});
    }
    async submissions(student, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).submissions(args);
    }
    async topic(student, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).topic({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Student_1.Student, Object]),
    __metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Submission_1.Submission], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Student_1.Student, Object, StudentSubmissionsArgs_1.StudentSubmissionsArgs]),
    __metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "submissions", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Student_1.Student, Object]),
    __metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "topic", null);
StudentRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], StudentRelationsResolver);
exports.StudentRelationsResolver = StudentRelationsResolver;
