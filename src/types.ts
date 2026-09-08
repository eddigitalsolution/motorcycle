export interface JourneyStage {
  id: 'city' | 'highway' | 'mountain' | 'coast' | 'sunset';
  name: string;
  subtitle: string;
  tagline: string;
  speed: string;
  distance: string;
  terrain: string;
  recommendedBikeId: string;
  bgImage: string;
  audioTone: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  category: 'Superbike' | 'Adventure' | 'Cruiser' | 'Naked';
  engineCc: number;
  hp: number;
  topSpeed: string;
  pricePerDay: number;
  image: string;
  badge?: string;
  features: string[];
  specs: {
    transmission: string;
    weight: string;
    seatHeight: string;
    fuelCapacity: string;
  };
}

export interface RoutePackage {
  id: string;
  title: string;
  stage: string;
  days: string;
  distance: string;
  price: number;
  highlight: string;
  includedGear: string[];
  image: string;
}
