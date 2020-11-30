import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { Prisma, Hero } from '@prisma/client';
import { ApiProperty, ApiBody } from '@nestjs/swagger';

class Create implements Prisma.HeroCreateInput {
  @ApiProperty()
  name: string;
}

class Update implements Prisma.HeroUpdateInput {
  @ApiProperty()
  name: string;
}

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeros(): Promise<Hero[]> {
    return this.heroService.heros();
  }

  @Get(':id')
  getHero(@Param('id') id: string): Promise<Hero> {
    return this.heroService.hero({ id: Number(id) });
  }

  @Post()
  @ApiBody({ type: Create })
  async createHero(@Body() params: Prisma.HeroCreateInput): Promise<Hero> {
    return this.heroService.createUser(params);
  }

  @Put(':id')
  @ApiBody({ type: Update })
  updateHero(
    @Param('id') id: string,
    @Body() data: Prisma.HeroUpdateInput,
  ): Promise<Hero> {
    return this.heroService.updateUser({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hero> {
    return this.heroService.deleteUser({ id: Number(id) });
  }
}
