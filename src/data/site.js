// =========================================================================
// CENTRAL SITE CONFIGURATION
// Replace the placeholder values in this file with the restaurant's real
// information. Nothing else in the codebase should need to change.
// =========================================================================

export const restaurant = {
  name: 'Ember & Oak',
  tagline: 'A Wood-Fired American Kitchen',
  shortDescription:
    'Live-fire cooking, seasonal ingredients, and a dining room built for slowing down.',
  phone: '(312) 555-0148',
  phoneHref: 'tel:+13125550148',
  email: 'hello@emberandoak.com',
  address: {
    line1: '482 Larkspur Avenue',
    line2: 'Chicago, IL 60614',
    mapQuery: '482 Larkspur Avenue, Chicago, IL 60614',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
};

export const hours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '5:00 PM – 9:30 PM' },
  { day: 'Wednesday', hours: '5:00 PM – 9:30 PM' },
  { day: 'Thursday', hours: '5:00 PM – 10:00 PM' },
  { day: 'Friday', hours: '5:00 PM – 11:00 PM' },
  { day: 'Saturday', hours: '11:30 AM – 2:30 PM  ·  5:00 PM – 11:00 PM' },
  { day: 'Sunday', hours: '11:30 AM – 2:30 PM  ·  5:00 PM – 9:00 PM' },
];

export const specialHours = [
  { label: 'Thanksgiving Day', note: 'Closed' },
  { label: 'Christmas Eve', note: 'Open, 5:00 PM – 8:00 PM (limited seating)' },
  { label: 'Christmas Day', note: 'Closed' },
  { label: "New Year's Eve", note: 'Open, 5:00 PM – 12:00 AM' },
];

// -------------------------------------------------------------------------
// Navigation
// -------------------------------------------------------------------------
export const primaryNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Banquet Facility', path: '/banquet' },
  { label: 'Catering', path: '/catering' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Hosting', path: '/hosting' },
  { label: 'Hours', path: '/hours' },
  { label: 'Contact', path: '/contact' },
];

