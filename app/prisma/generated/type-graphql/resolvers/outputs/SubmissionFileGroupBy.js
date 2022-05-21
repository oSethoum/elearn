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
exports.SubmissionFileGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SubmissionFileAvgAggregate_1 = require("../outputs/SubmissionFileAvgAggregate");
const SubmissionFileCountAggregate_1 = require("../outputs/SubmissionFileCountAggregate");
const SubmissionFileMaxAggregate_1 = require("../outputs/SubmissionFileMaxAggregate");
const SubmissionFileMinAggregate_1 = require("../outputs/SubmissionFileMinAggregate");
const SubmissionFileSumAggregate_1 = require("../outputs/SubmissionFileSumAggregate");
let SubmissionFileGroupBy = class SubmissionFileGroupBy {
    id;
    createdAt;
    updatedAt;
    link;
    name;
    type;
    submissionId;
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
], SubmissionFileGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SubmissionFileGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SubmissionFileGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SubmissionFileGroupBy.prototype, "link", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SubmissionFileGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SubmissionFileGroupBy.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "submissionId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileCountAggregate_1.SubmissionFileCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileAvgAggregate_1.SubmissionFileAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileSumAggregate_1.SubmissionFileSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileMinAggregate_1.SubmissionFileMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileMaxAggregate_1.SubmissionFileMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileGroupBy.prototype, "_max", void 0);
SubmissionFileGroupBy = __decorate([
    TypeGraphQL.ObjectType("SubmissionFileGroupBy", {
        isAbstract: true
    })
], SubmissionFileGroupBy);
exports.SubmissionFileGroupBy = SubmissionFileGroupBy;
