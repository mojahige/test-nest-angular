import { Injectable } from '@nestjs/common';
import { Heros } from './heros.interface';

@Injectable()
export class HerosService {
  private readonly heros: Heros = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  getHeros() {
    return this.heros;
  }

  getHero(id: string) {
    return this.heros.find((hero) => hero.id === +id);
  }
}
