import { PrismaClient, HeroCreateInput } from "@prisma/client"

const prisma = new PrismaClient()

async function createHero(data: HeroCreateInput) {
  return prisma.hero.create({ data })
}

async function main() {
  await Promise.all([
    createHero({ name: 'Dr Nice' }),
    createHero({ name: 'Narco' }),
    createHero({ name: 'Bombasto' }),
    createHero({ name: 'Celeritas' }),
    createHero({ name: 'Magneta' }),
    createHero({ name: 'RubberMan' }),
    createHero({ name: 'Dr IQ' }),
    createHero({ name: 'Magma' }),
    createHero({ name: 'Tornado' })
  ])

  const allHeros = await prisma.hero.findMany()
  console.log(allHeros)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })