var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { FurnitureService } from './furniture.service.js';
import { CreateFurnitureDto } from './dto/create-furniture.dto.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';
let FurnitureController = class FurnitureController {
    furnitureService;
    constructor(furnitureService) {
        this.furnitureService = furnitureService;
    }
    getFurniture() {
        return this.furnitureService.getFurniture();
    }
    getFurnitureById(id) {
        return this.furnitureService.getFurnitureById(id);
    }
    createFurniture(dto) {
        return this.furnitureService.createFurniture(dto.type, dto.height, dto.width, dto.weight);
    }
    updateFurniture(id, dto) {
        return this.furnitureService.updateFurniture(id, dto);
    }
    deleteFurniture(id) {
        return this.furnitureService.deleteFurniture(id);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FurnitureController.prototype, "getFurniture", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FurnitureController.prototype, "getFurnitureById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFurnitureDto]),
    __metadata("design:returntype", void 0)
], FurnitureController.prototype, "createFurniture", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateFurnitureDto]),
    __metadata("design:returntype", void 0)
], FurnitureController.prototype, "updateFurniture", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FurnitureController.prototype, "deleteFurniture", null);
FurnitureController = __decorate([
    Controller('furniture'),
    __metadata("design:paramtypes", [FurnitureService])
], FurnitureController);
export { FurnitureController };
//# sourceMappingURL=furniture.controller.js.map