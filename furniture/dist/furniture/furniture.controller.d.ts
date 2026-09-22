import { FurnitureService } from './furniture.service.js';
import { CreateFurnitureDto } from './dto/create-furniture.dto.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';
export declare class FurnitureController {
    private readonly furnitureService;
    constructor(furnitureService: FurnitureService);
    getFurniture(): import("./furniture.types.js").Furniture[];
    getFurnitureById(id: string): import("./furniture.types.js").Furniture;
    createFurniture(dto: CreateFurnitureDto): {
        id: string;
        type: string;
        height: number;
        width: number;
        weight: number;
    };
    updateFurniture(id: string, dto: UpdateFurnitureDto): import("./furniture.types.js").Furniture;
    deleteFurniture(id: string): import("./furniture.types.js").Furniture;
}
