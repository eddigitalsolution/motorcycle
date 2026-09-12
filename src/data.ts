import type { JourneyStage, Motorcycle, RoutePackage } from './types';

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'city',
    name: 'CITY',
    subtitle: 'NEON ASPHALT & URBAN PULSE',
    tagline: 'Navigate the grid with razor-sharp agility.',
    speed: '45 - 80 KM/H',
    distance: '0 - 25 KM',
    terrain: 'Metropolis Grid',
    recommendedBikeId: 'triumph-street-triple',
    bgImage: '/assets/bikes/triumph-street-triple.jpg',
    audioTone: 'Urban Pulse'
  },
  {
    id: 'highway',
    name: 'HIGHWAY',
    subtitle: 'THE INFINITE HORIZON',
    tagline: 'Unleash raw power as lines blur past at terminal velocity.',
    speed: '120 - 200 KM/H',
    distance: '25 - 180 KM',
    terrain: 'Multi-lane Freeway',
    recommendedBikeId: 'ducati-panigale-v4',
    bgImage: '/assets/bikes/ducati-panigale-v4-s.jpg',
    audioTone: 'High RPM Scream'
  },
  {
    id: 'mountain',
    name: 'MOUNTAIN',
    subtitle: 'SERPENTINE HAIRPINS & ELEVATION',
    tagline: 'Lean deep into 180-degree switchbacks carved into alpine granite.',
    speed: '60 - 110 KM/H',
    distance: '180 - 340 KM',
    terrain: 'Alpine Passes',
    recommendedBikeId: 'bmw-r1250-gs',
    bgImage: '/assets/bikes/bmw-r1250-gs-adventure.jpg',
    audioTone: 'Boxer Twin Roar'
  },
  {
    id: 'coast',
    name: 'COAST',
    subtitle: 'PACIFIC CLIFFS & OCEAN BREEZE',
    tagline: 'Sweep along cliffside curves above crashing ocean waves.',
    speed: '70 - 100 KM/H',
    distance: '340 - 480 KM',
    terrain: 'Coastal Highway 1',
    recommendedBikeId: 'yamaha-r1m',
    bgImage: '/assets/bikes/yamaha-yzf-r1m-carbon.jpg',
    audioTone: 'Crossplane Symphony'
  },
  {
    id: 'sunset',
    name: 'SUNSET',
    subtitle: 'GOLDEN HOUR SILHOUETTE',
    tagline: 'Cruise into dusk as the sky ignites in amber and crimson.',
    speed: '50 - 90 KM/H',
    distance: '480 - 600 KM',
    terrain: 'Golden Boulevard',
    recommendedBikeId: 'harley-fatboy',
    bgImage: '/assets/bikes/harley-fatboy.jpg',
    audioTone: 'V-Twin Thump'
  }
];

