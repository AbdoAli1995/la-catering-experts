import { CateringCompany, TacoProvider } from '../types';

export const CATERING_COMPANIES: CateringCompany[] = [
  {
    id: 'bite-catering',
    name: 'Bite Catering Couture',
    categories: ['corporate', 'weddings'],
    area: 'Culver City & Westside (3380 S Robertson Blvd)',
    tags: ['Weddings', 'Corporate', 'Custom Menus'],
    url: 'https://bitecatering.net',
    priceLevel: '$$$',
    description:
      'Chef-driven catering based near Culver City offering plated wedding dinners, executive corporate luncheons, interactive chef stations, and custom menu design across Westside Los Angeles.'
  },
  {
    id: 'crateful-catering',
    name: 'Crateful Catering Los Angeles',
    categories: ['corporate'],
    area: 'West Hollywood & Beverly Hills',
    tags: ['Corporate', 'Brand Activations', 'Fine Dining'],
    url: 'https://cratefulcatering.com',
    priceLevel: '$$$$',
    description:
      'Bespoke hospitality and culinary production in West Hollywood tailored for luxury brand launches, entertainment industry receptions, and multi-course executive dining.'
  },
  {
    id: 'love-catering',
    name: 'Love Catering',
    categories: ['corporate', 'film'],
    area: 'Burbank & San Fernando Valley',
    tags: ['Corporate', 'Film & TV Sets', 'Studio Production'],
    url: 'https://lovecateringinc.com',
    priceLevel: '$$$',
    description:
      'Studio lot and on-location production catering out of Burbank providing hot crew meals, craft service setups, and farm-to-table corporate buffets across the San Fernando Valley.'
  },
  {
    id: 'bites-and-bashes',
    name: 'Bites & Bashes Catering',
    categories: ['corporate', 'weddings'],
    area: 'Lomita, Torrance & South Bay',
    tags: ['Weddings', 'Private Events', 'Corporate'],
    url: 'https://bitesandbashes.com',
    priceLevel: '$$$',
    description:
      'South Bay boutique caterer known for abundant artisan grazing tables, seated wedding receptions, and full-service bar and staffing coordination for coastal and private venues.'
  },
  {
    id: 'hungry-bear',
    name: 'Hungry Bear Catering',
    categories: ['weddings'],
    area: 'Silver Lake & East Hollywood (90029)',
    tags: ['Weddings', 'Custom Menus', 'Rehearsal Dinners'],
    url: 'https://hungrybearcatering.com',
    priceLevel: '$$',
    description:
      'Scratch-kitchen catering operating from East Hollywood with comfort-forward seasonal menus, family-style wedding platters, and customizable dietary accommodations.'
  },
  {
    id: 'whoa-nelly',
    name: 'Whoa Nelly Catering',
    categories: ['weddings'],
    area: 'Burbank, Pasadena & San Gabriel Valley',
    tags: ['Weddings', 'Seasonal California', 'Full-Service'],
    url: 'https://whoanellycatering.com',
    priceLevel: '$$$',
    description:
      'Seasonal California event caterer sourcing local farmers market produce for garden weddings, estate celebrations, and full-service dinner receptions throughout Pasadena and Greater LA.'
  },
  {
    id: 'fundamental-events',
    name: 'Fundamental Events',
    categories: ['corporate'],
    area: 'Inglewood, LAX & Westside',
    tags: ['Corporate Events', 'Weddings', 'Cocktail Service'],
    url: 'https://fundamentalevents.com',
    priceLevel: '$$$',
    description:
      'Modern culinary and beverage catering based in Inglewood delivering polished corporate receptions, passed hors d’oeuvres, and full bar management across LA County.'
  },
  {
    id: 'summit-event',
    name: 'Summit Event Catering',
    categories: ['corporate'],
    area: 'Santa Fe Springs & Southeast LA',
    tags: ['Corporate', 'Weddings', 'Venue Partnerships'],
    url: 'https://summiteventcatering.com',
    priceLevel: '$$',
    description:
      'Large-scale event and convention caterer offering structured corporate buffet packages, banquet staffing, and coordination across approved Southern California venues.'
  },
  {
    id: 'tgis-catering',
    name: 'TGIS Catering Services',
    categories: ['weddings'],
    area: 'Long Beach & Harbor Area',
    tags: ['Weddings', 'Waterfront Venues', 'Galas'],
    url: 'https://tgiscatering.com',
    priceLevel: '$$$',
    description:
      'Long Beach full-service caterer managing waterfront weddings, historic museum galas, and formal banquets with integrated rental and event staffing support.'
  },
  {
    id: 'taco-catering-company',
    name: 'The Taco Catering Company',
    categories: ['corporate', 'tacos'],
    area: 'Central LA & Mid-City',
    tags: ['Tacos', 'Corporate', 'Mobile Carts'],
    url: undefined,
    isClaimable: true,
    priceLevel: '$',
    description:
      'Mobile taco cart service providing on-site grilling, handmade tortillas, traditional house salsas, and buffet-style sides for office lunches and private gatherings.'
  },
  {
    id: 'top-flight-tacos',
    name: 'Top Flight Tacos Catering',
    categories: ['tacos'],
    area: 'Mid-Wilshire & Westside (90019)',
    tags: ['Tacos', 'Live Grill', 'Private Events'],
    url: 'https://topflighttacos.com',
    priceLevel: '$$',
    description:
      'Mid-Wilshire on-site taco cart caterer featuring marinated carne asada, grilled chicken, fresh guacamole, and house-made aguas frescas for backyard parties and corporate mixers.'
  },
  {
    id: 'ko-tacos',
    name: 'KO Tacos Catering',
    categories: ['corporate', 'tacos'],
    area: 'Downtown LA (DTLA) & South Park (90015)',
    tags: ['Tacos', 'Corporate', 'Office Lunches'],
    url: undefined,
    isClaimable: true,
    priceLevel: '$',
    description:
      'Downtown LA taco catering built for fast-paced office lunches, creative studio mixers, and casual group events with straightforward per-person taco bar packages.'
  },
  {
    id: 'ranchos-onsite',
    name: 'Ranchos Onsite Tacos',
    categories: ['corporate', 'tacos'],
    area: 'Downtown LA & Pico-Union (90015)',
    tags: ['Live Taco Stations', 'Corporate', 'Events'],
    url: undefined,
    isClaimable: true,
    priceLevel: '$',
    description:
      'Live-grill Mexican taco stations serving mesquite-seasoned carne asada, al pastor, and pollo asado alongside warm tortillas and full condiment bars.'
  },
  {
    id: 'the-taco-cart',
    name: 'The Taco Cart Catering',
    categories: ['corporate', 'tacos'],
    area: 'Greater Los Angeles & Valley',
    tags: ['Taco Carts', 'Taco Service', 'Corporate'],
    url: 'https://thetacocart.com',
    priceLevel: '$$',
    description:
      'Full-service mobile taco cart catering offering customizable multi-protein packages, vegetarian fillings, rice and beans, and uniformed on-site taqueros.'
  },
  {
    id: 'fernandos-catering',
    name: "Fernando's Catering",
    categories: ['tacos', 'weddings'],
    area: 'East Los Angeles & Boyle Heights',
    tags: ['Tacos', 'Weddings', 'Mexican Banquets'],
    url: 'https://www.fernandoscatering.com',
    priceLevel: '$$',
    description:
      'East Los Angeles family-owned caterer delivering traditional Mexican wedding banquets, live taco bars, enchilada trays, and full event staffing.'
  },
  {
    id: 'taco-bout-amazing',
    name: 'Taco Bout Amazing',
    categories: ['tacos'],
    area: 'Jefferson Park & West Adams (90018)',
    tags: ['Tacos', 'Family Parties', 'Backyard Events'],
    url: undefined,
    isClaimable: true,
    priceLevel: '$',
    description:
      'Neighborhood taco cart caterer serving West Adams and Central LA with generous grilled meat portions, fresh cilantro-onion toppings, and family party setups.'
  },
  {
    id: 'unicos-tacos',
    name: 'Unicos Tacos Catering',
    categories: ['tacos'],
    area: 'San Gabriel Valley & Greater LA',
    tags: ['Tacos', 'Community Events', 'Drop-Off'],
    url: undefined,
    isClaimable: true,
    priceLevel: '$',
    description:
      'Budget-friendly taco bar and tray catering designed for family reunions, youth sports banquets, and community celebrations across the San Gabriel Valley and LA County.'
  },
  {
    id: 'eastside-tacos',
    name: 'Eastside Tacos',
    categories: ['corporate', 'tacos'],
    area: 'Arts District, Echo Park & East LA',
    tags: ['Tacos', 'Corporate', 'Vegan & Gluten-Free'],
    url: 'https://eastsidetacos.com',
    priceLevel: '$$',
    description:
      'Modern Eastside street-taco caterer offering gluten-free corn tortillas, plant-based fillings, and classic meats tailored for tech offices and production crews.'
  },
  {
    id: 'luxe-bites',
    name: 'Luxe Bites',
    categories: ['charcuterie'],
    area: 'Hollywood, Beverly Hills & Westside',
    tags: ['Charcuterie', 'Grazing Tables', 'Brand Events'],
    url: 'https://luxebitesla.com',
    priceLevel: '$$$',
    description:
      'Artisan charcuterie boards, styled cheese and fruit grazing tables, and individual brunch or dessert boxes crafted for Hollywood screenings and corporate gifting.'
  },
  {
    id: 'marbled-la',
    name: 'Marbled LA',
    categories: ['corporate', 'film'],
    area: 'Glendale, Burbank & North Hollywood',
    tags: ['Corporate', 'Production Sets', 'Drop-Off'],
    url: 'https://marbledla.com',
    priceLevel: '$$$',
    description:
      'Glendale-based culinary team specializing in sustainable drop-off buffets, individually boxed studio crew meals, and executive lunch spreads across North LA.'
  },
  {
    id: 'contemporary-catering',
    name: 'Contemporary Catering',
    categories: ['corporate', 'weddings'],
    area: 'Beverly Hills, Santa Monica & Westside',
    tags: ['Weddings', 'Corporate', 'Farm-to-Table'],
    url: 'https://www.contemporarycatering.com',
    priceLevel: '$$$$',
    description:
      'Established Westside full-service caterer executing custom organic wedding menus, nonprofit galas, and high-touch corporate hospitality from Malibu to Downtown LA.'
  },
  {
    id: 'border-grill-catering',
    name: 'Border Grill Catering',
    categories: ['corporate', 'weddings'],
    area: 'Downtown LA (DTLA) & Santa Monica',
    tags: ['Corporate', 'Weddings', 'Modern Mexican'],
    url: 'https://www.bordergrill.com',
    priceLevel: '$$$',
    description:
      'Modern Mexican and Latin catering from Chefs Mary Sue Milliken and Susan Feniger offering vibrant taco bars, ceviche stations, and full-service wedding menus.'
  }
];

