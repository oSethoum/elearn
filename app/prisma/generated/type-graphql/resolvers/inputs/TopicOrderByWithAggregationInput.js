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
exports.TopicOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TopicAvgOrderByAggregateInput_1 = require("../inputs/TopicAvgOrderByAggregateInput");
const TopicCountOrderByAggregateInput_1 = require("../inputs/TopicCountOrderByAggregateInput");
const TopicMaxOrderByAggregateInput_1 = require("../inputs/TopicMaxOrderByAggregateInput");
const TopicMinOrderByAggregateInput_1 = require("../inputs/TopicMinOrderByAggregateInput");
const TopicSumOrderByAggregateInput_1 = require("../inputs/TopicSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TopicOrderByWithAggregationInput = class TopicOrderByWithAggregationInput {
    id;
    name;
    years;
    departmentId;
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
], TopicOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "years", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "departmentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicCountOrderByAggregateInput_1.TopicCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicAvgOrderByAggregateInput_1.TopicAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicMaxOrderByAggregateInput_1.TopicMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicMinOrderByAggregateInput_1.TopicMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => TopicSumOrderByAggregateInput_1.TopicSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TopicOrderByWithAggregationInput.prototype, "_sum", void 0);
TopicOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("TopicOrderByWithAggregationInput", {
        isAbstract: true
    })
], TopicOrderByWithAggregationInput);
exports.TopicOrderByWithAggregationInput = TopicOrderByWithAggregationInput;
