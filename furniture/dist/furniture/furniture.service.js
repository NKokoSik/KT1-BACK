var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { furniture } from './furniture.data.js';
let FurnitureService = class FurnitureService {
    getFurniture() {
        return furniture;
    }
    getFurnitureById(id) {
        const item = furniture.find((item) => item.id === id);
        if (!item) {
            throw new NotFoundException('Furniture not found');
        }
        return item;
    }
    createFurniture(type, height, width, weight) {
        const item = {
            id: uuid(),
            type,
            height,
            width,
            weight,
        };
        furniture.push(item);
        return item;
    }
    updateFurniture(id, dto) {
        const item = this.getFurnitureById(id);
        Object.assign(item, dto);
        return item;
    }
    deleteFurniture(id) {
        const item = this.getFurnitureById(id);
        const index = furniture.indexOf(item);
        furniture.splice(index, 1);
        return item;
    }
};
FurnitureService = __decorate([
    Injectable()
], FurnitureService);
export { FurnitureService };
//# sourceMappingURL=furniture.service.js.map