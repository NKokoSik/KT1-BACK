import { Module } from '@nestjs/common';
import { FurnitureService } from './furniture.service.js';
import { FurnitureController } from './furniture.controller.js';

@Module({
  providers: [FurnitureService],
  controllers: [FurnitureController]
})
export class FurnitureModule {}
