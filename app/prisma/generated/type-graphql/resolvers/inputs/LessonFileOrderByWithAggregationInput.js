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
exports.LessonFileOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LessonFileAvgOrderByAggregateInput_1 = require("../inputs/LessonFileAvgOrderByAggregateInput");
const LessonFileCountOrderByAggregateInput_1 = require("../inputs/LessonFileCountOrderByAggregateInput");
const LessonFileMaxOrderByAggregateInput_1 = require("../inputs/LessonFileMaxOrderByAggregateInput");
const LessonFileMinOrderByAggregateInput_1 = require("../inputs/LessonFileMinOrderByAggregateInput");
const LessonFileSumOrderByAggregateInput_1 = require("../inputs/LessonFileSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LessonFileOrderByWithAggregationInput = class LessonFileOrderByWithAggregationInput {
    id;
    createdAt;
    updatedAt;
    type;
    name;
    link;
    lessonId;
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
], LessonFileOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "link", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "lessonId", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileCountOrderByAggregateInput_1.LessonFileCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileAvgOrderByAggregateInput_1.LessonFileAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileMaxOrderByAggregateInput_1.LessonFileMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileMinOrderByAggregateInput_1.LessonFileMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonFileSumOrderByAggregateInput_1.LessonFileSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileOrderByWithAggregationInput.prototype, "_sum", void 0);
LessonFileOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("LessonFileOrderByWithAggregationInput", {
        isAbstract: true
    })
], LessonFileOrderByWithAggregationInput);
exports.LessonFileOrderByWithAggregationInput = LessonFileOrderByWithAggregationInput;
