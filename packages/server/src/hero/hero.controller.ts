import { Controller, Get, Param } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero as HeroModel } from '@prisma/client';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeros(): Promise<HeroModel[]> {
    return this.heroService.heros();
  }

  @Get(':id')
  getHero(@Param('id') id: string): Promise<HeroModel> {
    return this.heroService.hero({ id: Number(id) });
  }
}