export const MOTORCYCLES: Motorcycle[] = [
  {
    id: 'ducati-panigale-v4',
    name: 'Panigale V4 S',
    brand: 'Ducati',
    category: 'Superbike',
    engineCc: 1103,
    hp: 214,
    topSpeed: '299+ km/h',
    pricePerDay: 780,
    badge: 'Most Popular',
    image: '/assets/bikes/ducati-panigale-v4-s.jpg',
    features: ['Desmosedici Stradale V4', 'Ohlins Electronic Suspension', 'Cornering ABS EVO', 'Quickshifter Up/Down'],
    specs: {
      transmission: '6-Speed with DQS',
      weight: '174 kg (Dry)',
      seatHeight: '835 mm',
      fuelCapacity: '16 L'
    }
  },
  {
    id: 'bmw-r1250-gs',
    name: 'R 1250 GS Adventure',
    brand: 'BMW',
    category: 'Adventure',
    engineCc: 1254,
    hp: 136,
    topSpeed: '215 km/h',
    pricePerDay: 620,
    badge: 'Touring King',
    image: '/assets/bikes/bmw-r1250-gs-adventure.jpg',
    features: ['ShiftCam Technology', 'Dynamic ESA', 'Full Aluminum Panniers', '7-inch TFT Display'],
    specs: {
      transmission: '6-Speed Shaft Drive',
      weight: '268 kg (Wet)',
      seatHeight: '890 mm',
      fuelCapacity: '30 L'
    }
  },
  {
    id: 'yamaha-r1m',
    name: 'YZF-R1M Carbon',
    brand: 'Yamaha',
    category: 'Superbike',
    engineCc: 998,
    hp: 200,
    topSpeed: '298 km/h',
    pricePerDay: 720,
    badge: 'Track Beast',
    image: '/assets/bikes/yamaha-yzf-r1m-carbon.jpg',
    features: ['Crossplane CP4 Engine', 'Ohlins ERS Suspension', 'Carbon Fiber Bodywork', 'Telemetry System'],
    specs: {
      transmission: '6-Speed Constant Mesh',
      weight: '202 kg (Wet)',
      seatHeight: '860 mm',
      fuelCapacity: '17 L'
    }
  },
  {
    id: 'kawasaki-zh2',
    name: 'Z H2 Supercharged',
    brand: 'Kawasaki',
    category: 'Naked',
    engineCc: 998,
    hp: 200,
    topSpeed: '280 km/h',
    pricePerDay: 580,
    image: '/assets/bikes/kawasaki-zh2.jpg',
    features: ['Balanced Supercharged Engine', 'IMU 6-Axis Electronics', 'KTRC Traction Control', 'Brembo Stylema Callipers'],
    specs: {
      transmission: '6-Speed Assist & Slipper',
      weight: '239 kg (Wet)',
      seatHeight: '830 mm',
      fuelCapacity: '19 L'
    }
  },
  {
    id: 'harley-fatboy',
    name: 'Fat Boy 114',
    brand: 'Harley-Davidson',
    category: 'Cruiser',
    engineCc: 1868,
    hp: 94,
    topSpeed: '175 km/h',
    pricePerDay: 550,
    badge: 'Classic Icon',
    image: '/assets/bikes/harley-fatboy.jpg',
    features: ['Milwaukee-Eight 114 V-Twin', 'Lakester Cast Solid Wheels', 'Signature LED Headlamp', 'Chrome Detailing'],
    specs: {
      transmission: '6-Speed Cruise Drive',
      weight: '304 kg (Dry)',
      seatHeight: '675 mm',
      fuelCapacity: '18.9 L'
    }
  },
  {
    id: 'triumph-street-triple',
    name: 'Street Triple RS 765',
    brand: 'Triumph',
    category: 'Naked',
    engineCc: 765,
    hp: 130,
    topSpeed: '245 km/h',
    pricePerDay: 480,
    image: '/assets/bikes/triumph-street-triple.jpg',
    features: ['Moto2 Derived Triple Engine', 'Brembo Stylema Brakes', 'Cornering ABS & Traction Control', 'TFT Instrument Screen'],
    specs: {
      transmission: '6-Speed Triumph Shift Assist',
      weight: '188 kg (Wet)',
      seatHeight: '836 mm',
      fuelCapacity: '15 L'
    }
  }
];

export const ROUTE_PACKAGES: RoutePackage[] = [
  {
    id: 'pacific-coast-run',
    title: 'PACIFIC COAST RUN',
    stage: 'COAST & MOUNTAIN',
    days: '3 Days / 2 Nights',
    distance: '650 KM',
    price: 2199,
    highlight: 'Big Sur Bixby Bridge & Ocean Cliff Curving',
    includedGear: ['AGV K6 Helmet', 'Dainese Racing Suit', 'Cardo Packtalk Mesh'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'alpine-pass-expedition',
    title: 'ALPINE PASS EXPEDITION',
    stage: 'MOUNTAIN & HIGHWAY',
    days: '5 Days / 4 Nights',
    distance: '1,200 KM',
    price: 3699,
    highlight: 'High Altitude Hairpins & Glacier Valleys',
    includedGear: ['Shoei Neotec II', 'Gore-Tex Adventure Jacket', 'Alloy Pannier Set'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sunset-strip-cruise',
    title: 'SUNSET STRIP & CITY NIGHTS',
    stage: 'CITY & SUNSET',
    days: '1 Day (24 Hours)',
    distance: '150 KM',
    price: 799,
    highlight: 'Golden Hour Highway Sweep & Urban Lights',
    includedGear: ['Harley Retro Helmet', 'Roland Sands Leather Jacket'],
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=80'
  }
];
