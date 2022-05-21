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
exports.TopicRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Course_1 = require("../../../models/Course");
const Department_1 = require("../../../models/Department");
const Student_1 = require("../../../models/Student");
const Topic_1 = require("../../../models/Topic");
const TopicCoursesArgs_1 = require("./args/TopicCoursesArgs");
const TopicStudentsArgs_1 = require("./args/TopicStudentsArgs");
const helpers_1 = require("../../../helpers");
let TopicRelationsResolver = class TopicRelationsResolver {
    async department(topic, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).department({});
    }
    async courses(topic, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).courses(args);
    }
    async students(topic, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).students(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Department_1.Department, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Topic_1.Topic, Object]),
    __metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "department", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Course_1.Course], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Topic_1.Topic, Object, TopicCoursesArgs_1.TopicCoursesArgs]),
    __metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "courses", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Student_1.Student], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Topic_1.Topic, Object, TopicStudentsArgs_1.TopicStudentsArgs]),
    __metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "students", null);
TopicRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], TopicRelationsResolver);
exports.TopicRelationsResolver = TopicRelationsResolver;
