import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { furniture } from './furniture.data.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';

@Injectable()
export class FurnitureService {
  getFurniture() {
    return furniture;
  }

  getFurnitureById(id: string) {
    const item = furniture.find((item) => item.id === id);

    if (!item) {
      throw new NotFoundException('Furniture not found');
    }

    return item;
  }

  createFurniture(
    type: string,
    height: number,
    width: number,
    weight: number,
  ) {
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

  updateFurniture(id: string, dto: UpdateFurnitureDto) {
    const item = this.getFurnitureById(id);

    Object.assign(item, dto);

    return item;
  }

  deleteFurniture(id: string) {
    const item = this.getFurnitureById(id);

    const index = furniture.indexOf(item);

    furniture.splice(index, 1);

    return item;
  }
}