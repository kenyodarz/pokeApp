export class PokemonDetail {
  constructor(
    public id: number | null = null,
    public order: number | null = null,
    public name: string | null = null,
    public height: number | null = null,
    public abilities: Ability[] = [],
    public spices: Species | null = null,
    public types: Type[] | null = [],
    public weight: number | null = null,
    public sprites: Sprite | null = null,
    public stats: Stat[] | null = []
  ) {}
}

class Ability {
  constructor(public name: string | null = null) {}
}
class Species {
  constructor(public url: string | null = null) {}
}
class Type {
  constructor(
    public slot: number | null = null,
    public type: {
      slot: string | null;
    }
  ) {}
}

class Sprite {
  constructor(public front_default: string | null = null) {}
}

class Stat {
  constructor(
    public base_stat: number | null = null,
    public stat: {
      name: string | null;
    }
  ) {}
}
