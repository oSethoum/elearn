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
exports.TopicGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TopicAvgAggregate_1 = require("../outputs/TopicAvgAggregate");
const TopicCountAggregate_1 = require("../outputs/TopicCountAggregate");
const TopicMaxAggregate_1 = require("../outputs/TopicMaxAggregate");
const TopicMinAggregate_1 = require("../outputs/TopicMinAggregate");
const TopicSumAggregate_1 = require("../outputs/TopicSumAggregate");
let TopicGroupBy = class TopicGroupBy {
    id;
    name;
    years;
    departmentId;
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
], TopicGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], TopicGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], TopicGroupBy.prototype, "years", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "departmentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicCountAggregate_1.TopicCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicAvgAggregate_1.TopicAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicSumAggregate_1.TopicSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicMinAggregate_1.TopicMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicMaxAggregate_1.TopicMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicGroupBy.prototype, "_max", void 0);
TopicGroupBy = __decorate([
    TypeGraphQL.ObjectType("TopicGroupBy", {
        isAbstract: true
    })
], TopicGroupBy);
exports.TopicGroupBy = TopicGroupBy;