export const footerNav = [
  { label: 'About Us', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Menu Kit', path: '/menu-kit' },
  { label: 'Banquet Facility', path: '/banquet' },
  { label: 'Catering', path: '/catering' },
  { label: 'Private Hosting', path: '/hosting' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Visiting Hours', path: '/hours' },
  { label: 'Contact & Directions', path: '/contact' },
  { label: 'Reserve a Table', path: '/booking' },
];

// -------------------------------------------------------------------------
// Images — swap these Unsplash source URLs for the client's own photography
// once it's available. Keys describe where each image is used.
// -------------------------------------------------------------------------
export const images = {
  heroHome:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1800&auto=format&fit=crop',
  heroInterior:
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1400&auto=format&fit=crop',
  hearthFire:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop',
  chefPlating:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1400&auto=format&fit=crop',
  diningRoom:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
  dishSteak:
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  dishPasta:
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
  dishSalad:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  dishDessert:
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
  banquetHall:
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
  banquetTable:
    'https://images.unsplash.com/photo-1519167758481-83f29c8e8ee5?q=80&w=1200&auto=format&fit=crop',
  banquetWedding:
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  cateringSpread:
    'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop',
  cateringStaff:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  cateringPlatters:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  privateHosting:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  aboutStory:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  aboutTeam:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop',
  contactMap:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
};

// -------------------------------------------------------------------------
// Signature dishes shown on the homepage
// -------------------------------------------------------------------------
export const signatureDishes = [
  {
    name: 'Hearth-Roasted Bone-In Ribeye',
    description: '22oz, dry-aged 28 days, finished over red oak coals',
    price: '$68',
    image: images.dishSteak,
  },
  {
    name: 'Charred Sweet Corn Agnolotti',
    description: 'brown butter, aged pecorino, chili crumb',
    price: '$29',
    image: images.dishPasta,
  },
  {
    name: 'Smoked Beet & Burrata',
    description: 'blood orange, pistachio, torn mint, sourdough crisp',
    price: '$18',
    image: images.dishSalad,
  },
];

// -------------------------------------------------------------------------
// Full Menu
// -------------------------------------------------------------------------
export const menu = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      {
        name: 'Smoked Beet & Burrata',
        description: 'Blood orange, pistachio, torn mint, sourdough crisp',
        price: 18,
        tags: ['vegetarian'],
      },
      {
        name: 'Charred Octopus',
        description: 'Fingerling potato, salsa verde, lemon oil',
        price: 24,
        tags: ['gf'],
      },
      {
        name: 'Wood-Oven Flatbread',
        description: 'Whipped ricotta, honey, calabrian chili, thyme',
        price: 16,
        tags: ['vegetarian'],
      },
      {
        name: 'Crispy Pork Belly Bites',
        description: 'Apple mostarda, charred scallion',
        price: 17,
      },
    ],
  },
  {
    id: 'soups-salads',
    name: 'Soups & Salads',
    items: [
      {
        name: 'Roasted Squash Bisque',
        description: 'Brown butter, sage, toasted pepitas',
        price: 13,
        tags: ['vegetarian', 'gf'],
      },
      {
        name: 'Ember & Oak Wedge',
        description: 'Smoked blue cheese, candied walnut, buttermilk dressing',
        price: 16,
        tags: ['gf'],
      },
      {
        name: 'Heirloom Tomato Panzanella',
        description: 'Grilled bread, basil, aged balsamic',
        price: 15,
        tags: ['vegetarian'],
        seasonal: true,
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        name: 'Hearth-Roasted Bone-In Ribeye',
        description: '22oz, dry-aged 28 days, finished over red oak coals',
        price: 68,
        tags: ['gf'],
        signature: true,
      },
      {
        name: 'Charred Sweet Corn Agnolotti',
        description: 'Brown butter, aged pecorino, chili crumb',
        price: 29,
        tags: ['vegetarian'],
      },
      {
        name: 'Whole Roasted Branzino',
        description: 'Fennel, castelvetrano olive, preserved lemon',
        price: 38,
        tags: ['gf'],
      },
      {
        name: 'Wood-Fired Half Chicken',
        description: 'Herb jus, charred lemon, market greens',
        price: 32,
        tags: ['gf'],
      },
      {
        name: 'Maple-Glazed Duck Breast',
        description: 'Roasted root vegetables, cherry gastrique',
        price: 41,
        tags: ['gf'],
        seasonal: true,
      },
    ],
  },
  {
    id: 'specialties',
    name: "Chef's Specialties",
    items: [
      {
        name: 'Tomahawk for Two',
        description: '38oz, hearth-charred, rosemary butter, table-side carve',
        price: 118,
        tags: ['gf'],
        signature: true,
      },
      {
        name: 'Whole Roasted Cauliflower',
        description: 'Romesco, herb oil, pine nut, crispy capers',
        price: 26,
        tags: ['vegetarian', 'gf'],
      },
      {
        name: "Fisherman's Ember Stew",
        description: 'Shellfish, saffron broth, grilled sourdough',
        price: 36,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    items: [
      { name: 'Charred Broccolini', description: 'Chili, garlic, lemon', price: 11, tags: ['vegetarian', 'gf'] },
      { name: 'Cast-Iron Potatoes', description: 'Rosemary, parmesan', price: 10, tags: ['vegetarian', 'gf'] },
      { name: 'Wild Mushroom Risotto', description: 'Truffle oil, chive', price: 14, tags: ['vegetarian', 'gf'] },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        name: 'Smoked Chocolate Torte',
        description: 'Salted caramel, espresso crémeux',
        price: 14,
        image: images.dishDessert,
      },
      { name: 'Bourbon Pecan Pie', description: 'Vanilla bean chantilly', price: 12 },
      { name: 'Charred Peach Crumble', description: 'Brown butter oat streusel, vanilla ice cream', price: 13, seasonal: true },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Barrel-Aged Old Fashioned', description: 'House bourbon, smoked orange bitters', price: 17 },
      { name: 'Rosemary Paloma', description: 'Tequila, grapefruit, rosemary syrup', price: 15 },
      { name: 'Reserve Cabernet, Glass', description: 'Napa Valley', price: 19 },
      { name: 'Sparkling Elderflower Press', description: 'Non-alcoholic', price: 8 },
    ],
  },
];

// -------------------------------------------------------------------------
// Gallery
// -------------------------------------------------------------------------
export const gallery = [
  { src: images.diningRoom, alt: 'Warm dining room with wood tables and low pendant lighting', category: 'Interior' },
  { src: images.hearthFire, alt: 'Live-fire hearth with glowing embers', category: 'Kitchen' },
  { src: images.dishSteak, alt: 'Bone-in ribeye plated with charred herbs', category: 'Food' },
  { src: images.chefPlating, alt: 'Chef plating a dish in the open kitchen', category: 'Kitchen' },
  { src: images.dishPasta, alt: 'Agnolotti pasta with brown butter sauce', category: 'Food' },
  { src: images.banquetHall, alt: 'Private banquet room set for an event', category: 'Events' },
  { src: images.dishSalad, alt: 'Smoked beet and burrata salad', category: 'Food' },
  { src: images.heroInterior, alt: 'Restaurant entrance and bar area', category: 'Interior' },
  { src: images.banquetWedding, alt: 'Long table set for a private celebration', category: 'Events' },
  { src: images.dishDessert, alt: 'Smoked chocolate torte dessert', category: 'Food' },
  { src: images.cateringStaff, alt: 'Catering staff preparing a spread', category: 'Events' },
  { src: images.banquetTable, alt: 'Elegant table setting with candlelight', category: 'Interior' },
];

export const galleryCategories = ['All', 'Interior', 'Kitchen', 'Food', 'Events'];

