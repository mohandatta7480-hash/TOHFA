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
    name: 'Eatable Giftings',
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
    description: '100% customizable merchandise and apparel. Custom print or laser engrave your company logo, employee names, and brand artwork on wooden tea coasters, leather phone wallets, premium hoodies, polo shirts, round neck tees, journals, and executive pens.',
    coverImage: '/images/category_merchandise.jpg',
    active: true,
    featuredHighlight: '100% customizable apparel, hoodies, desk essentials, and brand merchandise'
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
    name: 'Stick-On Phone Card Wallet',
    slug: 'phone-pasteable-stick-on-card-holder',
    description: 'Slim adhesive leatherette phone wallet with card quick-pull notch. 100% customizable: deboss or print your company brand logo and custom artwork.',
    longDescription: 'Ultra-slim premium leatherette card holder engineered to mount securely onto any smartphone or case with residue-free adhesive backing.\n\n• 100% Customizable: Precision debossed or screen-printed brand logo on genuine-feel leatherette\n• Card Capacity: Holds 1 to 2 credit cards, ID cards, or office keycards with thumb cutout\n• Finish Options: Available in distressed vintage brown, midnight black, and navy',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_phone_pasteable_wallet.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Print or deboss any brand logo, design, or text)',
      'Material': 'Vintage Finish Textured Leatherette with 3M Residue-Free Adhesive',
      'Capacity': 'Holds 1 to 2 standard credit, transit, or corporate ID cards',
      'Compatibility': 'Universal fit for all smartphones and protective phone cases',
      'Quick-Access Feature': 'Curved ergonomic thumb cutout for easy card retrieval'
    },
    customizationOptions: [
      'Precision blind debossing or foil stamped company logo',
      'Full-color screen printing with custom corporate artwork',
      'Multiple leatherette colorways (Vintage Tan, Noir Black, Navy Blue)',
      'Individual presentation backing card with custom brand story'
    ],
    badge: '100% Customizable • Brand Printable',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-2',
    name: 'Wooden Tea Coaster Set',
    slug: 'natural-wooden-tea-coaster-set',
    description: 'Handcrafted round solid wood tea and coffee coasters with rimmed lip and stand. 100% customizable: laser engrave your company logo, brand motto, or event graphics.',
    longDescription: 'Artisan solid wood coasters with raised perimeter lip, showcasing natural grain and rich walnut finish. Includes matching wooden stand.\n\n• 100% Customizable: Deep precision laser engraving of corporate logo, brand emblem, or tagline\n• Surface Protection: Heat-resistant and condensation-safe for executive desk setups\n• Set Options: Available as single desk coasters or 4/6-piece sets with branded stand',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_wooden_tea_coaster_engraved.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Deep laser engraving or color printing of any logo)',
      'Inclusions': 'Round Solid Wood Coasters with Matching Wooden Holder Stand',
      'Material': 'Hand-Turned Natural Grain Solid Hardwood with Protective Seal',
      'Design': 'Beveled Perimeter Edge with Recessed Center Cup Well',
      'Usage': 'Desktop protection against condensation and hot beverage marks'
    },
    customizationOptions: [
      'Deep laser engraving of corporate logo on every coaster',
      'Laser engraved company brand name on wooden stand holder',
      'Choice of natural walnut, teak, or beech wood finishes',
      'Kraft gift box packaging with personalized corporate sleeve'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-3',
    name: 'Aluminum Executive Card Holder',
    slug: 'executive-pocket-card-holder',
    description: 'Ultra-slim brushed aerospace aluminum card holder with thumb slide notch. 100% customizable: precision laser engrave company logo, employee names, and brand slogans.',
    longDescription: 'Precision-machined brushed aluminum card case engineered for executive pockets and modern desk setups. Protects business cards, credit cards, and RFID cards.\n\n• 100% Customizable: Precision fiber laser engraving of corporate logo, employee name, or milestone date\n• Quick-Access Design: Ergonomic thumb slide notch for instant one-handed card presentation\n• Capacity & Build: Holds up to 15 business cards or 6 embossed credit cards in rigid RFID-blocking aluminum',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_executive_card_holder.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engrave company brand logo, text, or employee names)',
      'Material': 'Aviation-Grade Brushed Aluminum Alloy with Chamfered Edges',
      'Access Notch': 'Precision Curved Thumb Cutout for Fast Card Ejection',
      'Capacity': 'Holds 12 to 15 standard business cards or 5 to 6 credit cards',
      'RFID Shielding': 'Built-in RFID blocking protection against digital skimming'
    },
    customizationOptions: [
      'Precision fiber laser engraving on front faceplate',
      'Individual personalized recipient names on each card holder',
      'Custom corporate color anodizing for bulk orders',
      'Matte black presentation gift box with silver foil logo'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-4',
    name: 'Custom Crew Neck T-Shirt',
    slug: 'customizable-round-neck-tshirt',
    description: '100% bio-washed combed cotton crew neck t-shirt for corporate teams and event merchandise. 100% customizable: print your logo on front, back, and sleeves.',
    longDescription: 'Ultra-comfortable everyday crew neck t-shirt crafted from breathable, pre-shrunk combed cotton. Ideal for tech teams and company events.\n\n• 100% Customizable: Screen print, high-definition DTF, or embroidered logo on left chest and full back\n• Premium Comfort: 180 GSM bio-washed cotton, double-stitched hem, and ribbed neckband\n• Color & Size Range: Available in all corporate shades from S to 3XL',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_customizable_round_neck_tshirt.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Screen print, DTF, or embroidery on chest, back, sleeves)',
      'Fabric': '180 GSM 100% Super-Combed Bio-Washed Cotton',
      'Fit & Style': 'Unisex Regular Fit Crew Neck Short Sleeve Tee',
      'Sizes Available': 'S, M, L, XL, XXL, 3XL',
      'Print Areas': 'Front Left Chest, Center Chest, Full Back, Both Sleeves'
    },
    customizationOptions: [
      'High-density screen print or full-color DTF graphic printing',
      'Precision chest logo embroidery',
      'Multiple fabric color choices matching corporate brand palette',
      'Custom woven inside neck label and individual polybag packaging'
    ],
    badge: '100% Customizable • Front & Back Print',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-5',
    name: 'Custom Collared Polo T-Shirt',
    slug: 'customizable-collared-polo-tshirt',
    description: 'Classic pique knit collared polo with 2-button placket. 100% customizable: embroider company insignia on front chest and print full branding across the back.',
    longDescription: 'Executive cotton pique polo shirt featuring ribbed knit collar, reinforced button placket, and side split hem. Designed for modern corporate styling.\n\n• 100% Customizable: Premium high-density embroidery on chest and bold graphic printing across back\n• Breathable Fabric: Heavy-duty 220 GSM pique matty cotton with color-fast dye\n• Styling Options: Contrast tipping, custom branded neck label, and assorted corporate colors',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_customizable_polo_tshirt.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Embroider or print company logo, graphics, or text)',
      'Fabric': '220 GSM Heavy-Duty Cotton Pique Matty Knit Fabric',
      'Style': 'Ribbed Collar & Sleeve Cuffs with 2-Button Placket',
      'Sizes Available': 'S, M, L, XL, XXL, 3XL',
      'Print Areas': 'Left Chest Embroidery, Full Back Graphic, Sleeve Monogram'
    },
    customizationOptions: [
      'Direct embroidery of corporate logo on left chest',
      'Bold company branding or event theme printing across back',
      'Custom dyed fabric or contrast collar tipping options',
      'Custom branded neck tag and premium garment packaging'
    ],
    badge: '100% Customizable • Embroidered & Printed',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-6',
    name: 'Vintage Buckle Leather Journal',
    slug: 'personalized-vintage-leather-journal-pen-set',
    description: 'Artisan handcrafted tan leather journal with antique brass buckle strap and ribbon bookmark. 100% customizable: blind deboss or laser engrave your brand logo and name.',
    longDescription: 'Heirloom-grade notebook bound in supple distressed vegan leather with an authentic antique brass roller buckle closure strap and ribbon marker.\n\n• 100% Customizable: Deep heat-stamped blind debossing or laser engraving of company logo and recipient name\n• Premium Pages: 192 bleed-resistant acid-free natural ruled pages for executive journaling\n• Packaging: Luxury rigid presentation box with custom corporate sleeve',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_personalized_leather_journal_pen.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Blind heat deboss or laser engrave brand logo and names)',
      'Cover Material': 'Premium Distressed Saddle Brown Vegan Leather',
      'Closure': 'Functional Antique Brass Metal Roller Buckle Strap',
      'Paper Details': '192 Ruled Pages, 100 GSM Natural Warm Cream Archival Paper',
      'Features': 'Satin Ribbon Bookmark, Lay-Flat 180-Degree Thread Binding'
    },
    customizationOptions: [
      'Deep blind debossing of corporate brand logo on front cover',
      'Laser engraved individual employee name or initials',
      'Custom printed corporate welcome page inserted inside',
      'Deluxe presentation gift box with customized belly band'
    ],
    badge: '100% Customizable • Brand Debossed',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-7',
    name: 'Matte Black Executive Pen',
    slug: 'custom-engraved-executive-metal-pen',
    description: 'Matte black retractable metal pen with silver accents and comfort grip. 100% customizable: laser engrave your company brand logo and text.',
    longDescription: 'Precision metal retractable ballpoint pen with matte black barrel, textured rubber comfort grip, and polished chrome pocket clip.\n\n• 100% Customizable: Crisp laser engraving of company logo and brand name\n• Writing Performance: German tungsten carbide refill with smooth smudge-free blue ink\n• Design: Click-action plunger with durable stainless steel clip',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_custom_engraved_metal_pen.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Precision laser engraved company brand logo and text)',
      'Body Finish': 'Matte Black Anodized Barrel with Chrome Plunger and Tip',
      'Grip & Clip': 'Ergonomic Non-Slip Rubber Grip with Stainless Steel Pocket Clip',
      'Mechanism': 'Smooth Click-Action Retractable Ballpoint',
      'Ink': 'High-Yield German Smudge-Free Blue Refill'
    },
    customizationOptions: [
      'Precision laser engraving of corporate logo and brand text',
      'Individual recipient name personalization',
      'Custom velvet presentation sleeve or gift box'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-8',
    name: 'Custom Heavyweight Hoodie',
    slug: 'customizable-premium-heavyweight-hoodie',
    description: 'Plush fleece pullover hoodie with kangaroo pocket and double-lined hood. 100% customizable: print or embroider brand logo on chest, sleeves, and full back.',
    longDescription: 'Heavyweight unisex pullover hoodie tailored from brushed fleece cotton for ultimate warmth and modern streetwear fit.\n\n• 100% Customizable: High-definition DTF print or embroidery on front chest, kangaroo pocket, and full back panel\n• Heavyweight Fabric: 320 GSM combed cotton fleece with thermal inner lining and matching drawstrings\n• Durability: Ribbed cuffs and waistband with spandex for shape retention; sizes XS to 3XL',
    category: 'merchandise',
    categoryName: 'Customizable Merchandise',
    image: '/images/products/merch_customizable_premium_hoodie.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Screen print, DTF, or embroider any logo, slogan, or artwork)',
      'Fabric': '320 GSM Heavyweight Combed Cotton Fleece with Thermal Brushed Lining',
      'Style': 'Unisex Pullover Hoodie with Kangaroo Pocket & Double-Lined Hood',
      'Sizes Available': 'XS, S, M, L, XL, XXL, 3XL',
      'Customization Areas': 'Left Chest Logo, Kangaroo Pocket, Sleeve Badges, Full Back Graphic'
    },
    customizationOptions: [
      'Full front and back custom brand logo printing',
      'Direct high-density corporate embroidery',
      'Multiple fleece color options (Black, Charcoal, Navy, Maroon, Grey)',
      'Custom woven neck label and presentation polybag'
    ],
    badge: '100% Customizable • Front & Back Print',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },

  // ==========================================
  // GADGET GIFTING (Choosable Colors & Brand Printable)
  // ==========================================
  {
    id: 'prod-gadget-1',
    name: 'ErgoFold Silver Laptop Stand',
    slug: 'ergofold-pro-silver-aluminum-laptop-stand',
    description: 'Foldable CNC aluminum ergonomic laptop riser in anodized silver. 100% customizable: laser engrave your company logo on the support arm.',
    longDescription: 'Precision-machined aircraft-grade aluminum laptop stand engineered with multi-level angle adjustment, non-slip silicone pads, and ventilated cooling.\n\n• 100% Customizable: Precision laser engraved corporate logo on aluminum base arm\n• Ergonomic Comfort: Multi-angle height adjustment for healthy posture and screen alignment\n• Universal Fit: Compatible with 10 to 17.3 inch laptops; folds flat with carry pouch',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_ergofold_silver_laptop_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engraved company logo and text)',
      'Material': 'Precision CNC Machined Aircraft-Grade Aluminum Alloy',
      'Finish': 'Anodized Matte Metallic Silver with Anti-Scratch Seal',
      'Adjustment': 'Multi-Level Ergonomic Height & Angle Incline Settings',
      'Compatibility': 'Universal fit for all 10 to 17.3 inch laptops and MacBooks',
      'Packaging': 'Protective Felt Travel Pouch and Presentation Gift Box'
    },
    customizationOptions: [
      'Precision laser engraving of corporate logo on base arm',
      'Custom color anodizing for bulk corporate orders',
      'Custom printed protective velvet/felt carry pouch',
      'Corporate gift box sleeve with welcome insert'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-24'
  },
  {
    id: 'prod-gadget-2',
    name: 'ErgoFold Black Laptop Stand',
    slug: 'ergofold-pro-black-aluminum-laptop-stand',
    description: 'Matte black anodized aluminum collapsible laptop riser with dual triangle support. 100% customizable: laser engrave company logo and text.',
    longDescription: 'Heavy-duty matte black aluminum laptop stand offering stable dual-triangle support, ventilated heat dissipation, and compact portability.\n\n• 100% Customizable: Crisp laser engraving of brand logo and company name\n• Rock-Solid Stability: Non-slip silicone padding with multi-angle height tilt\n• Portable Design: Rapid collapsible folding mechanism with protective carry pouch',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_ergofold_black_laptop_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engrave corporate brand logo and slogan)',
      'Material': 'High-Strength Sandblasted Aluminum Alloy',
      'Finish': 'Stealth Matte Black Anodized Coating',
      'Adjustment': 'Multi-Angle Height and Incline Articulation',
      'Protection': 'Thick Non-Slip Silicone Padding on Cradles and Feet',
      'Packaging': 'Protective Travel Pouch and Corporate Gift Box'
    },
    customizationOptions: [
      'Laser engraved company brand logo on support arm',
      'Custom branded protective sleeve',
      'Gift box packaging with personalized onboarding card'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-25'
  },
  {
    id: 'prod-gadget-3',
    name: 'Orbit 360 Swivel Phone Stand',
    slug: 'orbit-360-swivel-rotatable-mobile-stand',
    description: 'Heavy-duty matte black 360-degree rotating desktop phone stand with dual hinges. 100% customizable: laser engrave individual names and brand logo.',
    longDescription: 'Solid metal rotating desktop phone dock featuring a mechanical 360-degree swivel bearing base and dual-axis folding hinges.\n\n• 100% Customizable: Precision laser engraved employee name or corporate logo on backplate\n• 360 Swivel Rotation: Tactile mechanical turntable for easy desk sharing and video meetings\n• Cable Routing: Integrated charging port slot with anti-scratch silicone cushions',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_orbit_360_mobile_stand.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Laser engraved recipient name or corporate logo)',
      'Rotation': '360-Degree Mechanical Swivel Turntable Base with Tactile Click',
      'Articulation': 'Dual-Hinge Height and Viewing Angle Adjustment',
      'Cable Management': 'Integrated Cutout Slot for Charging Cables',
      'Material': 'Weighted Solid Aluminum Alloy with Anti-Skid Silicone Base'
    },
    customizationOptions: [
      'Laser engraving of employee name or company brand logo',
      'Individual name personalization for team gifting',
      'Rigid presentation gift box packaging'
    ],
    badge: '360 Swivel • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-26'
  },
  {
    id: 'prod-gadget-4',
    name: 'Apex Aluminum Phone Cradle',
    slug: 'apex-precision-aluminum-desktop-phone-cradle',
    description: 'Minimalist triangular matte black aluminum desktop phone cradle. 100% customizable: laser engrave employee names and company logos.',
    longDescription: 'Single-piece bent aerospace aluminum phone stand designed with an optimal 60-degree viewing angle for hands-free desk monitoring.\n\n• 100% Customizable: Laser engraved individual recipient name or company logo across base plate\n• Premium Protection: Thick silicone cushioning pads on device rest and base bottom\n• Cable Port: Rear pass-through cutout for clean desk cable management',
    category: 'gadgets',
    categoryName: 'Gadget Gifting',
    image: '/images/products/gadget_apex_precision_phone_cradle.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Precision laser engraved name or company logo)',
      'Material': 'Monolithic Bent Aerospace-Grade Aluminum Alloy',
      'Angle': 'Optimal 60-Degree Ergonomic Hands-Free Viewing Angle',
      'Protection': 'Soft Silicone Anti-Scratch Cushions on Face and Feet',
      'Cable Management': 'Rear Cable Pass-Through Hole for Clean Desk Setup'
    },
    customizationOptions: [
      'Laser engraving across front lip or bottom baseplate',
      'Individual recipient name personalization',
      'Custom presentation gift box with corporate card'
    ],
    badge: '100% Customizable • Laser Engraved',
    active: true,
    featured: true,
    createdAt: '2026-02-27'
  },

  // ==========================================
  // EATABLE GIFTINGS (100% Choosable Flavors & Sweets)
  // ==========================================
  {
    id: 'prod-edible-1',
    name: 'Royal Festive Mithai Box',
    slug: 'traditional-royal-mithai-selection',
    description: 'Pure ghee handcrafted Indian sweets in a royal presentation box. 100% customizable: select from multiple sweet varieties for your bespoke festive hamper.',
    longDescription: 'Handcrafted pure ghee Indian sweets made with rich pistachios, saffron, and almonds. Presented in a regal navy and gold gift box with satin ribbon.\n\n• Available Sweets: Kaju Katli, Motichoor Laddoo, Peda, Milk Cake, Besan Laddoo, and Dry Fruit Barfi\n• Quality Highlights: 100% pure desi ghee, fresh batch preparation, zero preservatives\n• Customization: Multiple sweet options to choose from with custom corporate greeting tags',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_traditional_royal_mithai.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Handcrafted Pure Ghee Festive Mithai',
      'Sweet Options': 'Multiple Options (Kaju Katli, Laddoos, Peda, Milk Cake, Barfi)',
      'Purity & Freshness': '100% Pure Desi Ghee, Prepared Fresh to Order',
      'Packaging Style': 'Regal Gold and Navy Foil Keepsake Box with Ribbon',
      'Hamper Selection': '100% Choosable Sweet Assortment & Custom Message Card'
    },
    customizationOptions: [
      'Multiple sweet options to curate your box',
      'Custom corporate branded box sleeve and ribbon',
      'Individual airtight trays for freshness',
      'Personalized greeting card with corporate note'
    ],
    badge: 'Festive Mithai • Multiple Options',
    active: true,
    featured: true,
    createdAt: '2026-02-19'
  },
  {
    id: 'prod-edible-2',
    name: 'Royal Dry Fruits Platter',
    slug: 'royal-dryfruits-exotic-fruit-platter',
    description: 'Lavish 9-compartment solid wood platter filled with handpicked premium nuts and berries. 100% customizable: pick any dry fruit you want, including flavored cashews, flavored badams, and flavored raisins.',
    longDescription: 'A majestic 9-compartment solid wood platter presenting export-grade nuts, berries, and gourmet flavored selections.\n\n• Any Dry Fruit You Pick: California Almonds, Jumbo Cashews, Walnuts, Pistachios, Afghan Anjeer, and Dried Berries\n• Gourmet Flavoured Varieties: Peri Peri Cashews, Smoked Almonds, Salted Pistachios, and Spiced Flavoured Raisins\n• Presentation: Keepsake natural walnut finish wooden tray with brass plaque\n• Customization: Pick any dry fruit or flavor combination with custom engraved brass plaque',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_royal_dryfruits_platter.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Gourmet Handpicked Dry Fruits & Nuts Platter',
      'Dry Fruit Selection': 'Pick Any Dry Fruit (Almonds, Cashews, Walnuts, Anjeer, Pistachios, Berries)',
      'Flavoured Options': 'Flavored Cashews, Flavored Badams, and Flavored Raisins Available',
      'Tray Material': 'Natural Solid Wood 9-Grid Platter with Brass Accent',
      'Hamper Selection': '100% Choosable Nut & Berry Mix with Laser Engraved Plaque'
    },
    customizationOptions: [
      'Pick any dry fruit, nut, or flavored variety',
      'Custom laser engraving on brass plaque with company logo',
      'Airtight packaging inside compartments for maximum crispness',
      'Custom satin ribbon and foil stamped gift card'
    ],
    badge: 'Pick Any Dry Fruit • Flavored Options',
    active: true,
    featured: true,
    createdAt: '2026-02-20'
  },
  {
    id: 'prod-edible-3',
    name: 'Saras Che Coin Khakhra',
    slug: 'saras-che-artisanal-coin-khakhra',
    description: 'Crispy bite-sized whole wheat coin khakhras roasted oil-free in rice bran oil. Available in Cheese, Methi, Jeera, Masala, Peri Peri, and multiple savory flavors.',
    longDescription: 'Authentic Gujarati coin khakhras by Saras Che, crafted from whole wheat and vacuum-roasted to an irresistible golden crisp.\n\n• Key Flavours: Gourmet Cheese, Kasuri Methi, Roasted Jeera, Chatpata Masala, Peri Peri, and Garlic Herb\n• Health Highlights: Roasted with heart-healthy rice bran oil, zero trans fat, 100% vacuum roasted\n• Customization: 100% choosable flavor combinations in custom corporate hampers',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_saras_che_khakhra.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Crispy Whole Wheat Coin Khakhra by Saras Che',
      'Flavor Varieties': 'Cheese Coin, Kasuri Methi, Roasted Jeera, Chatpata Masala, Peri Peri',
      'Roasting Standard': 'Vacuum Roasted with Rice Bran Oil (Zero Trans Fat, No Added Sugar)',
      'Packaging': 'Airtight Transparent Freshness Container with Saras Che Seal',
      'Serving Style': 'Bite-Sized Round Crunchy Coin Khakhras'
    },
    customizationOptions: [
      '100% choosable flavor assortments for gift hampers',
      'Custom corporate branding sleeve on outer container',
      'Multi-flavor tasting bundles for corporate gifting'
    ],
    badge: 'Roasted Khakhra • Multiple Flavours',
    active: true,
    featured: true,
    createdAt: '2026-02-21'
  },
  {
    id: 'prod-edible-4',
    name: 'Crispy Dehydrated Apple Chips',
    slug: 'crispy-dehydrated-cinnamon-apple-rings',
    description: 'Slow-dehydrated crispy orchard apple slices with natural peel curls. 100% natural and guilt-free. Available with custom branded jar stickers and multiple dustings.',
    longDescription: 'Hand-selected orchard fresh apples slow-dehydrated into delicate, crunchy curls without oil, added sugar, or artificial preservatives.\n\n• Flavor Dustings: Pure Orchard Sweet, Ceylon Cinnamon Dust, and Golden Honey Glaze\n• Nutrition Profile: 100% natural, high dietary fiber, gluten-free guilt-free snacking\n• Customization: Clear airtight tub with custom branded kraft label featuring your company logo',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_dehydrated_apple_chips.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': '100% Natural Dehydrated Orchard Apple Chips',
      'Flavor Varieties': 'Pure Orchard Sweet, Ceylon Cinnamon Dust, Light Honey Glaze',
      'Health Highlights': 'No Added Sugar, Zero Added Oil, Gluten-Free, High Natural Fiber',
      'Packaging': 'Clear Airtight Tub with Custom Kraft Brand Sticker',
      'Customization': '100% Customizable with Custom Corporate Brand Logo on Label'
    },
    customizationOptions: [
      'Choice of flavor dusting (Natural Sweet, Ceylon Cinnamon, Honey Glaze)',
      'Custom kraft label with corporate brand logo and message',
      'Gift hamper inclusion with personalized greeting card'
    ],
    badge: '100% Natural • Custom Branded',
    active: true,
    featured: true,
    createdAt: '2026-02-22'
  },
  {
    id: 'prod-edible-5',
    name: 'Gourmet Fresh-Baked Cookies',
    slug: 'artisanal-gourmet-fresh-baked-cookies',
    description: 'Freshly baked gourmet butter cookies loaded with rich chocolate chunks and roasted inclusions. Available in multiple decadent artisanal flavor varieties.',
    longDescription: 'Handcrafted small-batch cookies made with pure butter and premium Belgian chocolate chunks. Crisp golden exterior with melt-in-mouth soft centers.\n\n• Decadent Flavours: Classic Choco-Chip, Double Dark Chocolate, Oatmeal Cranberry, Butterscotch Crunch, and Red Velvet\n• Baking Quality: 100% pure dairy butter, baked fresh to order, zero artificial essence\n• Customization: 100% choosable flavor assortments in branded cookie tins or presentation boxes',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_artisanal_cookies.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Gourmet Handcrafted Fresh-Baked Butter Cookies',
      'Flavor Selections': 'Classic Choco-Chip, Double Dark Chocolate, Oatmeal Cranberry, Butterscotch',
      'Baking Standard': '100% Pure Butter, Real Belgian Chocolate Chunks, Small Batch Fresh',
      'Texture': 'Crispy Golden Edge with Soft Rich Butter Center',
      'Packaging': 'Vintage Cookie Tin, Kraft Pouch, or Luxury Gift Box'
    },
    customizationOptions: [
      '100% choosable cookie flavor combinations',
      'Custom corporate branded cookie tin or presentation box',
      'Eggless and gluten-free batch options available on request'
    ],
    badge: 'Fresh Baked • Multiple Flavours',
    active: true,
    featured: true,
    createdAt: '2026-02-23'
  },
  {
    id: 'prod-edible-6',
    name: 'Artisanal Energy Bites',
    slug: 'artisanal-nutrient-rich-energy-bites',
    description: 'Handcrafted energy bites packed with premium crushed nuts and wholesome seeds. 100% natural, guilt-free snacking available in multiple delectable flavor options.',
    longDescription: 'Handcrafted energy bites loaded with roasted California almonds, crunchy seeds, and natural dates. Wholesome, guilt-free, and sustaining.\n\n• Key Flavours: Roasted Almond Crunch, Dark Cocoa Nut, Cashew Date, and Berry Seed\n• Snacking Profile: High-protein, zero refined sugar, 100% natural energy\n• Customization: Handpick your preferred flavor assortment for custom gift boxes',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_healthy_energy_bites.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Nutrient-Dense Healthy Energy Bites',
      'Flavour Options': 'Multiple Flavours (Almond Crunch, Dark Cocoa, Cashew Date, Berry Seed)',
      'Dietary Highlights': '100% Natural, Zero Refined Sugar, Gluten-Free',
      'Packaging Style': 'Airtight Keepsake Jar or Artisanal Presentation Pouch',
      'Hamper Selection': '100% Choosable Flavours & Custom Brand Labels'
    },
    customizationOptions: [
      'Choice of energy bite flavors',
      'Custom branded packaging sleeve or jar label',
      'Assorted flavor gift packs'
    ],
    badge: 'Healthy Energy Bites • Multiple Flavours',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-7',
    name: 'Gourmet Roasted Makhana',
    slug: 'gourmet-roasted-crispy-makhana',
    description: 'Slow-roasted jumbo fox nuts seasoned with artisanal spice blends. Light, crunchy, and available in multiple gourmet savory and zesty flavor varieties.',
    longDescription: 'Slow-roasted jumbo lotus seeds tossed in gourmet olive oil and artisanal seasonings. Ultra-crisp, light, and low-calorie.\n\n• Key Flavours: Cheese & Herb, Peri Peri, Himalayan Pink Salt, Pudina Masala, and Tangy Tomato\n• Snacking Profile: High-fiber, roasted oil-free, plant-based protein\n• Customization: 100% choosable flavors in branded canisters or custom gift jars',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_roasted_flavoured_makhana.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Slow-Roasted Gourmet Fox Nut Makhana',
      'Flavour Options': 'Multiple Flavours (Cheese & Herb, Peri Peri, Himalayan Salt, Pudina, Tangy Tomato)',
      'Dietary Highlights': 'Roasted Not Fried, Low Calorie, High Fiber, Gluten-Free',
      'Packaging Style': 'Freshness-Sealed Canister or Elegant Glass Jar',
      'Hamper Selection': '100% Choosable Flavours & Corporate Labeling'
    },
    customizationOptions: [
      '100% Choosable makhana flavor varieties',
      'Custom company logo sticker or sleeve',
      'Individual or multi-flavor gift hampers'
    ],
    badge: 'Roasted Makhana • Multiple Flavours',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-8',
    name: 'Paan Shots Flavored Paan Shots',
    slug: 'signature-gourmet-snack-mixes',
    description: 'Refreshing bite-sized paan shots infused with rich gulkand, menthol, and cooling herbs. 100% tobacco-free, natural, and digestive.',
    longDescription: 'Traditional royal paan reimagined into delectable bite-sized digestive treats packed with natural herbs and sweet gulkand.\n\n• Flavour Profile: Royal Calcutta Paan, Sweet Gulkand, Menthol, and Fennel\n• Quality Standard: 100% natural, tobacco-free, betel-nut free\n• Customization: Packaged in custom branded glass jars or tins',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_signature_gourmet_mixes.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Natural Digestive Paan Shots & Mukhwas',
      'Flavor Profile': 'Royal Paan, Sweet Gulkand, Mint & Botanical Extracts',
      'Dietary Highlights': '100% Tobacco-Free, Betel-Nut Free, Pure Vegetarian Digestives',
      'Packaging Style': 'Vintage Glass Jar with Cork Lid or Polished Metal Tin',
      'Hamper Selection': '100% Choosable Flavors with Custom Branded Labels'
    },
    customizationOptions: [
      'Choice of mix varieties (Breakfast, Mexican, Italian, etc.)',
      'Custom corporate branded label and message tag',
      'Pairing with custom gift boxes and breakfast trays'
    ],
    badge: 'Gourmet Mixes • Multiple Options',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-9',
    name: 'Artisanal Digestive Mukhwas',
    slug: 'natural-handcrafted-digestive-mouth-fresheners',
    description: 'Unique natural digestive mukhwas balls infused with traditional cooling herbs and botanical extracts. Healthy, refreshing, and available in royal Paan, Pudina, and herbal flavors.',
    longDescription: 'Bite-sized traditional Ayurvedic digestive drops made with pure botanical herbs, cooling mint, and aromatic spices. Refreshing, palate-cleansing, and gut-friendly.\n\n• Signature Flavours: Royal Calcutta Paan, Cool Pudina Mint, Chatpata Anardana, and Sweet Fennel\n• Wellness Profile: 100% natural digestives, zero tobacco/areca nut, antioxidant-rich herbs\n• Customization: 100% choosable flavors packed in vintage glass vials or metallic tins',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_natural_mouth_fresheners.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Natural Herbal Digestive Drops & Mouth Freshener',
      'Flavour Options': 'Multiple Flavours (Royal Paan, Cool Pudina, Chatpata Anardana, Sweet Fennel)',
      'Wellness Highlights': '100% Natural Digestives, Gut-Friendly Herbs, Zero Tobacco / Betel Nut',
      'Packaging Style': 'Vintage Corked Glass Jar or Polished Tin Caddy',
      'Hamper Selection': '100% Choosable Flavours with Custom Logo Labels'
    },
    customizationOptions: [
      'Selection from multiple signature digestive flavors',
      'Custom branded tin or glass jar packaging',
      'Festive box inclusion with custom welcome note'
    ],
    badge: 'Natural Mukhwas • Unique Flavours',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-10',
    name: 'Crispy Healthy Savouries',
    slug: 'crispy-artisanal-healthy-savouries',
    description: 'Crisp and flavorful artisanal namkeen assortment crafted with whole grains, roasted pulses, and vegetable crisps. Multiple gourmet savory options and seasonings available.',
    longDescription: 'A colorful banquet of light, crispy wholesome savouries crafted from vacuum-cooked vegetable crisps, roasted pulses, and seasoned grains.\n\n• Savoury Varieties: Crispy Beetroot Strips, Roasted Golden Sev, Spiced Chickpea Crunch, and Multi-Millet Crisps\n• Flavor Profiles: Chatpata Masala, Tangy Peri Peri, Pudina Punch, and Classic Salted\n• Customization: 100% choosable savoury blends and custom festive tin packaging',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_healthy_artisanal_savouries.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Wholesome Roasted & Vacuum-Cooked Savoury Namkeen',
      'Savoury Options': 'Multiple Varieties (Beetroot Crisps, Roasted Sev, Chickpea Crunch, Millet Chips)',
      'Flavour Seasonings': 'Multiple Flavours (Chatpata Masala, Peri Peri, Pudina, Sea Salt)',
      'Dietary Highlights': 'Low-Oil Vacuum Cooked, Nutrient-Dense, No Artificial Additives',
      'Hamper Selection': '100% Choosable Savouries in Decorative Jars or Gift Boxes'
    },
    customizationOptions: [
      '100% Choosable savoury selections and seasoning blends',
      'Custom branded canister or airtight gift pouch',
      'Corporate gift box assortment with personalized message'
    ],
    badge: 'Healthy Savouries • Multiple Options',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-11',
    name: 'Artisanal Hill Station Chocolates',
    slug: 'artisanal-handcrafted-chocolates',
    description: 'Exquisite handmade chocolates crafted from pure single-origin cocoa. Choose from authentic Ooty chocolates, rich Kodaikanal chocolates, and premium handmade truffles.',
    longDescription: 'Luxury gift box of melt-in-mouth chocolates crafted using traditional hill station recipes and pure cocoa butter.\n\n• Chocolate Origins: Authentic Ooty Chocolates, Rich Kodaikanal Chocolates, and Artisan Handmade Truffles\n• Indulgent Assortment: Roasted Hazelnut Praline, Salted Caramel Truffles, Dark Ganache, and White Berry Swirls\n• Purity & Texture: 100% pure cocoa butter, silken texture, zero artificial oils\n• Customization: Handpick your preferred chocolate assortment in a royal blue and gold gift box',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_artisan_handcrafted_chocolates.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Premium Handmade & Hill Station Chocolates',
      'Origin Varieties': 'Ooty Chocolates, Kodaikanal Chocolates, and Handmade Truffles',
      'Flavour Selections': 'Hazelnut Praline, Salted Caramel, Dark Ganache, Almond Rocks, Berry Swirl',
      'Packaging Style': 'Royal Blue Rigid Box with Gold Foil Stamping & Satin Bow',
      'Hamper Selection': '100% Choosable Chocolate Assortment & Custom Branded Sleeves'
    },
    customizationOptions: [
      'Choice of Ooty, Kodaikanal, or handmade chocolate selections',
      'Custom corporate branded box sleeve and ribbon',
      'Assorted truffle count (12-piece, 18-piece, or 24-piece boxes)'
    ],
    badge: 'Ooty & Kodaikanal • Handmade Chocolates',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-12',
    name: 'Estate Whole Coffee Beans',
    slug: 'estate-single-origin-coffee-beans',
    description: 'Handpicked estate coffee beans slow-roasted to aromatic perfection. Supplied in the finest single-origin Arabica, bold Robusta, or custom estate blends.',
    longDescription: 'Shade-grown, hand-harvested whole coffee beans sourced directly from premier South Indian coffee plantations.\n\n• Bean Varieties: 100% High-Grown Arabica, Premium Robusta, and Signature Vienna Blends\n• Roast Profiles: Medium Roast (Nutty & Floral) and Dark Roast (Chocolatey & Intense)\n• Freshness Guarantee: Nitrogen-flushed small-batch roast for rich crema and intoxicating aroma\n• Customization: Custom burlap sack packaging with personalized corporate tags',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_estate_arabica_coffee_beans.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Estate-Grown Roasted Whole Coffee Beans',
      'Bean Varieties': 'Finest Arabica, Bold Robusta, and Custom Plantation Blends',
      'Roast Level': 'Medium Roast or Dark Roast Available',
      'Packaging Style': 'Artisan Burlap Sack with Sealed Valve Pouch Inside',
      'Hamper Selection': '100% Choosable Bean Type & Custom Corporate Hangtag'
    },
    customizationOptions: [
      'Choice of Arabica, Robusta, or blended beans',
      'Custom printed jute sack or foil pouch with company logo',
      'Pairing with brass coffee filters or coffee mugs'
    ],
    badge: 'Finest Arabica & Robusta • Whole Beans',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-13',
    name: 'Fresh Ground Coffee Powder',
    slug: 'artisanal-fresh-ground-coffee-powder',
    description: 'Freshly roasted and micro-ground coffee powder delivering full-bodied flavor. Available in the finest Arabica, Robusta, or authentic South Indian filter coffee blends.',
    longDescription: 'Freshly ground estate coffee prepared to order for the ultimate morning ritual. Rich, velvety, and deeply aromatic.\n\n• Powder Varieties: 100% Pure Arabica, Bold Robusta, and Classic Chicory-Blended Filter Coffee\n• Grind Consistency: Tailored for South Indian Filter, French Press, Moka Pot, or Pour Over\n• Quality Profile: Freshly ground from specialty-grade beans, rich aroma, and smooth finish\n• Customization: Eco-friendly burlap pouch with brass measuring scoop and branded label',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_artisanal_ground_coffee_powder.jpg',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': 'Freshly Ground Specialty Coffee Powder',
      'Bean Varieties': 'Finest Arabica, Premium Robusta, and Filter Coffee Blends',
      'Grind Options': 'Fine (Filter/Espresso), Medium (Pour Over), Coarse (French Press)',
      'Packaging Style': 'Heritage Burlap Sack with Brass Scoop & Air-Lock Inner Seal',
      'Hamper Selection': '100% Choosable Roast & Custom Corporate Sleeves'
    },
    customizationOptions: [
      'Choice of Arabica, Robusta, or Filter coffee powder blends',
      'Custom corporate branded label and message note',
      'Optional inclusion of traditional brass coffee filter and brass scoop'
    ],
    badge: 'Finest Arabica & Robusta • Fresh Ground',
    active: true,
    featured: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'prod-edible-14',
    name: 'Pure Wildflower Honey Jar',
    slug: 'pure-wildflower-honey-jar',
    description: 'Pure unpasteurized wildflower honey in a vintage glass jar with rustic burlap top and custom tag. 100% raw, natural, and rich in floral aroma.',
    longDescription: 'Raw, unprocessed multi-floral honey harvested from pristine wild valleys. Sealed in an airtight glass jar with traditional burlap cloth and twine tie.\n\n• Purity & Flavor: 100% raw unheated honey with natural sweetness and enzymes\n• Packaging: Classic glass jar with rustic burlap hood and wooden honey dipper option\n• Customization: Custom branded kraft hangtag or jar label with corporate emblem',
    category: 'edible',
    categoryName: 'Eatable Giftings',
    image: '/images/products/edible_pure_wildflower_honey.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Product Type': '100% Pure Raw Wildflower Honey',
      'Origin': 'Sustainably Harvested Valley Wildflowers',
      'Purity Standard': 'Unpasteurized, Unfiltered, No Added Sugars or Syrups',
      'Packaging Style': 'Heritage Glass Jar with Jute Burlap Lid & Jute Twine Bow',
      'Customization': 'Personalized Kraft Hangtag with Company Brand Logo'
    },
    customizationOptions: [
      'Personalized corporate hangtag with brand logo and message',
      'Custom vinyl jar sticker printing',
      'Optional mini wooden honey dipper stick included'
    ],
    badge: '100% Pure • Raw Honey',
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },

  // ==========================================
  // FESTIVE GIFTING: SAMPLE & EXAMPLE HAMPERS
  // ==========================================
  {
    id: 'prod-fest-1',
    name: 'Aarambh Deepavali Festive Hamper',
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
    name: 'Royal Utsav Festive Chest',
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
    name: 'Shwet Kamal Celebration Box',
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
    name: 'Sovereign Eco Executive Suite',
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
    name: 'Aurum Black & Gold Executive Set',
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
    name: 'Heritage Walnut Journal & Pen Duo',
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
    name: 'Chrono Classic 4-Piece Suite',
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
    name: 'Cognac Wallet & Chrome Pen Duo',
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
    name: 'Artisan Wood & Leather 4-in-1 Suite',
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
    name: 'Vanguard Organizer Folio Journal',
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
    name: 'Apex Tech-Pocket Notebook',
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
    name: 'Pro-Twist Fitness Shaker Bottle',
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
    name: 'Heat Reveal Magic Mug',
    slug: 'chroma-thermal-magic-reveal-ceramic-mug',
    description: 'Heat-sensitive ceramic mug that shifts from matte black to reveal your custom photo or logo when hot liquid is poured. 100% customizable.',
    longDescription: 'Thermochromic ceramic mug that magically reveals custom photos or corporate branding when filled with hot coffee or tea.\n\n• Magic Heat Reveal: Sleek black coating transforms to reveal full-color high-definition artwork\n• Capacity & Build: 330ml ceramic mug with ergonomic easy-grip C-handle\n• Customization: Full panoramic custom photo, slogan, or logo print',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_heat_reveal_magic_mug.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Panoramic photo, slogan, and logo printing)',
      'Action': 'Thermochromic Heat-Sensitive Magic Color Transformation',
      'Capacity': '330ml / 11 oz Premium Ceramic Coffee Mug',
      'Safety': 'Food Grade, Non-Toxic Ceramic with Smooth Glaze',
      'Packaging': 'Individual Protective Bubble Box or Presentation Gift Box'
    },
    customizationOptions: [
      'Full panoramic photo and brand logo reveal printing',
      'Individual name and personalized photo printing',
      'Gift box packaging with custom corporate greeting card'
    ],
    badge: '100% Customizable • Magic Reveal',
    active: true,
    featured: true,
    createdAt: '2026-02-12'
  },
  {
    id: 'prod-corp-13',
    name: 'Custom Photo Print Mug',
    slug: 'spectrum-glazed-ceramic-bistro-mug',
    description: 'Classic white glossy ceramic mug designed for high-resolution full-color photo and logo printing. 100% customizable.',
    longDescription: 'Durable white ceramic coffee mug with high-gloss enamel glaze, engineered for vibrant photo sublimation and corporate branding.\n\n• Print Quality: Scratch-resistant, microwave-safe full-color photo and logo printing\n• Build: 350ml high-density ceramic with comfortable curved handle\n• Customization: Single-side, dual-side, or full wraparound photo prints',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_photo_print_mug.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (High-definition full-color photo and logo print)',
      'Color': 'Brilliant Gloss White Ceramic Canvas',
      'Capacity': '350ml Generous Desk Capacity',
      'Material': 'High-Density Glazed Ceramic with Thermal Heat Retention',
      'Durability': 'Microwave Safe, Dishwasher Safe, Chip-Resistant Glaze'
    },
    customizationOptions: [
      'Full wraparound or dual-sided photo and logo sublimation',
      'Custom corporate color accent on inner rim or handle',
      'Individual gift box packaging with personalized note'
    ],
    badge: '100% Customizable • Photo Print',
    active: true,
    featured: true,
    createdAt: '2026-02-13'
  },
  {
    id: 'prod-corp-14',
    name: 'Insignia Insulated Egg Tumbler',
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
    name: 'Piece Out Pop Art Puzzle',
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

export const INITIAL_ENQUIRIES: Enquiry[] = [];