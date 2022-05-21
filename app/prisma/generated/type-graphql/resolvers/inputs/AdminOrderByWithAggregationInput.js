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
exports.AdminOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AdminAvgOrderByAggregateInput_1 = require("../inputs/AdminAvgOrderByAggregateInput");
const AdminCountOrderByAggregateInput_1 = require("../inputs/AdminCountOrderByAggregateInput");
const AdminMaxOrderByAggregateInput_1 = require("../inputs/AdminMaxOrderByAggregateInput");
const AdminMinOrderByAggregateInput_1 = require("../inputs/AdminMinOrderByAggregateInput");
const AdminSumOrderByAggregateInput_1 = require("../inputs/AdminSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdminOrderByWithAggregationInput = class AdminOrderByWithAggregationInput {
    id;
    lastName;
    firstName;
    userId;
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
], AdminOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminCountOrderByAggregateInput_1.AdminCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminAvgOrderByAggregateInput_1.AdminAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminMaxOrderByAggregateInput_1.AdminMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminMinOrderByAggregateInput_1.AdminMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AdminSumOrderByAggregateInput_1.AdminSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AdminOrderByWithAggregationInput.prototype, "_sum", void 0);
AdminOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("AdminOrderByWithAggregationInput", {
        isAbstract: true
    })
], AdminOrderByWithAggregationInput);
exports.AdminOrderByWithAggregationInput = AdminOrderByWithAggregationInput;
