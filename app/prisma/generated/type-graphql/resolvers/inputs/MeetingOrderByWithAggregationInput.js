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
exports.MeetingOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MeetingAvgOrderByAggregateInput_1 = require("../inputs/MeetingAvgOrderByAggregateInput");
const MeetingCountOrderByAggregateInput_1 = require("../inputs/MeetingCountOrderByAggregateInput");
const MeetingMaxOrderByAggregateInput_1 = require("../inputs/MeetingMaxOrderByAggregateInput");
const MeetingMinOrderByAggregateInput_1 = require("../inputs/MeetingMinOrderByAggregateInput");
const MeetingSumOrderByAggregateInput_1 = require("../inputs/MeetingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MeetingOrderByWithAggregationInput = class MeetingOrderByWithAggregationInput {
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
    _max;
    _min;
    _sum;
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "duration", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "link", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "courseId", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingCountOrderByAggregateInput_1.MeetingCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingAvgOrderByAggregateInput_1.MeetingAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingMaxOrderByAggregateInput_1.MeetingMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingMinOrderByAggregateInput_1.MeetingMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => MeetingSumOrderByAggregateInput_1.MeetingSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingOrderByWithAggregationInput.prototype, "_sum", void 0);
MeetingOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("MeetingOrderByWithAggregationInput", {
        isAbstract: true
    })
], MeetingOrderByWithAggregationInput);
exports.MeetingOrderByWithAggregationInput = MeetingOrderByWithAggregationInput;
