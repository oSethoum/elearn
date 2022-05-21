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
exports.GroupByDepartmentArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DepartmentOrderByWithAggregationInput_1 = require("../../../inputs/DepartmentOrderByWithAggregationInput");
const DepartmentScalarWhereWithAggregatesInput_1 = require("../../../inputs/DepartmentScalarWhereWithAggregatesInput");
const DepartmentWhereInput_1 = require("../../../inputs/DepartmentWhereInput");
const DepartmentScalarFieldEnum_1 = require("../../../../enums/DepartmentScalarFieldEnum");
let GroupByDepartmentArgs = class GroupByDepartmentArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
__decorate([
    TypeGraphQL.Field(_type => DepartmentWhereInput_1.DepartmentWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByDepartmentArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DepartmentOrderByWithAggregationInput_1.DepartmentOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByDepartmentArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DepartmentScalarFieldEnum_1.DepartmentScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByDepartmentArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DepartmentScalarWhereWithAggregatesInput_1.DepartmentScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByDepartmentArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByDepartmentArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByDepartmentArgs.prototype, "skip", void 0);
GroupByDepartmentArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByDepartmentArgs);
exports.GroupByDepartmentArgs = GroupByDepartmentArgs;
