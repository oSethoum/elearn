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
exports.AggregateAssignment = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssignmentAvgAggregate_1 = require("../outputs/AssignmentAvgAggregate");
const AssignmentCountAggregate_1 = require("../outputs/AssignmentCountAggregate");
const AssignmentMaxAggregate_1 = require("../outputs/AssignmentMaxAggregate");
const AssignmentMinAggregate_1 = require("../outputs/AssignmentMinAggregate");
const AssignmentSumAggregate_1 = require("../outputs/AssignmentSumAggregate");
let AggregateAssignment = class AggregateAssignment {
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
__decorate([
    TypeGraphQL.Field(_type => AssignmentCountAggregate_1.AssignmentCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateAssignment.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentAvgAggregate_1.AssignmentAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateAssignment.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentSumAggregate_1.AssignmentSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateAssignment.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentMinAggregate_1.AssignmentMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateAssignment.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AssignmentMaxAggregate_1.AssignmentMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateAssignment.prototype, "_max", void 0);
AggregateAssignment = __decorate([
    TypeGraphQL.ObjectType("AggregateAssignment", {
        isAbstract: true
    })
], AggregateAssignment);
exports.AggregateAssignment = AggregateAssignment;
