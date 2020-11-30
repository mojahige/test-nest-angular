import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma, Hero } from '@prisma/client';

interface HerosParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.HeroWhereUniqueInput;
  where?: Prisma.HeroWhereInput;
  orderBy?: Prisma.HeroOrderByInput;
}

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async hero(
    userWhereUniqueInput: Prisma.HeroWhereUniqueInput,
  ): Promise<Hero | null> {
    return this.prisma.hero.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async heros(): Promise<Hero[]>;
  async heros(params: HerosParams): Promise<Hero[]>;

  async heros(params?: HerosParams): Promise<Hero[]> {
    if (!params) {
      return this.prisma.hero.findMany();
    }

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.hero.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.HeroCreateInput): Promise<Hero> {
    return this.prisma.hero.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.HeroWhereUniqueInput;
    data: Prisma.HeroUpdateInput;
  }): Promise<Hero> {
    const { where, data } = params;
    return this.prisma.hero.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.HeroWhereUniqueInput): Promise<Hero> {
    return this.prisma.hero.delete({
      where,
    });
  }
}
