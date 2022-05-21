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
exports.MeetingGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MeetingAvgAggregate_1 = require("../outputs/MeetingAvgAggregate");
const MeetingCountAggregate_1 = require("../outputs/MeetingCountAggregate");
const MeetingMaxAggregate_1 = require("../outputs/MeetingMaxAggregate");
const MeetingMinAggregate_1 = require("../outputs/MeetingMinAggregate");
const MeetingSumAggregate_1 = require("../outputs/MeetingSumAggregate");
let MeetingGroupBy = class MeetingGroupBy {
    id;
    title;
    description;
    date;
    startTime;
    duration;
    link;
    createdAt;
    updatedAt;
    courseId;
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
], MeetingGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MeetingGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MeetingGroupBy.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MeetingGroupBy.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MeetingGroupBy.prototype, "duration", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "link", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MeetingGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MeetingGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "courseId", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingCountAggregate_1.MeetingCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingAvgAggregate_1.MeetingAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingSumAggregate_1.MeetingSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingMinAggregate_1.MeetingMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingMaxAggregate_1.MeetingMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingGroupBy.prototype, "_max", void 0);
MeetingGroupBy = __decorate([
    TypeGraphQL.ObjectType("MeetingGroupBy", {
        isAbstract: true
    })
], MeetingGroupBy);
exports.MeetingGroupBy = MeetingGroupBy;
