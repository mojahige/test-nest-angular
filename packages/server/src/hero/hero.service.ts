import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Hero, HeroWhereUniqueInput } from '@prisma/client';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async hero(heroWhereUniqueInput: HeroWhereUniqueInput): Promise<Hero | null> {
    return this.prisma.hero.findOne({
      where: heroWhereUniqueInput,
    });
  }

  async heros(): Promise<Hero[]> {
    return this.prisma.hero.findMany();
  }
}