// -------------------------------------------------------------------------
// Banquet
// -------------------------------------------------------------------------
export const banquet = {
  capacity: 'Seated up to 90 · Reception up to 140',
  rooms: [
    { name: 'The Hearth Room', capacity: 'Seated 40 / Reception 60', description: 'Our main private room, anchored by a second wood-fired hearth and full-length windows.' },
    { name: 'The Oak Room', capacity: 'Seated 90 / Reception 140', description: 'The full banquet hall — our largest space, ideal for weddings and large celebrations.' },
    { name: 'The Cellar', capacity: 'Seated 16', description: 'An intimate wine cellar space for board dinners and tasting menus.' },
  ],
  eventTypes: ['Weddings & Receptions', 'Rehearsal Dinners', 'Corporate Dinners & Offsites', 'Milestone Birthdays', 'Holiday Parties', 'Memorial Gatherings'],
  packages: [
    { name: 'The Gathering', price: 'From $85 / guest', detail: '3-course plated menu, welcome bar, dedicated event captain. Minimum 20 guests.' },
    { name: 'The Celebration', price: 'From $135 / guest', detail: 'Passed hors d\u2019oeuvres, 4-course menu, wine pairing, custom floral consultation. Minimum 40 guests.' },
    { name: 'The Full Oak Room', price: 'Custom quote', detail: 'Full-venue buyout with dedicated bar, live-fire chef\u2019s table, and full production support.' },
  ],
  amenities: ['Dedicated event captain', 'In-house AV & sound', 'Custom menu tastings', 'Full bar service', 'Valet coordination', 'Floral & rental partners'],
};

// -------------------------------------------------------------------------
// Catering
// -------------------------------------------------------------------------
export const catering = {
  intro: 'The Ember & Oak hearth, brought to your event — from backyard gatherings to full-service corporate catering.',
  services: [
    { name: 'Drop-Off Catering', description: 'Ready-to-serve platters and trays, delivered on your schedule.' },
    { name: 'Full-Service Catering', description: 'On-site chefs, service staff, and live-fire cooking stations.' },
    { name: 'Corporate Catering', description: 'Boxed lunches, breakfast spreads, and executive dinner service.' },
    { name: 'Private Events', description: 'Custom menus for showers, milestone celebrations, and holiday parties.' },
  ],
  eventTypes: ['Weddings', 'Corporate Events', 'Private Parties', 'Holiday Gatherings', 'Fundraisers', 'Backyard Celebrations'],
  packages: [
    { name: 'The Essentials', price: '$38 / guest', detail: 'Two mains, two sides, salad, bread service. 20 guest minimum.' },
    { name: 'The Signature', price: '$58 / guest', detail: 'Passed apps, three mains including hearth-roasted protein, full sides & dessert.' },
    { name: 'The Live Fire', price: '$85 / guest', detail: 'On-site chef, live-fire grilling station, full bar package available.' },
  ],
  menuHighlights: ['Hearth-Roasted Meats & Whole Fish', 'Wood-Oven Flatbreads', 'Seasonal Salads & Sides', 'House-Made Desserts', 'Full & Non-Alcoholic Bar Packages'],
  process: [
    { step: 'Inquire', detail: 'Share your date, guest count, and vision through our catering form.' },
    { step: 'Taste & Plan', detail: 'We build a custom menu together, with a tasting for larger events.' },
    { step: 'Confirm', detail: 'Lock in your date with a signed proposal and deposit.' },
    { step: 'We Cook', detail: 'Our team handles delivery, setup, service, and cleanup.' },
  ],
};

export const hosting = {
  intro:
    'Beyond our private rooms, Ember & Oak offers flexible hosting options for smaller gatherings, semi-private dining, and restaurant buyouts — with the same live-fire menu our guests know.',
  options: [
    {
      name: 'Chef\u2019s Counter Hosting',
      capacity: 'Up to 8 guests',
      description: 'A seat at the hearth. Watch the kitchen work through a multi-course tasting menu.',
    },
    {
      name: 'Semi-Private Dining',
      capacity: 'Up to 24 guests',
      description: 'A curtained section of the main dining room for smaller parties who still want restaurant energy.',
    },
    {
      name: 'Full Restaurant Buyout',
      capacity: 'Up to 120 guests',
      description: 'Host the entire restaurant, including the hearth and bar, for your own private evening.',
    },
  ],
  included: ['Dedicated host & service team', 'Custom or set menu options', 'Beverage & wine pairing options', 'Flexible timing outside standard service'],
};

// -------------------------------------------------------------------------
// Testimonials (used sparingly on Home / About)
// -------------------------------------------------------------------------
export const testimonials = [
  {
    quote: 'The ribeye alone is worth the reservation. Ember & Oak feels like it has been part of this neighborhood for twenty years, not two.',
    name: 'Chicago Magazine',
  },
  {
    quote: 'We hosted our rehearsal dinner in the Hearth Room and the team handled every detail without us having to ask twice.',
    name: 'M. Alvarez, private event guest',
  },
];
