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
exports.SubmissionFileOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SubmissionFileAvgOrderByAggregateInput_1 = require("../inputs/SubmissionFileAvgOrderByAggregateInput");
const SubmissionFileCountOrderByAggregateInput_1 = require("../inputs/SubmissionFileCountOrderByAggregateInput");
const SubmissionFileMaxOrderByAggregateInput_1 = require("../inputs/SubmissionFileMaxOrderByAggregateInput");
const SubmissionFileMinOrderByAggregateInput_1 = require("../inputs/SubmissionFileMinOrderByAggregateInput");
const SubmissionFileSumOrderByAggregateInput_1 = require("../inputs/SubmissionFileSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubmissionFileOrderByWithAggregationInput = class SubmissionFileOrderByWithAggregationInput {
    id;
    createdAt;
    updatedAt;
    link;
    name;
    type;
    submissionId;
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
], SubmissionFileOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "link", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "submissionId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileCountOrderByAggregateInput_1.SubmissionFileCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileAvgOrderByAggregateInput_1.SubmissionFileAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileMaxOrderByAggregateInput_1.SubmissionFileMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileMinOrderByAggregateInput_1.SubmissionFileMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SubmissionFileSumOrderByAggregateInput_1.SubmissionFileSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SubmissionFileOrderByWithAggregationInput.prototype, "_sum", void 0);
SubmissionFileOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("SubmissionFileOrderByWithAggregationInput", {
        isAbstract: true
    })
], SubmissionFileOrderByWithAggregationInput);
exports.SubmissionFileOrderByWithAggregationInput = SubmissionFileOrderByWithAggregationInput;
