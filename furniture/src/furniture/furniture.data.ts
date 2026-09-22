import { v4 as uuid } from 'uuid';
import { Furniture } from './furniture.types.js';

export const furniture: Furniture[] = [
  {
    id: uuid(),
    type: 'chair',
    height: 100,
    width: 50,
    weight: 10,
  },
  {
    id: uuid(),
    type: 'table',
    height: 80,
    width: 120,
    weight: 30,
  },
  {
    id: uuid(),
    type: 'wardrobe',
    height: 200,
    width: 100,
    weight: 70,
  },
];