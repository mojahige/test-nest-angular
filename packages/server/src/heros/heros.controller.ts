import { Controller, Get, Param } from '@nestjs/common';
import { HerosService } from './heros.service';
import { Heros } from './heros.interface';

@Controller('heros')
export class HerosController {
  constructor(private heroService: HerosService) {}

  @Get()
  getHeros(): Heros {
    return this.heroService.getHeros();
  }

  @Get(':id')
  getHero(@Param('id') id: string) {
    return this.heroService.getHero(id);
  }
}
