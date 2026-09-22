import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FurnitureService } from './furniture.service.js';
import { CreateFurnitureDto } from './dto/create-furniture.dto.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';

@Controller('furniture')
export class FurnitureController {
  constructor(private readonly furnitureService: FurnitureService) {}

  @Get()
  getFurniture() {
    return this.furnitureService.getFurniture();
  }

  @Get(':id')
  getFurnitureById(@Param('id') id: string) {
    return this.furnitureService.getFurnitureById(id);
  }

  @Post()
  createFurniture(@Body() dto: CreateFurnitureDto) {
    return this.furnitureService.createFurniture(
      dto.type,
      dto.height,
      dto.width,
      dto.weight,
    );
  }

  @Patch(':id')
  updateFurniture(
    @Param('id') id: string,
    @Body() dto: UpdateFurnitureDto,
  ) {
    return this.furnitureService.updateFurniture(id, dto);
  }

  @Delete(':id')
  deleteFurniture(@Param('id') id: string) {
    return this.furnitureService.deleteFurniture(id);
  }
}