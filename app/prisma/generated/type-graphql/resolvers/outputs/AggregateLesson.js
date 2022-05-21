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
exports.AggregateLesson = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LessonAvgAggregate_1 = require("../outputs/LessonAvgAggregate");
const LessonCountAggregate_1 = require("../outputs/LessonCountAggregate");
const LessonMaxAggregate_1 = require("../outputs/LessonMaxAggregate");
const LessonMinAggregate_1 = require("../outputs/LessonMinAggregate");
const LessonSumAggregate_1 = require("../outputs/LessonSumAggregate");
let AggregateLesson = class AggregateLesson {
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
__decorate([
    TypeGraphQL.Field(_type => LessonCountAggregate_1.LessonCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateLesson.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonAvgAggregate_1.LessonAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateLesson.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonSumAggregate_1.LessonSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateLesson.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonMinAggregate_1.LessonMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateLesson.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => LessonMaxAggregate_1.LessonMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateLesson.prototype, "_max", void 0);
AggregateLesson = __decorate([
    TypeGraphQL.ObjectType("AggregateLesson", {
        isAbstract: true
    })
], AggregateLesson);
exports.AggregateLesson = AggregateLesson;
