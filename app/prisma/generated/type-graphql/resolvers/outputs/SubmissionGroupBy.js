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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SubmissionAvgAggregate_1 = require("../outputs/SubmissionAvgAggregate");
const SubmissionCountAggregate_1 = require("../outputs/SubmissionCountAggregate");
const SubmissionMaxAggregate_1 = require("../outputs/SubmissionMaxAggregate");
const SubmissionMinAggregate_1 = require("../outputs/SubmissionMinAggregate");
const SubmissionSumAggregate_1 = require("../outputs/SubmissionSumAggregate");
let SubmissionGroupBy = class SubmissionGroupBy {
    id;
    createdAt;
    updatedAt;
    content;
    studentId;
    assignmentId;
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SubmissionGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SubmissionGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SubmissionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SubmissionGroupBy.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "studentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "assignmentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionCountAggregate_1.SubmissionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionAvgAggregate_1.SubmissionAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionSumAggregate_1.SubmissionSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionMinAggregate_1.SubmissionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionMaxAggregate_1.SubmissionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionGroupBy.prototype, "_max", void 0);
SubmissionGroupBy = __decorate([
    TypeGraphQL.ObjectType("SubmissionGroupBy", {
        isAbstract: true
    })
], SubmissionGroupBy);
exports.SubmissionGroupBy = SubmissionGroupBy;
