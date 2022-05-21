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
exports.CourseGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CourseAvgAggregate_1 = require("../outputs/CourseAvgAggregate");
const CourseCountAggregate_1 = require("../outputs/CourseCountAggregate");
const CourseMaxAggregate_1 = require("../outputs/CourseMaxAggregate");
const CourseMinAggregate_1 = require("../outputs/CourseMinAggregate");
const CourseSumAggregate_1 = require("../outputs/CourseSumAggregate");
let CourseGroupBy = class CourseGroupBy {
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
    _sum;
    _min;
    _max;
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CourseGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CourseGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CourseGroupBy.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], CourseGroupBy.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CourseGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CourseGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "topicId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "teacherId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseCountAggregate_1.CourseCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseAvgAggregate_1.CourseAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseSumAggregate_1.CourseSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseMinAggregate_1.CourseMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CourseMaxAggregate_1.CourseMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "_max", void 0);
CourseGroupBy = __decorate([
    TypeGraphQL.ObjectType("CourseGroupBy", {
        isAbstract: true
    })
], CourseGroupBy);
exports.CourseGroupBy = CourseGroupBy;
