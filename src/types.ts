export interface Character {
  name: string;
  gender: string;
  age: string | number;
  originalHair: string;
  transformHair: string;
  eyes: string;
  casualOutfit: string;
  transformOutfit: string;
  personality: string;
  feature: string;
  ability: string;
  code: string;
}

export interface Faction {
  id: string;
  name: string;
  characters: Character[];
}

export interface MapLocation {
  id: number;
  name: string;
  desc?: string;
}
