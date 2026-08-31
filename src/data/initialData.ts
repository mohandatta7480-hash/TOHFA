import type { Category, Product, Enquiry } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-corporate',
    name: 'Corporate Gifting',
    slug: 'corporate',
    description: 'Bespoke executive gift sets, sustainable desk suites, artisanal wooden folios, pop art mindfulness puzzles, and premium corporate hampers.',
    coverImage: '/images/products/corp_bamboo_slate_suite.png',
    active: true,
    featuredHighlight: 'Bespoke executive hampers and sustainable desk suites'
  },
  {
    id: 'cat-festive',
    name: 'Festive Gifting',
    slug: 'festive',
    description: 'Curated example celebration hampers for Diwali, New Year, and auspicious occasions. 100% customizable boxes where you can handpick items from our vast gourmet, gadget, and merchandise ranges.',
    coverImage: '/images/category_festive.jpg',
    active: true,
    featuredHighlight: 'Artisanal brassware, gourmet delights, and bespoke festival boxes'
  },
  {
    id: 'cat-edible',
    name: 'Edible Gifting',
    slug: 'edible',
    description: 'Handcrafted pure ghee Indian sweets, royal dry fruit platters, roasted Saras Che khakhras, dehydrated orchard fruits, and gourmet bakery cookies. 100% choosable flavors and combinations of utmost quality and fresh taste.',
    coverImage: '/images/category_edible.jpg',
    active: true,
    featuredHighlight: 'Traditional mithai, royal dry fruits, and gourmet snacking'
  },
  {
    id: 'cat-merchandise',
    name: 'Customizable Merchandise',
    slug: 'merchandise',
    description: 'Custom printable wooden tea coaster sets, executive cardholders, stick-on phone card pockets, personalized leather journals, engraved metal pens, and corporate apparel. 100% customizable with your custom design or logo.',
    coverImage: '/images/category_merchandise.jpg',
    active: true,
    featuredHighlight: 'Custom apparel, desk coasters, and everyday branded merchandise'
  },
  {
    id: 'cat-gadgets',
    name: 'Gadget Gifting',
    slug: 'gadgets',
    description: 'Ergonomic multi-angle aluminum laptop stands, 360-degree swivel rotating phone docks, and precision desktop phone cradles. 100% choosable colors and company brand name printable.',
    coverImage: '/images/category_gadgets.jpg',
    active: true,
    featuredHighlight: 'Ergonomic laptop risers and precision 360 swivel docks'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  // ==========================================
  // CUSTOMIZABLE MERCHANDISE (100% Customizable & Printable)
  // ==========================================
  {
    id: 'prod-merch-1',
    name: 'Phone Pasteable Stick-On Card Holder',
    slug: 'phone-pasteable-stick-on-card-holder',
    description: 'Adhesive card pocket that sticks securely to the back of any phone or case. Holds credit cards, ID cards, and transit passes. 100% customizable with custom design, logo, and text printing.',
    longDescription: 'A slim adhesive card wallet that mounts directly to smartphones or protective cases using strong residue-free adhesive backing. Holds 1 to 2 essential cards for daily convenience. 100% customizable: print any design, logo, or text across the entire front surface.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_phone_pasteable_card_holder.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Print any custom design, company logo, or text)',
      'Material': 'Durable Leatherette with Strong Adhesive Backing',
      'Capacity': 'Holds 1 to 2 standard credit or ID cards',
      'Compatibility': 'Universal fit for all smartphones and cases',
      'Installation': 'Peel and stick adhesive backing'
    },
    customizationOptions: [
      'Full surface custom logo and artwork printing',
      'Multiple base color options',
      'Individual protective packaging'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-2',
    name: 'Natural Wooden Tea Coaster Set with Stand',
    slug: 'natural-wooden-tea-coaster-set',
    description: 'Set of natural wooden round tea and coffee coasters with matching wooden holder stand. 100% customizable with laser engraving or color printing of your design or company logo.',
    longDescription: 'Round wooden coaster set crafted from natural finished wood, complete with a compact wooden storage stand. Protects desk and table surfaces from drink rings. 100% customizable with your choice of laser engraving, screen printing, or full-color design on every coaster.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_wooden_tea_coaster_set.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engraving or color printing of any logo or design)',
      'Inclusions': 'Round Wooden Coasters with Matching Wooden Holder Stand',
      'Material': 'Natural Finished Solid Wood',
      'Shape': 'Round Coasters with Beveled Edge',
      'Usage': 'Desktop and tabletop protection for hot and cold beverages'
    },
    customizationOptions: [
      'Laser engraved logo on each coaster',
      'Color screen printing or UV print',
      'Branded packaging box with custom label'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-3',
    name: 'Executive Pocket Card Holder',
    slug: 'executive-pocket-card-holder',
    description: 'Pocket business card holder with stainless steel metal trim and magnetic flip closure. 100% customizable with laser engraved name, company logo, or design.',
    longDescription: 'A slim pocket card case combining textured leatherette with a polished stainless steel accent strip. Features a secure magnetic closure. 100% customizable: engrave or print any person name, company logo, or artwork on the metal plate and leatherette body.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_executive_card_holder.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engrave or print any name, logo, or design)',
      'Material': 'Textured Leatherette Body with Polished Stainless Steel Accent',
      'Closure': 'Magnetic Snap Flip Cover',
      'Capacity': 'Holds 15 to 20 standard business cards or 5 to 7 credit cards',
      'Format': 'Slim Pocket Size'
    },
    customizationOptions: [
      'Laser engraving on metal plate',
      'Debossed or screen printed logo on leatherette',
      'Individual gift box packaging'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-4',
    name: 'Customizable Round Neck T-Shirt',
    slug: 'customizable-round-neck-tshirt',
    description: 'Cotton round neck t-shirt for corporate events, team uniforms, and merchandise. 100% customizable with screen printing, DTF, or embroidery on chest, back, and sleeves.',
    longDescription: 'Comfortable everyday crew neck t-shirt made with combed cotton fabric. Suitable for corporate teams, promotional events, and brand merchandise. 100% customizable: print or embroider any artwork, slogan, or corporate logo across front, back, or sleeves.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_round_neck_tshirt.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Print or embroider any design, text, or artwork)',
      'Fabric': '100% Combed Cotton Fabric',
      'Fit & Style': 'Regular Fit Crew Neck Short Sleeve',
      'Sizes Available': 'S, M, L, XL, XXL, 3XL',
      'Printing Techniques': 'Screen Print, DTF Full-Color Print, or Direct Embroidery'
    },
    customizationOptions: [
      'Front chest, back, and sleeve custom printing',
      'Multiple fabric color options',
      'Custom neck label and individual polybag packaging'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-5',
    name: 'Customizable Collared Polo T-Shirt',
    slug: 'customizable-collared-polo-tshirt',
    description: 'Collared polo t-shirt with button placket and ribbed collar. 100% customizable with logo embroidery or print on front chest and full-back graphic printing.',
    longDescription: 'Short sleeve collared polo shirt crafted from breathable cotton pique fabric with ribbed collar and button placket. 100% customizable: embroider or print company logos on the front chest and print full-color graphics or text on the back.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_polo_tshirt.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Embroider or print any company logo, graphics, or text)',
      'Fabric': 'Cotton Pique Matty Knit Fabric',
      'Style': 'Ribbed Collar with 2-Button Placket',
      'Sizes Available': 'S, M, L, XL, XXL, 3XL',
      'Customization Areas': 'Left Chest Logo, Right Sleeve, Full Back Graphic'
    },
    customizationOptions: [
      'Chest logo embroidery or screen print',
      'Large back graphic or company slogan printing',
      'Multiple polo color options'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-6',
    name: 'Personalized Vintage Leather Journal & Pen Set',
    slug: 'personalized-vintage-leather-journal-pen-set',
    description: 'Vintage tan leatherette notebook with wraparound string tie, metal charm medallion, nameplate, and matching engraved pen. 100% customizable with laser engraved name or company logo.',
    longDescription: 'Tan leatherette journal featuring a wraparound tie string with antique coin charm, brass finish personalized nameplate, and a matching ballpoint pen. 100% customizable: engrave individual employee or client names, designations, or company logos on both the journal nameplate and pen barrel.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_personalized_leather_journal_pen.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engraved name or company logo on metal plate and pen)',
      'Inclusions': 'Leatherette Journal with Charm String Tie & Matching Engraved Pen',
      'Cover Material': 'Textured Tan Vegan Leatherette',
      'Paper Details': '192 Ruled Pages, 80 GSM Natural Cream Paper',
      'Closure': 'Wraparound Cord with Antique Coin Charm Medallion'
    },
    customizationOptions: [
      'Individual name engraving on metal plate',
      'Company logo engraving on pen barrel',
      'Custom greeting card inside box'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-7',
    name: 'Custom Engraved Executive Metal Pen',
    slug: 'custom-engraved-executive-metal-pen',
    description: 'Matte black metal ballpoint pen with gold-accented clip and smooth twist mechanism. 100% customizable with laser engraved individual name, monogram, or company logo.',
    longDescription: 'Weighted metal ballpoint pen with matte black barrel finish and polished gold clip. Provides smooth blue ink flow. 100% customizable: precision laser engraving for individual names, corporate brand logos, or milestone inscriptions.',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_custom_engraved_metal_pen.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Precision laser engraved name, monogram, or company logo)',
      'Body Finish': 'Matte Black Anodized Alloy with Gold-Plated Clip',
      'Mechanism': 'Twist-Action Metal Ballpoint',
      'Ink': 'Smooth Flow Blue / Black Refill',
      'Packaging': 'Individual Protective Pen Sleeve or Presentation Case'
    },
    customizationOptions: [
      'Laser engraved name or company logo',
      'Choice of gold or silver clip accents',
      'Custom gift box packaging'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },

  // ==========================================
  // GADGET GIFTING (Choosable Colors & Brand Printable)
  // ==========================================
  {
    id: 'prod-gadget-1',
    name: 'The ErgoFold Pro Silver Aluminum Laptop Stand',
    slug: 'ergofold-pro-silver-aluminum-laptop-stand',
    description: 'An ultra-portable multi-angle adjustable ergonomic laptop riser in anodized metallic silver finish. 100% choosable colors and company brand name laser printable on crossbars and legs.',
    longDescription: 'Engineered to elevate workplace ergonomics and promote healthy posture. This foldable metallic silver laptop stand features multi-level height adjustment, open ventilation for enhanced heat dissipation, anti-slip silicone cradles, and a compact collapsible design. 100% choosable colors and company logo laser printable for executive desk setups. Includes protective travel pouch.',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_ergofold_silver_laptop_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Color Options': '100% Choosable (Anodized Metallic Silver, Space Grey, Matte Black)',
      'Branding & Print': 'Company Brand Name & Corporate Logo Laser Engravable on Crossbars',
      'Material': 'Precision CNC Machined Aircraft-Grade Aluminum Alloy',
      'Adjustment': 'Multi-Level Ergonomic Incline Adjustment',
      'Compatibility': 'Universal Fit for all 10 to 17.3 inch Laptops and MacBooks',
      'Packaging': 'Protective Travel Pouch and Rigid Presentation Box'
    },
    customizationOptions: [
      '100% Choosable Metallic Finish Colors',
      'Laser Engraved Company Logo on Aluminum Crossbar',
      'Custom Printed Felt / Velvet Protective Carry Pouch',
      'Full Color Outer Gift Box Sleeve with Brand Story'
    ],
    badge: 'Choosable Colors • Brand Printable',
    active: true,
    featured: true,
    createdAt: '2026-02-24'
  },
  {
    id: 'prod-gadget-2',
    name: 'The ErgoFold Pro Matte Black Aluminum Laptop Stand',
    slug: 'ergofold-pro-black-aluminum-laptop-stand',
    description: 'A heavy-duty multi-angle adjustable ergonomic laptop riser in sleek matte black stealth finish. 100% choosable colors and company brand name laser printable on crossbars and legs.',
    longDescription: 'Designed for executive workstations and modern desk spaces. Crafted from high-strength aluminum alloy in a durable matte black sandblasted finish. Features multi-level angle settings, dual triangular support struts for rock-solid stability, rubberized device protection pads, and rapid folding mechanism. 100% choosable colors and company brand name printable.',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_ergofold_black_laptop_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Color Options': '100% Choosable (Matte Stealth Black, Metallic Silver, Space Grey)',
      'Branding & Print': 'Company Brand Name & Corporate Logo Laser Engravable or Screen Printable',
      'Material': 'Reinforced Sandblasted Aluminum Alloy with Anti-Scratch Coating',
      'Adjustment': 'Multi-Level Ergonomic Height and Angle Adjustment',
      'Compatibility': 'Universal Compatibility with Laptops, MacBooks, and Tablets',
      'Packaging': 'Protective Carry Sleeve and Corporate Presentation Box'
    },
    customizationOptions: [
      '100% Choosable Colorways',
      'Laser Engraved Corporate Logo on Support Arms',
      'Branded Velvet Storage Pouch',
      'Custom Box Sleeve with Employee Welcome Message'
    ],
    badge: 'Choosable Colors • Brand Printable',
    active: true,
    featured: true,
    createdAt: '2026-02-25'
  },
  {
    id: 'prod-gadget-3',
    name: 'The Orbit 360 Swivel Rotatable Desktop Mobile Stand',
    slug: 'orbit-360-swivel-rotatable-mobile-stand',
    description: 'A heavy-duty 360-degree rotating desktop smartphone and tablet stand with dual-hinge angle adjustment and cable pass-through channel. 100% choosable colors and corporate brand name printable.',
    longDescription: 'Designed for effortless desk collaboration and video meetings. Features a smooth 360-degree swivel bearing base with satisfying tactile rotation, dual-axis folding hinges for optimal viewing height, and non-scratch silicone pads. 100% choosable colors (Matte Black, Slate Grey, Silver Chrome) and corporate brand name laser printable on the front backplate.',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_orbit_360_mobile_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Color Options': '100% Choosable (Matte Black, Slate Grey, Silver Chrome, Rose Gold)',
      'Branding & Print': 'Company Brand Name & Logo Precision Laser Engravable on Faceplate',
      'Rotation': '360-Degree Mechanical Swivel Turntable Base',
      'Articulation': 'Dual-Hinge Height & Tilt Angle Adjustment',
      'Cable Routing': 'Integrated Cutout Slot for Charging Cables during use',
      'Material': 'Weighted Solid Aluminum Alloy with Anti-Skid Silicone Base'
    },
    customizationOptions: [
      '100% Choosable Body Color Options',
      'Laser Inscription of Corporate Logo & Slogan',
      'Custom Gift Box Packaging with Magnetic Flap',
      'Individual Employee Name Personalization'
    ],
    badge: '360 Swivel • Brand Printable',
    active: true,
    featured: true,
    createdAt: '2026-02-26'
  },
  {
    id: 'prod-gadget-4',
    name: 'The Apex Precision Aluminum Desktop Phone Cradle',
    slug: 'apex-precision-aluminum-desktop-phone-cradle',
    description: 'A sleek minimalist triangular desktop phone stand with anti-slip silicone cushioning and rear cable routing slot. 100% choosable colors and laser engraved company brand name.',
    longDescription: 'A modern desk essential offering a clean 60-degree viewing angle for hands-free video calls and notification monitoring. Made from a single piece of bent aerospace-grade aluminum with chamfered edges, protective silicone grips, and a rear cable pass-through hole. 100% choosable colors (Midnight Black, Space Grey, Rose Gold, Metallic Silver) and company brand name printable.',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_apex_precision_phone_cradle.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Color Options': '100% Choosable (Midnight Black, Space Grey, Rose Gold, Metallic Silver)',
      'Branding & Print': 'Company Brand Name Printable on Front Lip or Slanted Backrest',
      'Design': 'Solid Monolithic Aluminum Triangle with Curved Device Rest',
      'Protection': 'Soft Silicone Anti-Scratch Cushions on Face and Bottom',
      'Cable Port': 'Rear Cable Management Port for Clean Desk Charging'
    },
    customizationOptions: [
      '100% Choosable Metallic and Matte Color Finishes',
      'Laser Engraving on Slanted Faceplate or Base',
      'Custom Presentation Box with Corporate Sticker',
      'Welcome Note Card for Employee Onboarding Kits'
    ],
    badge: 'Choosable Colors • Brand Printable',
    active: true,
    featured: true,
    createdAt: '2026-02-27'
  },

  // ==========================================
  // EDIBLE GIFTING (100% Choosable Flavors & Sweets)
  // ==========================================
  {
    id: 'prod-edible-1',
    name: 'Traditional Royal Mithai Selection (Choose Your Sweets)',
    slug: 'traditional-royal-mithai-selection',
    description: 'Handcrafted pure ghee traditional Indian sweets of utmost quality and authentic taste. 100% choosable: select whatever sweets you want from Kaju Katli, Motichoor Ladoo, Kesar Peda, Pista Barfi, Anjeer Roll, and Dry Fruit Halwa.',
    longDescription: 'Prepared fresh using pure desi ghee and hand-selected dry fruits, this royal mithai collection offers the utmost taste and freshness for corporate gifting and festive hampers. Clients have complete freedom to choose whatever sweet varieties and ratios they want for their custom gift boxes. Encased in luxury food-grade gift boxes with custom corporate sleeves and greeting cards.',
    category: 'edible',
    categoryName: 'Edible Gifting',
    image: '/images/products/edible_royal_mithai_selection.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Flavor Choice': '100% Choosable (Select any sweet varieties you want)',
      'Available Sweets Selection': 'Kaju Katli, Pure Ghee Motichoor Ladoo, Kesar Peda, Pista Barfi, Roasted Anjeer Roll, Dry Fruit Halwa',
      'Quality & Purity': '100% Pure Desi Ghee & Premium Grade Nuts with No Artificial Preservatives',
      'Packaging Style': 'Rigid Presentation Sweet Box with Gold Inlay and Individual Compartments',
      'Branding & Print': 'Custom Outer Box Sleeve with Company Logo and Festive Message'
    },
    customizationOptions: [
      '100% Choosable Sweets Variety and Portions',
      'Custom Corporate Branded Outer Box Sleeve',
      'Sugar-Free and Organic Jaggery Options Available',
      'Vacuum Sealed Inner Tray for Extended Freshness',
      'Personalized Greeting Card with Leadership Notes'
    ],
    badge: '100% Choosable Sweets',
    active: true,
    featured: true,
    createdAt: '2026-02-19'
  },
  {
    id: 'prod-edible-2',
    name: 'Royal Gourmet Dry Fruits & Exotic Fruit Platter (Choose Your Mix)',
    slug: 'royal-dryfruits-exotic-fruit-platter',
    description: 'A lavish assortment of premium handpicked dry fruits and sun-ripened dehydrated fruits in a keepsake wooden tray. 100% choosable: pick whatever dry fruits and exotic fruits you want for your custom curation.',
    longDescription: 'A wholesome and regal gifting ensemble featuring jumbo grade nuts and naturally dehydrated fruits. Clients can choose whatever combination of dry fruits and exotic fruits they want, including California Almonds, Iranian Pistachios, Afghan Anjeer, Medjool Dates, Dried Turkish Apricots, Cranberries, and Dehydrated Kiwi. Presented in an artisan wooden serving tray with luxury festive ribbon.',
    category: 'edible',
    categoryName: 'Edible Gifting',
    image: '/images/products/edible_royal_dryfruits_platter.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Selection Freedom': '100% Choosable (Pick whatever dry fruits and dehydrated fruits you want)',
      'Available Nuts & Dry Fruits': 'Jumbo California Almonds, Cashews, Iranian Salted Pistachios, Afghan Anjeer, Medjool Dates',
      'Available Dehydrated Fruits': 'Sun-Dried Turkish Apricots, Dehydrated Apple Rings, Dried Cranberries, Dehydrated Kiwi, Dried Strawberries',
      'Presentation': 'Handcrafted Natural Wood Serving Tray with Satin Ribbon Bow',
      'Grade & Purity': 'AAA Jumbo Export Quality, 100% Natural, Nitrogen Flushed for Freshness'
    },
    customizationOptions: [
      '100% Choosable Dry Fruits and Dehydrated Fruit Mix',
      'Laser Engraved Wooden Tray with Corporate Emblem',
      'Individual Airtight Jars or Compartmentalized Presentation Tray',
      'Custom Satin Ribbon and Foil Stamped Gift Card',
      'Single Variety or Multi-Item Custom Combos'
    ],
    badge: '100% Choosable Mix',
    active: true,
    featured: true,
    createdAt: '2026-02-20'
  },
  {
    id: 'prod-edible-3',
    name: 'Saras Che Artisanal Coin Khakhra (Multiple Flavor Options)',
    slug: 'saras-che-artisanal-coin-khakhra',
    description: 'Authentic crispy mini coin khakhras from Saras Che, roasted oil-free to perfection. 100% choosable flavors: pick from Cheese, Methi, Jeera, Masala, Peri Peri, Garlic Herb, and more.',
    longDescription: 'Traditional Gujarati coin khakhras by Saras Che, crafted with 100% whole wheat and roasted to a crisp golden crunch. Convenient bite-sized coin format ideal for modern desk snacking and festive hampers. Clients can choose from a wide bouquet of flavors including Cheese Coin, Methi, Roasted Jeera, Chatpata Masala, Spicy Peri Peri, and Garlic Herb. Sealed in freshness-locking containers.',
    category: 'edible',
    categoryName: 'Edible Gifting',
    image: '/images/products/edible_saras_che_khakhra.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Flavor Variety': '100% Choosable (Multiple savory and gourmet flavor options available)',
      'Available Flavors': 'Cheese Coin, Kasuri Methi, Roasted Jeera, Chatpata Masala, Peri Peri, Garlic Herb',
      'Baking Method': '100% Vacuum Roasted Whole Wheat (Zero Trans Fat, Guilt-Free Snacking)',
      'Packaging': 'Airtight Freshness-Lock Container with Saras Che Quality Seal',
      'Serving Format': 'Bite-Sized Round Coin Khakhra'
    },
    customizationOptions: [
      '100% Choosable Flavor Selections for Corporate Hampers',
      'Custom Corporate Labeling and Box Sleeves',
      'Assorted Flavor Multi-Packs for Team Gifting',
      'Gift Box Inlay with Custom Welcome Notes'
    ],
    badge: '100% Choosable Flavors',
    active: true,
    featured: true,
    createdAt: '2026-02-21'
  },
  {
    id: 'prod-edible-4',
    name: 'Crispy Dehydrated Cinnamon Apple Rings',
    slug: 'crispy-dehydrated-cinnamon-apple-rings',
    description: '100% natural dehydrated orchard apple slices gently crisped without artificial preservatives or excess oil. Wholesome gourmet snacking with your choice of Natural Sweet, Light Cinnamon Dust, or Honey Glaze.',
    longDescription: 'Crafted from hand-picked orchard fresh apples, sliced into rings and slow dehydrated to preserve natural nutrients, fiber, and sweet tanginess. A gourmet healthy snack choice that elevates festive hampers and wellness gift boxes. Available in Pure Natural Sweet, Aromatic Ceylon Cinnamon Dust, and Light Honey Glaze.',
    category: 'edible',
    categoryName: 'Edible Gifting',
    image: '/images/products/edible_dehydrated_apple_chips.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Snack Type': '100% Natural Slow-Dehydrated Orchard Apple Rings',
      'Flavor Profiles': 'Natural Crisp Sweet, Aromatic Ceylon Cinnamon Dust, Honey Glaze',
      'Nutritional Highlights': 'Rich in Natural Dietary Fiber, Gluten-Free, No Artificial Colors or Added Sugar',
      'Packaging': 'Food-Grade Sealed Pouch or Clear Acrylic Gift Jar with Air-Lock Seal',
      'Suitability': 'Healthy Snacking, Festive Hampers, Wellness Gift Boxes'
    },
    customizationOptions: [
      'Choice of Flavor Dusting (Natural, Cinnamon, Honey)',
      'Custom Branded Label with Corporate Logo',
      'Eco-Friendly Glass Jar or Resealable Pouch Options',
      'Gift Box Inclusion and Custom Ribbon Pairing'
    ],
    badge: '100% Natural Orchard Fruit',
    active: true,
    featured: true,
    createdAt: '2026-02-22'
  },
  {
    id: 'prod-edible-5',
    name: 'Artisanal Gourmet Fresh-Baked Cookies (Choose Your Flavors)',
    slug: 'artisanal-gourmet-fresh-baked-cookies',
    description: 'Freshly baked handcrafted cookies with rich gourmet inclusions and utmost taste. 100% choosable flavors: select from Classic Chocolate Chip, Double Dark Chocolate, Oatmeal Cranberry, Hazelnut Praline, and Red Velvet.',
    longDescription: 'Artisanal cookies prepared with high-grade butter, real Belgian chocolate chips, and roasted nuts. Crispy on the outer edge with a soft melt-in-the-mouth center. Clients get to choose whatever flavor combinations they desire for their gift boxes, including Classic Chocolate Chip, Double Dark Chocolate Chunk, Butterscotch Crunch, Oatmeal Cranberry, Hazelnut Praline, and Red Velvet. 100% choosable flavors of utmost quality and fresh taste.',
    category: 'edible',
    categoryName: 'Edible Gifting',
    image: '/images/products/edible_artisanal_cookies.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Flavor Selection': '100% Choosable (Pick any flavor combinations you desire)',
      'Available Flavors': 'Classic Chocolate Chip, Double Dark Chocolate Chunk, Butterscotch Crunch, Oatmeal Cranberry, Hazelnut Praline, Red Velvet',
      'Baking Standards': 'Handcrafted in Small Batches using Pure Butter and Real Chocolate Chunks',
      'Quality & Freshness': 'Baked to Order for Maximum Crispness and Aroma',
      'Packaging': 'Vintage Tin Caddy or Luxury Rigid Box with Protective Wax Paper Wrapping'
    },
    customizationOptions: [
      '100% Choosable Cookie Flavor Combinations',
      'Custom Corporate Branded Tin or Rigid Box with Logo Debossing',
      'Eggless and Gluten-Free Batch Options Available',
      'Assorted Cookie Gift Box with Personalized Greeting Card'
    ],
    badge: '100% Choosable Flavors',
    active: true,
    featured: true,
    createdAt: '2026-02-23'
  },

  // ==========================================
  // FESTIVE GIFTING: SAMPLE & EXAMPLE HAMPERS
  // ==========================================
  {
    id: 'prod-fest-1',
    name: 'The Aarambh Shubh Deepavali Sample Hamper',
    slug: 'aarambh-shubh-deepavali-sample-hamper',
    description: 'An example festive curation showcasing a bespoke Happy Diwali keepsake box with handcrafted floral floating diya accents. 100% customizable sample box: choose and combine any items from our gourmet foods, gadgets, and corporate merchandise.',
    longDescription: 'This is a sample festive curation designed to showcase our bespoke packaging and assembly capabilities. Presented in a rigid saffron orange and navy gift box with gold foil diya motifs and artisanal blooming lotus candles. Clients can 100% customize this hamper by selecting their preferred combination of gourmet dry fruits, chocolates, gadgets, lifestyle accessories, or brass decor. Both the outer presentation box and internal products are fully brand name printable.',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_aarambh_diwali_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Example / Sample Festive Gift Box (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, foods, gadgets, and decor',
      'Packaging Customization': 'Outer Box Design, Foil Stamping, Brand Logo Printing & Custom Ribbons',
      'Sample Inclusions Shown': 'Happy Diwali Rigid Keepsake Box & Handcrafted Blooming Lotus Candles',
      'Available Item Categories': 'Gourmet Foods & Confectionery, Tech Gadgets, Drinkware, Executive Folios, Brass Diyas',
      'Branding & Print': 'Corporate Brand Name & Logo Printable on all packaging and inclusions'
    },
    customizationOptions: [
      '100% Fully Customizable Packaging & Item Inclusions',
      'Handpick Custom Combinations of Foods, Gadgets & Merchandise',
      'Custom Corporate Logo & Greeting Message Printing',
      'Multiple Box Colorways & Custom Dimensions Available',
      'Personalized Employee / Client Name Inserts'
    ],
    badge: '100% Customizable Sample Box',
    active: true,
    featured: true,
    createdAt: '2026-02-16'
  },
  {
    id: 'prod-fest-2',
    name: 'The Royal Utsav Gourmet & Festive Sample Chest',
    slug: 'royal-utsav-gourmet-festive-sample-chest',
    description: 'An example celebration hamper presented in a royal rani pink and gold motif rigid chest with premium dry fruits, gourmet confectionery, and festive brass diyas. 100% customizable sample box: pick your choice of foods, gadgets, and gifts.',
    longDescription: 'An inspiring sample festival hamper demonstrating how traditional opulence blends with modern gourmet indulgence. Encased in a royal rani pink and gold printed gift chest with spiced roasted nuts, artisanal almond brittle, brass tealights, potpourri, and a personalized corporate message card. This sample box is 100% customizable: select any assortment from our vast catalogue of gourmet foods, tech accessories, or merchandise.',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_royal_utsav_chest.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Example / Sample Festive Gift Box (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, foods, gadgets, and decor',
      'Packaging Customization': 'Rigid Box Color Palette, Gold Foil Hot Stamping, Custom Sleeves',
      'Sample Inclusions Shown': 'Rani Pink Rigid Box, Nutty Mix, Mint Masala Makhana, Peri Peri Cashews, Almond Brittle, Brass Diyas',
      'Available Item Assortment': 'Artisanal Sweets, Royal Dry Fruits, Premium Teas, Bluetooth Gadgets, Luxury Folios',
      'Branding & Print': 'Brand Logo & Company Greeting Printable on all jars, boxes, and cards'
    },
    customizationOptions: [
      '100% Fully Customizable Packaging & Item Inclusions',
      'Mix & Match Gourmet Foods, Tech Gadgets, and Festive Decor',
      'Corporate Logo Foil Stamping on Rigid Box',
      'Custom Branded Glass & Tin Packaging Labels',
      'Bespoke Greeting Card with Leadership Signatures'
    ],
    badge: '100% Customizable Sample Box',
    active: true,
    featured: true,
    createdAt: '2026-02-17'
  },
  {
    id: 'prod-fest-3',
    name: 'The Shwet Kamal Divine Celebration Sample Box',
    slug: 'shwet-kamal-divine-celebration-sample-box',
    description: 'An example spiritual festive curation featuring a laser-crafted gold lotus wall hanging, brass-rimmed tealights, scented incense, and an organza treat potli in a rigid white presentation box. 100% customizable with your choice of gifts.',
    longDescription: 'A serene example festive hamper emphasizing artisanal craftsmanship and divine aesthetics. Features a laser-cut gold and red lotus hanging, metallic gold tealight holders, fragrant dhoop sticks, and a shimmering organza potli for sweets or dry fruits in a pristine white rigid presentation box. As a sample curation, clients can 100% customize all packaging and replace or add items from our foods, gadgets, or merchandise ranges.',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_shwet_kamal_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Example / Sample Festive Gift Box (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, foods, gadgets, and decor',
      'Packaging Customization': 'Outer Box Dimensions, Color Theme, Custom Window Cutouts, Satin Ribbon Ties',
      'Sample Inclusions Shown': 'Laser-Crafted Gold Lotus Hanging, Brass-Rimmed Tealights, Organic Fragrance Sticks, Treat Potli',
      'Available Item Assortment': 'Curated Sweets, Dry Fruits, Eco-Friendly Gifting, Electronics, Custom Stationery',
      'Branding & Print': 'Corporate Emblem Printing & Laser Engraving Available'
    },
    customizationOptions: [
      '100% Fully Customizable Packaging & Item Inclusions',
      'Select Custom Inclusions from Foods, Gadgets & Festive Accessories',
      'Custom Outer Box Sleeve with Company Branding',
      'Multiple Box Colors (Ivory White, Deep Burgundy, Royal Navy)',
      'Custom Wax-Sealed Festive Gift Card'
    ],
    badge: '100% Customizable Sample Box',
    active: true,
    featured: true,
    createdAt: '2026-02-18'
  },

  // ==========================================
  // CORPORATE GIFTING: EXECUTIVE SUITES & ACCESSORIES
  // ==========================================
  {
    id: 'prod-corp-1',
    name: 'The Sovereign Eco Executive Suite',
    slug: 'sovereign-eco-executive-suite',
    description: 'A distinguished 5-piece sustainable executive gifting hamper featuring natural beechwood notebook, bamboo coffee mug, vacuum insulated thermal flask, bamboo ballpoint pen, and cork keychain. 100% customizable with brand name printing and color choices.',
    longDescription: 'Curated for executive onboarding and leadership recognition, this sustainable ensemble combines natural warmth with corporate elegance. Includes a beechwood grain hardcover journal, double-wall stainless steel bamboo mug, 500ml matte black thermal bottle with wooden top, bamboo twist pen, and a multifunction cork keychain with metal opener. Packaged in a fitted luxury presentation box. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_bamboo_slate_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Multiple Color Combinations Available',
      'Inclusions': 'Hardcover Notebook, Bamboo Coffee Mug, Thermal Flask, Bamboo Pen, Cork Keychain',
      'Materials': 'Natural Beechwood Veneer, 304 Stainless Steel, Organic Cork, Matte Alloy',
      'Bottle Capacity': '500ml Vacuum Insulated Thermal Flask',
      'Mug Capacity': '350ml Stainless Steel Interior with Bamboo Outer',
      'Journal Size': '192 Ruled Pages, 80 GSM Natural Cream Shade',
      'Packaging': 'Deluxe Matte Black Rigid Presentation Box with Custom Cutout Inlay'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Corporate Color Themes Available',
      'Precision Laser Engraving on Flask, Mug & Pen',
      'Blind Debossing or Screen Printing on Wooden Notebook',
      'Individual Employee Name Personalization',
      'Custom Corporate Gift Box Ribbon & Card'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-01'
  },
  {
    id: 'prod-corp-3',
    name: 'The Aurum Executive Black & Gold Connoisseur Set',
    slug: 'aurum-executive-black-gold-set',
    description: 'An opulent 5-piece executive ensemble pairing brushed metallic gold with midnight black leatherette: vacuum bottle, organizer journal, business cardholder, keychain, and rollerball pen. 100% customizable with brand name printing.',
    longDescription: 'Commanding and luxurious, the Aurum Executive suite is tailored for milestone corporate achievements, partner summits, and VIP clients. Features a brushed gold insulated thermal bottle, a sleek midnight black leatherette journal, a gold-accented business card case, a matching leather and metal keychain, and a heavyweight executive pen nestled in charcoal foam. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_aurum_black_gold_set.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Gold & Black, Rose Gold, Chrome & Silver Palettes',
      'Inclusions': 'Brushed Gold Thermal Flask, Black Leather Journal, Metallic Card Case, Executive Pen, Leather Keychain',
      'Materials': 'Brushed Electroplated Gold Alloy, Premium Vegan Leatherette, Carbon Black Metal',
      'Bottle Capacity': '500ml Double-Wall Temperature Retaining Flask',
      'Journal Format': 'A5 Executive Organizer with Pen Loop & Ribbon Bookmark',
      'Packaging': 'Lidded Presentation Box with High-Density Charcoal Foam Interior'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Metallic & Leather Finishes Available',
      'Metallic Gold Foil Stamping on Leather Journal',
      'Laser Etched Corporate Emblem on Gold Flask & Pen',
      'Laser Engraved Personal Name on Metal Cardholder',
      'Custom Satin Ribbon & Gold Foil Gift Card'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-03'
  },
  {
    id: 'prod-corp-4',
    name: 'The Heritage Walnut Wood Journal & Rosewood Pen Duo',
    slug: 'heritage-walnut-wood-journal-pen-duo',
    description: 'An exquisite 2-piece artisanal executive gift set featuring a laser-carved natural dark walnut wood hardcover notebook with filigree detailing and a complementary rosewood executive pen. 100% customizable with brand printing.',
    longDescription: 'Showcasing intricate woodworking and timeless craftsmanship, this 2-piece set features a dark walnut wood hardcover notebook with carved decorative filigree and an integrated elastic closure with pen slot. Accompanied by a weighted rosewood finish twist-action executive pen, presented in a black textured keepsake box. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_heritage_walnut_duo.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Dark Walnut, Natural Beech, Teak Wood Finishes',
      'Inclusions': 'Laser-Carved Dark Walnut Notebook & Rosewood Finish Executive Pen',
      'Cover Material': 'Genuine Sustainable Walnut Wood Veneer with Elastic Pen Slot',
      'Page Count': '192 Acid-Free Natural Cream Pages (80 GSM)',
      'Pen Mechanism': 'Heavyweight Twist-Action Metal Ballpoint with Gold Trim',
      'Packaging': 'Textured Black Presentation Box with Protective Cushioning'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Wood Veneer Colorways Available',
      'Custom Laser Cutout / Engraved Corporate Logo on Wood Cover',
      'Laser Engraved Logo or Monogram on Rosewood Pen',
      'Custom Printed Belly Band with Brand Story',
      'Personalized Welcome Note Insert'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-04'
  },
  {
    id: 'prod-corp-5',
    name: 'The Chrono Classic Executive 4-Piece Suite',
    slug: 'chrono-classic-executive-suite',
    description: 'A timeless corporate recognition hamper featuring a classic analogue wristwatch with stitched leather strap, matching cardholder, polished chrome twist pen, and leather keychain. 100% customizable with brand logo.',
    longDescription: 'A distinguished 4-piece corporate recognition suite. Features an analogue quartz wristwatch with mineral crystal dial and black stitched strap, a compact leatherette and stainless steel cardholder, a polished chrome executive pen, and a matching keytag, presented in a clean silver presentation box. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_chrono_classic_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Black & Chrome, Tan & Gold, Navy & Silver Editions',
      'Inclusions': 'Analogue Executive Watch, Leatherette Card Case, Chrome Pen, Leather Keychain',
      'Timepiece Movement': 'Precision Quartz Movement with Mineral Glass Dial & Black Strap',
      'Cardholder': 'Slim Pocket Size Holding up to 15 Business Cards',
      'Hardware Finish': 'Brushed Stainless Steel & Polished Chrome Accents',
      'Packaging': 'Silver Grey Presentation Box with Deep Protective Foam Tray'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Strap & Metal Colors Available',
      'Custom Dial Face Corporate Logo Printing on Watch',
      'Laser Engraved Metallic Cardholder & Keytag',
      'Laser Inscription on Chrome Pen Barrel',
      'Bespoke Corporate Outer Sleeve & Welcome Insert'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-05'
  },
  {
    id: 'prod-corp-6',
    name: 'The Cognac Leather Wallet & Chrome Pen Duo',
    slug: 'cognac-leather-wallet-chrome-pen-duo',
    description: 'A handsome 2-piece executive set featuring a rich cognac tan leather wallet with a stainless steel engravable emblem plate, paired with a matching leatherette-wrapped chrome rollerball pen. 100% customizable with brand printing.',
    longDescription: 'Engineered for executive sophistication, this 2-piece set pairs a finely stitched cognac brown leatherette wallet featuring a brushed metallic nameplate with a weighted chrome executive rollerball pen accented with matching tan leather wrap. Presented in a black gift box with tailored foam slotting. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_cognac_wallet_pen_duo.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Cognac Tan, Midnight Black, Espresso Brown, Dark Navy',
      'Inclusions': 'Cognac Tan Leatherette Wallet & Leather-Wrapped Chrome Pen',
      'Wallet Details': 'Multiple Card Slots, Currency Compartment, Brushed Metal Branding Plate',
      'Pen Details': 'Heavyweight Metal Ballpoint with Smooth Refill and Leather Grip',
      'Packaging': 'Textured Charcoal Black Rigid Gift Box with Fitted Foam'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Leather Color Options Available',
      'Laser Engraving on Wallet Metal Nameplate',
      'Laser Engraving on Chrome Pen Cap',
      'Blind Debossing on Wallet Leather Body',
      'Custom Corporate Message Card'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-06'
  },
  {
    id: 'prod-corp-7',
    name: 'The Artisan Wood & Tan Leather 4-in-1 Executive Suite',
    slug: 'artisan-wood-tan-leather-suite',
    description: 'An artisan 4-piece corporate ensemble featuring a natural wood-grain notebook with crocodile-textured leather buckle strap, matching tan metal cardholder, executive pen, and multi-tool keychain. 100% customizable.',
    longDescription: 'A balanced synthesis of organic wood and warm cognac leatherette. Includes a natural light-wood grain journal with an embossed leather buckle closure, a matching tan leather and stainless steel business card case, a sleek matte terracotta executive pen, and a multifunction leather keytag with bottle opener. Presented in a black gift box. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_artisan_wood_tan_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Light Wood with Tan Leather, Dark Wood with Black Leather',
      'Inclusions': 'Wood Hardcover Journal with Buckle, Tan Card Case, Matte Pen, Keytag with Opener',
      'Materials': 'Natural Light Beechwood Veneer, Textured Vegan Leather, Brushed Alloy',
      'Journal Format': '192 Ruled Pages, 80 GSM Natural Shade Cream Paper',
      'Packaging': 'Matte Black Gift Box with Precision Tray'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Wood & Leather Palette Options',
      'Laser Engraving on Wood Journal Cover',
      'Laser Etching on Metal Cardholder & Keychain',
      'Debossed Corporate Logo on Buckle Strap',
      'Bespoke Box Sleeve & Wax Sealed Note'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-07'
  },
  {
    id: 'prod-corp-9',
    name: 'The Vanguard Executive Organizer Folio Journal',
    slug: 'vanguard-executive-organizer-folio-journal',
    description: 'A sophisticated A5 corporate organizer featuring dual-tone magnetic buckle closure, integrated interior business card slots and document sleeve, 192 ruled pages (80 GSM), and multi-year calendar. 100% customizable.',
    longDescription: 'Designed for executives who value seamless organization on the go. Features a dual-tone magnetic buckle strap, a fully lined interior organizer with business card slots and document slip pockets, 192 pages of premium 80 GSM natural shade paper, and multi-year calendar inserts. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_vanguard_folio_journal.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Palette': 'Royal Blue, Slate Charcoal, Heather Grey (Custom Colors on Request)',
      'Interior Features': 'Business Card Slots, Identification Window, Document Slip Pocket',
      'Paper': '192 Ruled Pages (80 GSM Natural Shade with 4-Year Calendar)',
      'Closure': 'Dual-Tone Leatherette Magnetic Buckle with Silver Metal Accent',
      'Size': 'A5 Executive Organizer Format'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Executive Leatherette Shades Available',
      'Hot Foil Stamping or Blind Debossing on Front Cover',
      'Laser Engraved Metal Buckle Clasp',
      'Custom Insert Pages with Corporate Branding',
      'Gift Packaging Box with Custom Sticker'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-09'
  },
  {
    id: 'prod-corp-10',
    name: 'The Apex Tech-Pocket Executive Notebook',
    slug: 'apex-tech-pocket-executive-notebook',
    description: 'A modern corporate journal designed for mobile professionals, featuring an integrated front smartphone and utility pocket, woven linen-finish hardcover, 192 pages of 80 GSM paper, and ribbon marker. 100% customizable.',
    longDescription: 'A contemporary corporate notebook built for hybrid work environments. Features a front pocket sleeve tailored to hold smartphones, business cards, or travel passes, an elastic pen slot, woven textured linen-feel hardcover, 4-year calendar, and 192 pages of 80 GSM natural shade paper. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_apex_tech_pocket_notebook.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Colorways': 'Oxford Grey, Denim Blue, Midnight Black',
      'Special Feature': 'Integrated Front Smartphone Holder & Document Pocket',
      'Cover Material': 'Textured Woven Linen Finish Hardcover with Reinforced Stitching',
      'Paper Details': '192 Ruled Pages (80 GSM Natural Shade with 4-Year Calendar)',
      'Size': 'A5 Executive Dimensions'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Woven Fabric Color Options Available',
      'Screen Printing or Heat Transfer on Woven Cover',
      'Debossed Leatherette Patch on Front Pocket',
      'Custom Branded Insert Page',
      'Gift Packaging with Custom Sleeve'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-10'
  },
  {
    id: 'prod-corp-11',
    name: 'The Pro-Twist Fitness & Protein Shaker Bottle',
    slug: 'protwist-fitness-protein-shaker-bottle',
    description: 'An ergonomic sports and wellness shaker bottle featuring a built-in spiral blending agitator, leak-proof flip cap, integrated carry loop, and precise measurement markings. 100% customizable with brand name printing and multiple color options.',
    longDescription: 'Engineered for corporate wellness programs, sports events, and daily active routines. This shaker bottle incorporates a spiral mixing wand to dissolve protein shakes, supplements, and infusions smoothly without clumps. Features dual measurement markings (oz and ml), a leak-proof locking flip cap with ergonomic carry loop, and a stable base. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_protwist_fitness_shaker.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Sky Blue, Coral Pink, Glacier Grey, and Custom Corporate Tones',
      'Capacity': '500ml with Dual Oz and Ml Volume Markings',
      'Mechanism': 'Built-In Spiral Agitator Wand for Smooth Blending',
      'Lid': 'Spill-Proof Flip Top with Integrated Finger Carry Loop',
      'Material': 'BPA-Free Food Grade Safe Polymer with Crystal Clear Body'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Vibrant Accent & Cap Color Options',
      'High-Definition Screen Printing of Corporate Logo & Slogan',
      'UV Full-Color Wrap Around Printing',
      'Custom Wellness Gift Box Packaging'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-11'
  },
  {
    id: 'prod-corp-12',
    name: 'The Chroma Thermal Magic Reveal Ceramic Mug',
    slug: 'chroma-thermal-magic-reveal-ceramic-mug',
    description: 'A premium heat-activated ceramic mug that transforms from sleek matte black to reveal full-color custom corporate artwork or messaging when filled with hot beverage. 100% customizable with brand name printing and color options.',
    longDescription: 'A captivating corporate promotional gift that creates an interactive experience at every coffee break. In its cold state, the mug presents a sophisticated matte black finish. As hot liquid is poured, the heat-sensitive thermochromic coating magically reveals your full-color corporate design, employee photograph, or milestone message. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_chroma_magic_reveal_mug.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Matte Black Base Revealing Full-Color Custom Corporate Artwork',
      'Capacity': '330ml / 11 oz Premium Ceramic Coffee Mug',
      'Technology': 'High-Grade Thermochromic Heat-Sensitive Magic Coating',
      'Handle': 'Comfort C-Handle with Smooth Glazed Finish',
      'Safety': 'Food Grade, Non-Toxic Ceramic with Microwave Compatibility'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Full-Color Panoramic Sublimation Reveal Printing',
      'Individual Employee Name or Photo Personalization',
      'Matte Black or Glossy Base Finish Options',
      'Custom Foam Padded Presentation Box'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-12'
  },
  {
    id: 'prod-corp-13',
    name: 'The Spectrum Glazed Ceramic Bistro Coffee Mug',
    slug: 'spectrum-glazed-ceramic-bistro-mug',
    description: 'A classic high-gloss ceramic coffee mug featuring an ergonomic curved handle and generous capacity. 100% customizable with corporate brand name printing and available in 6 vibrant corporate colorways.',
    longDescription: 'A vibrant desktop essential for corporate offices, client hospitality lounges, and team onboarding kits. Crafted with thick-walled ceramic for heat retention, a smooth high-gloss enamel glaze, and a comfortably weighted base. 100% customizable, color options available, and brand name printable in single or multi-color ink.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_spectrum_ceramic_bistro_mug.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Available Colors': 'Tangerine Orange, Crimson Red, Gloss Black, Cobalt Navy, Sunshine Yellow, Azure Blue',
      'Capacity': '350ml Generous Desk Capacity',
      'Material': 'High-Density Glazed Ceramic with Thermal Insulation',
      'Finish': 'Chip-Resistant High-Gloss Exterior and Interior Enamel',
      'Handle': 'Ergonomic Easy-Grip Curved Handle'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      '6 Standard Glaze Colors or Custom Pantone Dip Available',
      'Precision Screen Printing or Ceramic Decal Firing',
      'Dual-Side Logo or Message Printing',
      'Individual Corrugated Safe Ship Box or Ribbon Hamper Box'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-13'
  },
  {
    id: 'prod-corp-14',
    name: 'The Insignia Double-Wall Insulated Egg Tumbler',
    slug: 'insignia-double-wall-insulated-egg-tumbler',
    description: 'A modern double-wall vacuum insulated stainless steel tumbler with spill-resistant crystal-clear lid for hot coffee or chilled drinks. 100% customizable with laser engraving or logo printing and color options.',
    longDescription: 'Sleek and curved for comfortable desktop sipping, this stemless insulated tumbler keeps beverages hot for 6 hours or icy cold for up to 12 hours. Features double-wall 304 food-grade stainless steel construction, sweat-free powder coating, and a splash-proof silicone sealed push lid with drinking hole. 100% customizable, color options available, and brand name printable.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_insignia_insulated_egg_tumbler.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand Name & Logo Printable)',
      'Color Options': 'Brushed Stainless Silver, Matte Midnight Black, Custom Corporate Coatings',
      'Capacity': '350ml / 12 oz Stemless Curved Profile',
      'Insulation': 'Double-Wall Vacuum Insulation (Hot 6h / Cold 12h)',
      'Lid': 'BPA-Free Clear Push Lid with Silicone Gasket & Sip Hole',
      'Material': '18/8 304 Food-Grade Stainless Steel (No Metallic Aftertaste)'
    },
    customizationOptions: [
      '100% Full Customization & Brand Name Printing',
      'Multiple Premium Powder-Coated and Brushed Finishes',
      'Precision Fiber Laser Engraving on Stainless Body',
      'Durable Rotary Screen or UV Color Printing',
      'Bespoke Cylindrical Gift Tube or Magnetic Presentation Box'
    ],
    badge: '100% Customizable',
    active: true,
    featured: true,
    createdAt: '2026-02-14'
  },
  {
    id: 'prod-corp-16',
    name: 'The Piece Out 150-Piece Pop Art Can Puzzle Game (Multiple Art Designs)',
    slug: 'piece-out-150-piece-pop-art-can-puzzle',
    description: 'An innovative mindfulness and team engagement puzzle game housed in a pop-open beverage can container with an included sleek black desktop display frame. 100% choosable designs: available in multiple pop art and corporate themes.',
    longDescription: 'A novel, interactive corporate gift designed for team onboarding, executive stress relief, and creative desks. Contains a 150-piece precision-cut pop art jigsaw puzzle presented inside an authentic pop-open pull-tab can, paired with a fitted black tabletop or wall mount frame. Clients can choose from multiple artwork designs (such as Lily Bloom, Botanical Flora, Abstract Geometry, or custom commissioned corporate brand illustrations). Fully brand name printable on the can sleeve.',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_piece_out_can_puzzle.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Art Selection': '100% Choosable Designs (Lily Bloom, Botanical Flora, Pop Art, Custom Company Art)',
      'Piece Count': '150 Precision Interlocking Pieces (Approx. 1 Hour Puzzle Time)',
      'Packaging': 'Authentic Aluminum Beverage Can with Real Pull-Tab Pop-Open Lid',
      'Display Frame': 'Fitted Matte Black Photo Frame Suitable for Wall Mounting or Desk Shelf',
      'Branding & Print': '100% Customizable Outer Can Wrap with Company Logo and Message'
    },
    customizationOptions: [
      '100% Choosable Pop Art or Custom Illustrated Corporate Designs',
      'Custom Corporate Branded Pull-Tab Can Wrap',
      'Engraved Metal Plaque on Desktop Display Frame',
      'Bespoke Team Building or Product Launch Message Cards'
    ],
    badge: '100% Choosable Designs • Can Packaging',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-001',
    referenceNumber: 'TF-2026-8941',
    customerName: 'Aarav Mehta',
    company: 'Nexus Capital Advisors',
    email: 'aarav.mehta@nexuscap.com',
    phone: '+91 98201 44520',
    numberOfBoxes: 120,
    deliveryLocation: 'Bandra Kurla Complex, Mumbai, Maharashtra',
    preferredDeliveryDate: '2026-10-15',
    additionalRequirements: 'Need gold debossed company logo on the executive notebooks and custom welcome greeting card signed by Managing Director. Deliver in two separate batches.',
    boxStyle: 'Deep Burgundy Velvet Presentation Box',
    selectedProducts: [
      {
        productId: 'prod-fest-1',
        productName: 'The Aarambh Shubh Deepavali Sample Hamper',
        category: 'Festive Gifting',
        quantity: 1,
        image: '/images/products/festive_aarambh_diwali_box.png',
        priceFormatted: 'Custom Quote'
      },
      {
        productId: 'prod-gadget-1',
        productName: 'The ErgoFold Pro Silver Aluminum Laptop Stand',
        category: 'Gadget Gifting',
        quantity: 1,
        image: '/images/products/gadget_ergofold_silver_laptop_stand.png',
        priceFormatted: 'Custom Quote'
      },
      {
        productId: 'prod-merch-6',
        productName: 'Personalized Vintage Leather Journal & Pen Set',
        category: 'Customizable Merchandise',
        quantity: 1,
        image: '/images/products/merch_personalized_leather_journal_pen.png',
        priceFormatted: 'Custom Quote'
      }
    ],
    status: 'Quote Sent',
    adminNotes: 'Sample box dispatched on Friday for board review. Client confirmed preference for burgundy ribbon.',
    createdAt: '2026-08-28T11:20:00Z',
    estimatedValue: 'Enterprise Proposal'
  },
  {
    id: 'enq-002',
    referenceNumber: 'TF-2026-8942',
    customerName: 'Pooja Krishnan',
    company: 'Strata Software Labs',
    email: 'pooja.k@stratasw.io',
    phone: '+91 97410 88931',
    numberOfBoxes: 250,
    deliveryLocation: 'Whitefield, Bengaluru, Karnataka',
    preferredDeliveryDate: '2026-09-30',
    additionalRequirements: 'Annual festival and employee appreciation summit gifts. Require individual name engraving on the tumblers and pens.',
    boxStyle: 'Warm Ivory Rigid Box with Gold Stamping',
    selectedProducts: [
      {
        productId: 'prod-fest-2',
        productName: 'The Royal Utsav Gourmet & Festive Sample Chest',
        category: 'Festive Gifting',
        quantity: 1,
        image: '/images/products/festive_royal_utsav_chest.png',
        priceFormatted: 'Custom Quote'
      },
      {
        productId: 'prod-merch-7',
        productName: 'Custom Engraved Executive Metal Pen',
        category: 'Customizable Merchandise',
        quantity: 1,
        image: '/images/products/merch_custom_engraved_metal_pen.png',
        priceFormatted: 'Custom Quote'
      }
    ],
    status: 'New',
    adminNotes: 'High priority corporate lead. Account manager assigned.',
    createdAt: '2026-08-30T14:45:00Z',
    estimatedValue: 'Enterprise Proposal'
  }
];