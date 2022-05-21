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
exports.MeetingUpdateManyWithoutCourseInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MeetingCreateOrConnectWithoutCourseInput_1 = require("../inputs/MeetingCreateOrConnectWithoutCourseInput");
const MeetingCreateWithoutCourseInput_1 = require("../inputs/MeetingCreateWithoutCourseInput");
const MeetingScalarWhereInput_1 = require("../inputs/MeetingScalarWhereInput");
const MeetingUpdateManyWithWhereWithoutCourseInput_1 = require("../inputs/MeetingUpdateManyWithWhereWithoutCourseInput");
const MeetingUpdateWithWhereUniqueWithoutCourseInput_1 = require("../inputs/MeetingUpdateWithWhereUniqueWithoutCourseInput");
const MeetingUpsertWithWhereUniqueWithoutCourseInput_1 = require("../inputs/MeetingUpsertWithWhereUniqueWithoutCourseInput");
const MeetingWhereUniqueInput_1 = require("../inputs/MeetingWhereUniqueInput");
let MeetingUpdateManyWithoutCourseInput = class MeetingUpdateManyWithoutCourseInput {
    create;
    connectOrCreate;
    upsert;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
__decorate([
    TypeGraphQL.Field(_type => [MeetingCreateWithoutCourseInput_1.MeetingCreateWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingCreateOrConnectWithoutCourseInput_1.MeetingCreateOrConnectWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingUpsertWithWhereUniqueWithoutCourseInput_1.MeetingUpsertWithWhereUniqueWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingWhereUniqueInput_1.MeetingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingWhereUniqueInput_1.MeetingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingWhereUniqueInput_1.MeetingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingWhereUniqueInput_1.MeetingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingUpdateWithWhereUniqueWithoutCourseInput_1.MeetingUpdateWithWhereUniqueWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingUpdateManyWithWhereWithoutCourseInput_1.MeetingUpdateManyWithWhereWithoutCourseInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MeetingScalarWhereInput_1.MeetingScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MeetingUpdateManyWithoutCourseInput.prototype, "deleteMany", void 0);
MeetingUpdateManyWithoutCourseInput = __decorate([
    TypeGraphQL.InputType("MeetingUpdateManyWithoutCourseInput", {
        isAbstract: true
    })
], MeetingUpdateManyWithoutCourseInput);
exports.MeetingUpdateManyWithoutCourseInput = MeetingUpdateManyWithoutCourseInput;