export const TACO_PROVIDERS: TacoProvider[] = [
  {
    id: 'the-taco-cart-catering',
    name: 'The Taco Cart Catering',
    category: ['mobile', 'event'],
    area: 'Los Angeles, Westside & San Fernando Valley',
    description:
      'Full-service live taco cart catering with customizable multi-meat packages, handmade tortillas, and complete salsa bars for weddings, private parties, and corporate events.',
    url: 'https://thetacocartcatering.com/',
    specialty: 'Handmade tortillas & custom meat marinades',
    tags: ['carne-asada-carnitas'],
    minGuests: 30,
    startingPrice: '$20/person'
  },
  {
    id: 'fuego-tacos-catering',
    name: 'Fuego Tacos Catering',
    category: ['mobile', 'event'],
    area: 'Central LA, Hollywood & Silver Lake',
    description:
      'LA-based live taco cart caterer pairing traditional slow-cooked carnitas and carne asada with dedicated vegan hibiscus and mushroom taco options.',
    url: 'https://www.fuegotacocatering.com/',
    specialty: 'Vegan mushroom & hibiscus tacos + classic carnitas',
    tags: ['carne-asada-carnitas', 'vegan'],
    minGuests: 25,
    startingPrice: '$22/person'
  },
  {
    id: 'taco-genius',
    name: 'Taco Genius',
    category: ['mobile', 'event'],
    area: 'Greater Los Angeles & South Bay',
    description:
      'On-site taco-man grilling and full-service event catering featuring customizable taco and quesadilla packages for backyard celebrations and office lunches.',
    url: 'https://tacogenius.com/',
    specialty: 'Live Taco-Man grill experience & quesadilla bar',
    tags: ['carne-asada-carnitas'],
    minGuests: 35,
    startingPrice: '$19/person'
  },
  {
    id: 'leos-tacos-truck',
    name: "Leo's Tacos Truck",
    category: ['truck', 'event'],
    area: 'Mid-City, Hollywood & Greater LA',
    description:
      'Iconic Los Angeles taco truck and private event catering famous for spit-roasted al pastor carved to order; published guest minimums apply for private bookings.',
    url: 'https://www.leostacostruck.com/catering',
    specialty: 'Famous trompo al pastor sliced with grilled pineapple',
    tags: ['al-pastor'],
    minGuests: 50,
    startingPrice: '$25/person'
  },
  {
    id: 'tacos-mexla',
    name: 'Tacos MexLA',
    category: ['mobile', 'event', 'dropoff'],
    area: 'Downtown LA, East LA & San Gabriel Valley',
    description:
      'On-site taco cart catering, staffed buffet service, and drop-off delivery featuring slow-braised birria, suadero, and grilled nopales.',
    url: 'https://tacosmexla.com/',
    specialty: 'Suadero, Birria with consome, and grilled nopales',
    tags: ['birria', 'vegan'],
    minGuests: 30,
    startingPrice: '$21/person'
  },
  {
    id: 'acasa-food-truck',
    name: 'Acasa Food Truck',
    category: ['truck', 'event'],
    area: 'Encino, Sherman Oaks & San Fernando Valley',
    description:
      'Full-service Mexican taco truck catering out of Encino for weddings, milestone birthdays, studio shoots, and corporate events across the San Fernando Valley.',
    url: 'https://acasatruck.com/',
    specialty: 'Full taco truck setup with gourmet burritos and mulitas',
    tags: ['carne-asada-carnitas', 'gourmet-fusion'],
    minGuests: 40,
    startingPrice: '$24/person'
  },
  {
    id: 'tacos-tamix',
    name: 'Tacos Tamix',
    category: ['truck', 'event'],
    area: 'Downtown LA, Westlake & Greater LA',
    description:
      'Los Angeles taco truck catering team specializing in rotisserie trompo al pastor, carne asada, and traditional street-style garnishes for private events.',
    url: 'https://www.tacostamix.com/catering',
    specialty: 'Rotisserie trompo pastor and authentic street sides',
    tags: ['al-pastor', 'carne-asada-carnitas'],
    minGuests: 45,
    startingPrice: '$22/person'
  },
  {
    id: 'taco-maco-catering',
    name: 'Taco Maco Catering',
    category: ['mobile', 'event'],
    area: 'San Fernando Valley, Burbank & Glendale',
    description:
      'On-site grilled taco cart catering across Burbank, Glendale, and the Valley highlighting freshly pressed heirloom corn tortillas and house salsas.',
    url: 'https://www.tacomacocatering.com/',
    specialty: 'Freshly pressed heirloom corn tortillas on-site',
    tags: ['carne-asada-carnitas'],
    minGuests: 30,
    startingPrice: '$23/person'
  },
  {
    id: 'the-original-taco-man',
    name: 'The Original Taco-Man',
    category: ['mobile', 'event'],
    area: 'Los Angeles County & Gateway Cities',
    description:
      'Established mobile taco bar catering serving family fiestas, school events, and company luncheons across Los Angeles County for over two decades.',
    url: 'https://taco-man.com/',
    specialty: 'Over 20 years serving LA backyard fiestas & corporate luncheons',
    tags: ['carne-asada-carnitas'],
    minGuests: 40,
    startingPrice: '$18/person'
  },
  {
    id: 'pink-taquiza',
    name: 'Pink Taquiza',
    category: ['mobile', 'event'],
    area: 'West Hollywood, Beverly Hills & Central LA',
    description:
      'Signature pink mobile taco cart catering designed for weddings, bridal showers, and brand activations with handcrafted salsas and fresh-grilled fillings.',
    url: 'https://www.pinktaquiza.com/',
    specialty: 'Aesthetic pink cart presentation with artisanal salsas',
    tags: ['gourmet-fusion'],
    minGuests: 30,
    startingPrice: '$25/person'
  },
  {
    id: 'adens-taco-catering',
    name: "Aden's Taco Catering",
    category: ['mobile', 'event', 'dropoff'],
    area: 'Los Angeles County & South Bay',
    description:
      'Customizable on-site taco bar and drop-off packages offering multi-protein selections, classic sides, and optional churro dessert stations.',
    url: 'https://www.adenstacocatering.com/',
    specialty: 'Custom 3-meat and 4-meat packages with churro station',
    tags: ['carne-asada-carnitas'],
    minGuests: 30,
    startingPrice: '$20/person'
  },
  {
    id: 'soho-taco',
    name: 'SOHO TACO',
    category: ['mobile', 'event'],
    area: 'Greater LA, South Bay & Coastal Venues',
    description:
      'Gourmet mobile taco bar catering featuring hand-pressed tortillas, prime grilled meats, seafood options, and vibrant scratch-made salsas for upscale events.',
    url: 'https://www.sohotaco.com/',
    specialty: 'Handmade corn tortillas & gourmet salsas',
    tags: ['gourmet-fusion', 'seafood-baja'],
    minGuests: 30,
    startingPrice: '$21/person'
  },
  {
    id: 'tacos-zapata',
    name: 'Tacos Zapata',
    category: ['mobile', 'event'],
    area: 'Pasadena, Highland Park & East LA',
    description:
      'Mobile live-grill taco cart catering serving Pasadena and Northeast LA with traditional marinated meats, fresh toppings, and full setup and cleanup.',
    url: 'https://tacoszapata.com/',
    specialty: 'Live grill taco cart & traditional meat marinades',
    tags: ['carne-asada-carnitas', 'al-pastor'],
    minGuests: 25,
    startingPrice: '$20/person'
  }
];
