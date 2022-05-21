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
exports.LessonFileUpdateManyWithoutLessonInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LessonFileCreateOrConnectWithoutLessonInput_1 = require("../inputs/LessonFileCreateOrConnectWithoutLessonInput");
const LessonFileCreateWithoutLessonInput_1 = require("../inputs/LessonFileCreateWithoutLessonInput");
const LessonFileScalarWhereInput_1 = require("../inputs/LessonFileScalarWhereInput");
const LessonFileUpdateManyWithWhereWithoutLessonInput_1 = require("../inputs/LessonFileUpdateManyWithWhereWithoutLessonInput");
const LessonFileUpdateWithWhereUniqueWithoutLessonInput_1 = require("../inputs/LessonFileUpdateWithWhereUniqueWithoutLessonInput");
const LessonFileUpsertWithWhereUniqueWithoutLessonInput_1 = require("../inputs/LessonFileUpsertWithWhereUniqueWithoutLessonInput");
const LessonFileWhereUniqueInput_1 = require("../inputs/LessonFileWhereUniqueInput");
let LessonFileUpdateManyWithoutLessonInput = class LessonFileUpdateManyWithoutLessonInput {
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
    TypeGraphQL.Field(_type => [LessonFileCreateWithoutLessonInput_1.LessonFileCreateWithoutLessonInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileCreateOrConnectWithoutLessonInput_1.LessonFileCreateOrConnectWithoutLessonInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileUpsertWithWhereUniqueWithoutLessonInput_1.LessonFileUpsertWithWhereUniqueWithoutLessonInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileWhereUniqueInput_1.LessonFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileWhereUniqueInput_1.LessonFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileWhereUniqueInput_1.LessonFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileWhereUniqueInput_1.LessonFileWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileUpdateWithWhereUniqueWithoutLessonInput_1.LessonFileUpdateWithWhereUniqueWithoutLessonInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileUpdateManyWithWhereWithoutLessonInput_1.LessonFileUpdateManyWithWhereWithoutLessonInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LessonFileScalarWhereInput_1.LessonFileScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], LessonFileUpdateManyWithoutLessonInput.prototype, "deleteMany", void 0);
LessonFileUpdateManyWithoutLessonInput = __decorate([
    TypeGraphQL.InputType("LessonFileUpdateManyWithoutLessonInput", {
        isAbstract: true
    })
], LessonFileUpdateManyWithoutLessonInput);
exports.LessonFileUpdateManyWithoutLessonInput = LessonFileUpdateManyWithoutLessonInput;
