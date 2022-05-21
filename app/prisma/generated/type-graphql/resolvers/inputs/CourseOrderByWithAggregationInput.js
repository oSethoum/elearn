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
exports.CourseOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CourseAvgOrderByAggregateInput_1 = require("../inputs/CourseAvgOrderByAggregateInput");
const CourseCountOrderByAggregateInput_1 = require("../inputs/CourseCountOrderByAggregateInput");
const CourseMaxOrderByAggregateInput_1 = require("../inputs/CourseMaxOrderByAggregateInput");
const CourseMinOrderByAggregateInput_1 = require("../inputs/CourseMinOrderByAggregateInput");
const CourseSumOrderByAggregateInput_1 = require("../inputs/CourseSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CourseOrderByWithAggregationInput = class CourseOrderByWithAggregationInput {
    id;
    title;
    year;
    description;
    published;
    createdAt;
    updatedAt;
    topicId;
    teacherId;
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
], CourseOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "topicId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "teacherId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseCountOrderByAggregateInput_1.CourseCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseAvgOrderByAggregateInput_1.CourseAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseMaxOrderByAggregateInput_1.CourseMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseMinOrderByAggregateInput_1.CourseMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseSumOrderByAggregateInput_1.CourseSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "_sum", void 0);
CourseOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("CourseOrderByWithAggregationInput", {
        isAbstract: true
    })
], CourseOrderByWithAggregationInput);
exports.CourseOrderByWithAggregationInput = CourseOrderByWithAggregationInput;
