import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';
export declare class FurnitureService {
    getFurniture(): import("./furniture.types.js").Furniture[];
    getFurnitureById(id: string): import("./furniture.types.js").Furniture;
    createFurniture(type: string, height: number, width: number, weight: number): {
        id: string;
        type: string;
        height: number;
        width: number;
        weight: number;
    };
    updateFurniture(id: string, dto: UpdateFurnitureDto): import("./furniture.types.js").Furniture;
    deleteFurniture(id: string): import("./furniture.types.js").Furniture;
}
