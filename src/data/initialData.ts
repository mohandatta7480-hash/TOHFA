import type { Category, Product, Enquiry } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-corporate',
    name: 'Corporate Gifting',
    slug: 'corporate',
    description: 'Bespoke executive gift suites, leather briefcase sets, sustainable eco hampers, luxury drinkware, and classic corporate recognition boxes. 100% customizable with brand name printing and multiple color options.',
    coverImage: '/images/products/corp_executive_briefcase_suite.png',
    active: true,
    featuredHighlight: 'Executive briefcase suites, eco wooden hampers, and luxury desk sets'
  },
  {
    id: 'cat-festive',
    name: 'Festive Gifting',
    slug: 'festive',
    description: 'Curated royal celebration hampers for Diwali, New Year, and festive milestones. 100% customizable gift boxes with handpicked gourmet delicacies, artisanal glassware, and divine decor.',
    coverImage: '/images/products/festive_gulab_royal_box.png',
    active: true,
    featuredHighlight: 'Royal Diwali hampers, artisanal glassware sets, and heritage gift chests'
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
    description: 'Slim adhesive leatherette phone wallet with card notch. 100% customizable with brand name printing. Multiple color and design options available with a bunch more variations to choose from.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-2',
    name: 'Wooden Tea Coaster Set',
    slug: 'natural-wooden-tea-coaster-set',
    description: 'Handcrafted solid wood coasters with rimmed lip and stand. 100% customizable: laser engrave brand logo and graphics. Multiple wood finishes, shapes, and design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-3',
    name: 'Aluminum Executive Card Holder',
    slug: 'executive-pocket-card-holder',
    description: 'Ultra-slim brushed aluminum card holder with thumb slide. 100% customizable: precision laser engrave company logo and names. Multiple metallic color and finish options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-4',
    name: 'Custom Crew Neck T-Shirt',
    slug: 'customizable-round-neck-tshirt',
    description: '100% bio-washed combed cotton crew neck t-shirt. 100% customizable: print your logo on front, back, and sleeves. Multiple fabric color and design options available with a bunch more variations.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-5',
    name: 'Custom Collared Polo T-Shirt',
    slug: 'customizable-collared-polo-tshirt',
    description: 'Classic pique knit collared polo with 2-button placket. 100% customizable: embroider company insignia on front chest and print full branding across the back. Multiple shirt colors and collar design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-6',
    name: 'Vintage Buckle Leather Journal',
    slug: 'personalized-vintage-leather-journal-pen-set',
    description: 'Artisan handcrafted tan leather journal with antique brass buckle strap and ribbon bookmark. 100% customizable with brand logo. Multiple diary colors, leather finishes, and design options available with a bunch more variations.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-7',
    name: 'Matte Black Executive Pen',
    slug: 'custom-engraved-executive-metal-pen',
    description: 'Matte black retractable metal pen with silver accents and comfort grip. 100% customizable: laser engrave company logo and text. Multiple pen barrel colors and design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-28'
  },
  {
    id: 'prod-merch-8',
    name: 'Custom Heavyweight Hoodie',
    slug: 'customizable-premium-heavyweight-hoodie',
    description: 'Plush fleece pullover hoodie with kangaroo pocket. 100% customizable: print or embroider logo on chest and back. Multiple hoodie colors, fits, and design options available.',
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
    description: 'Foldable CNC aluminum ergonomic laptop riser in anodized silver. 100% customizable with laser engraved logo. Multiple finish colors and design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-24'
  },
  {
    id: 'prod-gadget-2',
    name: 'ErgoFold Black Laptop Stand',
    slug: 'ergofold-pro-black-aluminum-laptop-stand',
    description: 'Matte black aluminum collapsible laptop riser with dual triangle support. 100% customizable with laser engraved logo. Multiple metallic color and design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-25'
  },
  {
    id: 'prod-gadget-3',
    name: 'Orbit 360 Swivel Phone Stand',
    slug: 'orbit-360-swivel-rotatable-mobile-stand',
    description: 'Heavy-duty 360-degree rotating desktop phone stand with dual hinges. 100% customizable with laser engraved logo and names. Multiple color and dock design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-02-26'
  },
  {
    id: 'prod-gadget-4',
    name: 'Apex Aluminum Phone Cradle',
    slug: 'apex-precision-aluminum-desktop-phone-cradle',
    description: 'Minimalist triangular aluminum desktop phone cradle. 100% customizable: laser engrave employee names and logos. Multiple color finishes and design options available.',
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
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },

  // ==========================================
  // FESTIVE GIFTING: SAMPLE & EXAMPLE HAMPERS
  // ==========================================
  {
    id: 'prod-fest-1',
    name: 'Gulab Utsav Festive Box',
    slug: 'gulab-utsav-festive-box',
    description: 'Royal pink and gold celebration box with nutty mix, masala makhana, cashews, diya, and fairy lights. 100% customizable with brand printing.',
    longDescription: 'Opulent festive curation in a pink and gold foil motif gift box.\n\n• Inclusions: Spiced nutty mix, roasted mint makhana, peri peri cashews, brass diya, organza treat potli, dried potpourri, fairy lights, and greeting card\n• 100% Customizable: Handpick any assortment of gourmet snacks, sweets, and festive decor\n• Packaging: Rigid pink and gold keepsake chest with custom corporate sleeve',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_gulab_royal_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Festive Celebration Hamper (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, foods, gadgets, and decor',
      'Inclusions': 'Nutty Mix Jar, Masala Makhana Jar, Cashews Jar, Brass Diya, Organza Potli, Fairy Lights, Greeting Card',
      'Packaging': 'Deluxe Rani Pink & Gold Foil Motif Rigid Presentation Box',
      'Branding & Print': 'Corporate Logo & Custom Message Sleeve Printable'
    },
    customizationOptions: [
      'Handpick custom combinations of sweets, dry fruits, and festive decor',
      'Foil stamped corporate logo on box lid',
      'Custom greeting card with personalized message'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-2',
    name: 'Jharokha Heritage Festive Box',
    slug: 'jharokha-heritage-festive-box',
    description: 'Artisan floral jharokha celebration box with rangoli mandala kit, chocolate slabs, roasted nuts, and sweets. 100% customizable with brand printing.',
    longDescription: 'Royal Rajasthani arched jharokha gift chest with festive gourmet treats.\n\n• Inclusions: Mudra Mandala organic rangoli kit, artisanal dark chocolate bars, spiced roasted almonds jar, and festive sweets\n• 100% Customizable: Mix and match gourmet confectioneries and traditional festive decor\n• Packaging: Double-door jharokha illustrated keepsake chest with custom branding',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_jharokha_heritage_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Heritage Festive Hamper (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, sweets, and decor',
      'Inclusions': 'Jharokha Illustrated Chest, Mudra Mandala Rangoli Kit, Gourmet Chocolate Bars, Roasted Almonds Jar',
      'Packaging': 'Double-Door Arch Illustrated Heritage Box with Custom Corporate Branding'
    },
    customizationOptions: [
      'Mix and match chocolates, dry fruits, and rangoli accessories',
      'Corporate logo foil stamping on keepsake chest',
      'Personalized employee or client greeting insert'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-3',
    name: 'Emerald Royale Glassware Festive Set',
    slug: 'emerald-royale-glassware-festive-set',
    description: 'Artisanal emerald green gift chest with 4 dual-tone glass tumblers, embroidered velvet coasters, and brass stirrers. 100% customizable with brand printing.',
    longDescription: 'Luxury festive hospitality set presented in an emerald botanical painted gift box.\n\n• Inclusions: 4 hand-blown amber and green dual-tone glass tumblers, gold-embroidered green velvet coasters, and solid brass stirrers\n• 100% Customizable: Custom engraving on stirrers and personalized corporate lid printing\n• Packaging: Painted royal botanical presentation box with secure foam compartments',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_emerald_glassware_set.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Artisanal Hospitality Hamper (100% Customizable)',
      'Customization': '100% Customizable: Laser engrave stirrers and brand presentation box',
      'Inclusions': '4 Amber-Green Glass Tumblers, Gold-Embroidered Velvet Coasters, Solid Brass Stirrers',
      'Packaging': 'Emerald Botanical Hand-Painted Presentation Gift Box'
    },
    customizationOptions: [
      'Laser engraved corporate monogram on brass stirrers',
      'Custom embroidered logo on velvet coasters',
      'Deluxe gift box with corporate band'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-4',
    name: 'Organic Honey & Nectar Festive Box',
    slug: 'organic-honey-nectar-festive-box',
    description: 'Emerald and gold hamper with raw wildflower honey, fruit preserve jar, cold-pressed nectar bottle, and wooden dipper. 100% customizable with brand printing.',
    longDescription: 'Pure organic wellness and festive sweetness curation in an emerald gold-ribbon gift box.\n\n• Inclusions: Pure raw wildflower honey jar, artisan fruit preserve jar with burlap cover, cold-pressed organic nectar bottle, and mini wooden honey dipper\n• 100% Customizable: Personalized jar labels and custom printed corporate greeting card\n• Packaging: Matte forest green rigid gift box with satin gold ribbon bow',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_organic_honey_nectar_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Organic Festive Gourmet Hamper (100% Customizable)',
      'Customization': '100% Customizable: Custom branded jar tags and gift box ribbons',
      'Inclusions': 'Raw Wildflower Honey Jar, Fruit Preserve Jar, Cold-Pressed Nectar Bottle, Wooden Dipper',
      'Packaging': 'Forest Green Rigid Box with Gold Ribbon Bow and Fitted Insert'
    },
    customizationOptions: [
      'Personalized corporate hangtags on jars and bottles',
      'Custom printed gold foil logo on box lid',
      'Festive greeting card with company message'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-5',
    name: 'Shubh Kamal Divine Festive Box',
    slug: 'shubh-kamal-divine-festive-box',
    description: 'Spiritual festive box with laser-crafted gold lotus hanging, 4 glass tealight diyas, dhoop sticks, and treat potli. 100% customizable with brand printing.',
    longDescription: 'Serene divine celebration hamper crafted for Diwali and auspicious occasions.\n\n• Inclusions: Laser-cut red and gold lotus wall hanging with pearl beads, 4 glass bowl tealight diyas, fragrant dhoop sticks, and pink organza dry fruit potli\n• 100% Customizable: Handpick sweets or dry fruits and customize outer packaging\n• Packaging: Crisp white presentation box with decorative festive shred and custom note',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_shubh_kamal_divine_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Divine Spiritual Celebration Box (100% Customizable)',
      'Customization': '100% Customizable: Handpick your preferred items, treats, and decor',
      'Inclusions': 'Laser-Cut Gold Lotus Hanging, 4 Glass Tealight Diyas, Fragrant Dhoop Sticks, Organza Treat Potli',
      'Packaging': 'Classic White Keepsake Gift Box with Festive Cushioning'
    },
    customizationOptions: [
      'Add customized sweets or dry fruits inside the potli',
      'Custom printed box sleeve with corporate branding',
      'Personalized festive blessing card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-6',
    name: 'Mayur Heritage Dry Fruit Chest',
    slug: 'mayur-heritage-dry-fruit-chest',
    description: 'Heritage wooden trunk with brass clasp, peacock artwork, and 2 glass jars filled with dry fruits on golden satin. 100% customizable.',
    longDescription: 'Royal peacock motif keepsake trunk box with metallic brass latch and golden satin lining.\n\n• Inclusions: 2 wide-mouth glass jars filled with premium California almonds and roasted cashews\n• 100% Customizable: Handpick any combination of flavored dry fruits, sweets, or gourmet mixes\n• Packaging: Lidded wooden keepsake trunk with brass clasp and custom company sleeve',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_mayur_peacock_chest.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Heritage Dry Fruit Trunk (100% Customizable)',
      'Customization': '100% Customizable: Handpick your choice of dry fruit jars and sweets',
      'Inclusions': 'Peacock Illustrated Keepsake Trunk, 2 Wide-Mouth Glass Jars, Golden Satin Bed',
      'Packaging': 'Lidded Keepsake Box with Polished Brass Clasp & Custom Sleeve'
    },
    customizationOptions: [
      'Handpick dry fruit varieties (Almonds, Cashews, Pistachios, Walnuts)',
      'Laser engraved or foil printed corporate logo on trunk lid',
      'Personalized festival greeting card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-7',
    name: 'Rajvilas Palace Briefcase Hamper',
    slug: 'rajvilas-palace-briefcase-hamper',
    description: 'Luxury rose and gold palace briefcase with brass handle, Jal Mahal illustration, and royal elephant motifs. 100% customizable.',
    longDescription: 'Stately royal palace briefcase gift trunk featuring traditional architectural artwork.\n\n• Inclusions: Heritage palace-themed rigid suitcase box with solid brass handle, security clasp, and customizable internal compartments\n• 100% Customizable: Fill with custom assortments of sweets, dry fruits, chocolates, or corporate merchandise\n• Packaging: Heavyweight rigid presentation briefcase with foil stamped corporate logo',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_rajvilas_palace_briefcase.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Royal Palace Briefcase Trunk (100% Customizable)',
      'Customization': '100% Customizable: Custom fill with gourmet treats, dry fruits, and gifts',
      'Inclusions': 'Jal Mahal Illustrated Briefcase Trunk with Solid Brass Handle & Metal Clasp',
      'Packaging': 'Deluxe Rigid Keepsake Briefcase Box with Custom Foil Embellishment'
    },
    customizationOptions: [
      'Full interior curation from our edible, gadget, and merchandise catalog',
      'Corporate logo foil stamping on briefcase lid',
      'Custom luxury ribbon and gift tag'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-8',
    name: 'Darbar Royal Palace 4-Jar Hamper',
    slug: 'darbar-royal-palace-4-jar-hamper',
    description: 'Royal court illustrated gift box with golden satin lining and 4 glass jars with gold lids. 100% customizable with brand printing.',
    longDescription: 'Grand royal celebration box showcasing majestic court architecture and royal procession motifs.\n\n• Inclusions: 4 gold-lidded glass jars filled with premium dry fruits, gourmet nuts, and festive confectionery\n• 100% Customizable: Handpick individual jar contents from our full gourmet catalogue\n• Packaging: Sturdy flip-top keepsake chest with golden satin bed and custom brand card',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_darbar_palace_4jar_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Grand Royal 4-Jar Celebration Box (100% Customizable)',
      'Customization': '100% Customizable: Handpick contents of all 4 glass jars',
      'Inclusions': 'Darbar Palace Illustrated Box, 4 Gold-Lidded Glass Jars, Golden Satin Lining',
      'Packaging': 'Deluxe Hinged Presentation Box with Gold Metallic Foil Details'
    },
    customizationOptions: [
      'Choose 4 jars from our dry fruits, energy bites, and snack mixes',
      'Custom printed jar stickers and corporate belly band',
      'Bespoke executive gift card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-9',
    name: 'Gajraj Rose Palace 2-Jar Hamper',
    slug: 'gajraj-rose-palace-2-jar-hamper',
    description: 'Rose pink palace box with rope handles and 2 large glass dry fruit jars on golden satin. 100% customizable with brand printing.',
    longDescription: 'Vintage rose pink presentation hamper featuring royal elephant and palace fresco artwork.\n\n• Inclusions: 2 oversized glass canisters with gold screw caps on padded golden satin lining\n• 100% Customizable: Select your choice of dry fruits, sweets, or savory nibbles\n• Packaging: Hinged box with woven golden rope carry handles and personalized greeting note',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_gajraj_rose_palace_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Royal Elephant Twin-Jar Hamper (100% Customizable)',
      'Customization': '100% Customizable: Select jar contents and custom corporate tags',
      'Inclusions': 'Gajraj Palace Illustrated Box, 2 Large Glass Canisters, Golden Rope Handles',
      'Packaging': 'Padded Hinged Box with Satin Inlay and Heavy-Duty Carry Cord'
    },
    customizationOptions: [
      'Custom selection of premium dry fruits and roasted savouries',
      'Foil stamped brand logo on box front',
      'Custom corporate message insert'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-10',
    name: 'Swarna Net Golden Festive Hamper',
    slug: 'swarna-net-golden-festive-hamper',
    description: 'Brocade gold tray hamper wrapped in golden organza net with satin bow, coffee tin, and gourmet dry fruits. 100% customizable.',
    longDescription: 'Classic celebration hamper presented on an embroidered golden brocade gift tray.\n\n• Inclusions: Gourmet estate coffee tin, canisters of dry fruits, and festive treats encased in golden organza net with a grand ribbon bow\n• 100% Customizable: Handpick any gourmet foods, coffee blends, and confectionery\n• Packaging: Rigid brocade border tray with golden net wrap and custom corporate tag',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_swarna_organza_tray_hamper.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Golden Brocade Tray Hamper (100% Customizable)',
      'Customization': '100% Customizable: Handpick beverage tins, sweets, and dry fruit canisters',
      'Inclusions': 'Brocade Gift Tray, Coffee Canister, Dry Fruit Tins, Golden Organza Wrap & Satin Bow',
      'Packaging': 'Traditional Handcrafted Brocade Tray with Grand Ribbon Presentation'
    },
    customizationOptions: [
      'Select customized coffee, teas, or chocolates',
      'Custom printed satin ribbon with corporate branding',
      'Personalized greeting card attached to ribbon bow'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-11',
    name: 'Niloufar Garden 6-Jar Hamper',
    slug: 'niloufar-garden-6-jar-hamper',
    description: 'Pavilion fresco keepsake chest with brass clasp, golden satin lining, and 6 glass dry fruit jars. 100% customizable.',
    longDescription: 'Grand Mughal pavilion and lotus pond illustrated keepsake chest.\n\n• Inclusions: 6 wide-mouth glass jars with illustrated lids filled with premium dry fruits and gourmet treats on a golden satin bed\n• 100% Customizable: Select any combination of nuts, sweets, and savory nibbles\n• Packaging: Sturdy lidded presentation trunk with polished brass latch and custom corporate sleeve',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_niloufar_garden_6jar_chest.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Grand Royal 6-Jar Keepsake Trunk (100% Customizable)',
      'Customization': '100% Customizable: Handpick contents of all 6 glass jars',
      'Inclusions': 'Pavilion Illustrated Chest, 6 Illustrated Glass Jars, Golden Satin Bed',
      'Packaging': 'Lidded Presentation Trunk with Polished Brass Clasp & Custom Sleeve'
    },
    customizationOptions: [
      'Handpick 6 jars from our full dry fruits and sweets collection',
      'Corporate logo foil stamping on keepsake chest',
      'Personalized festival greeting card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-fest-12',
    name: 'Ikigai Serenity Wellness Hamper',
    slug: 'ikigai-serenity-wellness-hamper',
    description: 'Forest green and gold gift box with Ikigai hardcover book, artisanal cocoa chocolate, and bubble candle. 100% customizable.',
    longDescription: 'Mindful wellness and festive indulgence hamper presented in a forest green gift box.\n\n• Inclusions: Hardcover edition of Ikigai, single-origin artisanal dark chocolate bar, and hand-poured bubble cube scented candle\n• 100% Customizable: Custom choice of books, gourmet treats, and branded greeting card\n• Packaging: Rigid forest green gift box with satin gold ribbon bow',
    category: 'festive',
    categoryName: 'Festive Gifting',
    image: '/images/products/festive_ikigai_serenity_hamper.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Box Nature': 'Wellness & Mindfulness Festive Hamper (100% Customizable)',
      'Customization': '100% Customizable: Handpick books, treats, and candles',
      'Inclusions': 'Ikigai Hardcover Book, Artisanal Chocolate Bar, Scented Bubble Candle',
      'Packaging': 'Matte Forest Green Rigid Box with Gold Ribbon Bow and Cushioning'
    },
    customizationOptions: [
      'Choice of books and gourmet confectionery',
      'Custom printed gold foil logo on box lid',
      'Personalized corporate greeting card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },

  // ==========================================
  // CORPORATE GIFTING (100% Customizable & Brand Printable)
  // ==========================================
  {
    id: 'prod-corp-1',
    name: 'Insignia Insulated Egg Tumbler',
    slug: 'insignia-insulated-egg-tumbler',
    description: 'Stemless double-wall insulated stainless steel tumbler with slide lid. 100% customizable with brand name printing. Multiple color options and bottle designs available with a bunch more variations.',
    longDescription: 'Stemless stainless steel thermal tumbler engineered for hot and cold beverages.\n\n• 100% Customizable: Laser engraved or screen printed company brand name and logo\n• Color Options: Multiple metallic and matte color choices available\n• Build: Double-wall vacuum insulation with splash-proof slide lid',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_insignia_egg_tumbler.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Brushed Silver, Matte Black, Custom Colors)',
      'Capacity': '350ml Stemless Thermal Silhouette',
      'Material': 'Food Grade Stainless Steel with Double-Wall Vacuum Insulation',
      'Lid': 'Clear Splash-Proof Sliding Sip Lid'
    },
    customizationOptions: [
      'Precision laser engraved or screen printed company brand name and logo',
      'Multiple metallic and powder coat color options',
      'Custom presentation packaging with company branding'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-2',
    name: 'Executive Laptop Briefcase Suite',
    slug: 'executive-laptop-briefcase-suite',
    description: 'Premium leather laptop bag with thermal bottle, journal, cardholder, USB, phone stand, keychain, and pen. 100% customizable with brand name printing. Multiple color and design options available with a bunch more variations to choose from.',
    longDescription: 'All-in-one corporate executive onboarding set featuring a tailored vegan leather laptop briefcase and desk accessories.\n\n• Inclusions: Laptop bag, vacuum thermal flask, A5 organizer journal, card case with USB drive, mobile stand, keychain, and executive pen\n• 100% Customizable: Precision laser engraved and printed company brand name on all items\n• Color Options: Multiple executive colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_executive_briefcase_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Executive Black, Dark Tan, Navy Blue)',
      'Inclusions': 'Laptop Briefcase Bag, Insulated Flask, A5 Journal, Card Case with USB, Phone Stand, Keychain, Executive Pen',
      'Material': 'Premium Stitched Vegan Leather with Metal Appointments',
      'Packaging': 'Deluxe Corporate Presentation Box'
    },
    customizationOptions: [
      'Company brand name and logo printed or laser engraved across all suite items',
      'Individual recipient name personalization',
      'Multiple leather and metallic accent color choices'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-3',
    name: 'Ivory Executive Gift Box',
    slug: 'ivory-executive-gift-box',
    description: 'Luxury gift hamper with insulated travel coffee mug, leatherette journal, executive pen, and Ferrero Rocher chocolates. 100% customizable with brand name printing. Multiple color and design options available with a bunch more variations.',
    longDescription: 'Curated corporate desk and indulgence hamper presented in a rigid gift box with satin bow.\n\n• Inclusions: Insulated travel coffee tumbler with silicone grip band, matching ivory journal, executive pen, and Ferrero Rocher chocolates\n• 100% Customizable: Brand name and company logo printed or laser engraved across all items\n• Color Options: Multiple tumbler, journal, and box colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_ivory_executive_gift_box.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Ivory Cream, Midnight Black, Classic Navy)',
      'Inclusions': 'Insulated Travel Coffee Mug, A5 Notebook, Executive Pen, Ferrero Rocher Chocolates',
      'Packaging': 'Rigid Keepsake Gift Box with Gold Ribbon Bow and Custom Greeting Card',
      'Drinkware': 'Double-Wall Insulated Coffee Mug with Grip Band and Flip Lid'
    },
    customizationOptions: [
      'Laser engraved or printed corporate brand name on tumbler, journal, and pen',
      'Multiple gift box and product color combinations',
      'Custom corporate message card and outer sleeve'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-4',
    name: 'Sovereign Eco Executive Suite',
    slug: 'sovereign-eco-executive-suite',
    description: 'Sustainable 5-piece hamper with beechwood notebook, bamboo mug, thermal flask, bamboo pen, and cork keychain. 100% customizable with brand name printing. Multiple wood finishes, bottle colors, and design options available.',
    longDescription: 'Eco-conscious executive collection pairing natural wood and bamboo with modern insulated drinkware.\n\n• Inclusions: Natural beechwood journal, stainless steel bamboo mug, matte thermal bottle with wood cap, bamboo twist pen, and cork keychain\n• 100% Customizable: Precision laser engraved company brand name and logo on wood and metal surfaces\n• Color Options: Multiple wood finish and bottle color options available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_sovereign_eco_executive_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Natural Wood, Bamboo, Matte Black, Custom Colors)',
      'Inclusions': 'Hardcover Beechwood Notebook, Bamboo Coffee Mug, Thermal Flask, Bamboo Pen, Cork Keychain',
      'Materials': 'Natural Sustainable Wood, Bamboo, 304 Stainless Steel, Organic Cork',
      'Packaging': 'Deluxe Matte Presentation Box with Custom Cutout Foam Tray'
    },
    customizationOptions: [
      'Laser engraving of corporate brand name and logo across all items',
      'Multiple bottle color and wood finish choices',
      'Custom printed corporate box sleeve and welcome card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-5',
    name: 'Chrono Classic 4-Piece Suite',
    slug: 'chrono-classic-executive-suite',
    description: 'Distinguished 4-piece set with analogue wristwatch, stitched cardholder, chrome pen, and leather keychain. 100% customizable with brand name printing. Multiple strap colors, metal finishes, and design options available.',
    longDescription: 'Timeless corporate recognition suite presented in a tailored presentation gift box.\n\n• Inclusions: Analogue quartz wristwatch with leather strap, metal and leatherette cardholder, chrome pen, and matching keychain\n• 100% Customizable: Watch dial, cardholder, pen, and keychain custom printable with company brand name\n• Color Options: Multiple strap and metal finish colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_chrono_classic_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Classic Black & Chrome, Tan & Gold, Navy & Silver)',
      'Inclusions': 'Analogue Quartz Watch, Business Card Case, Chrome Executive Pen, Leather Keychain',
      'Watch Movement': 'Precision Quartz Movement with Mineral Glass Dial and Leather Strap',
      'Packaging': 'Deluxe Silver-Grey Presentation Gift Box with Fitted Foam Compartments'
    },
    customizationOptions: [
      'Company brand name and logo printed on watch dial and laser engraved on metal items',
      'Multiple strap and hardware color options',
      'Custom corporate outer sleeve and milestone insert'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-6',
    name: 'White Executive 4-Piece Desk Suite',
    slug: 'white-executive-4-piece-desk-suite',
    description: 'White executive desk set with A5 journal, pen, key USB drive, and insulated coffee tumbler. 100% customizable with brand name printing. Multiple color options, tumbler styles, and diary designs available with a bunch more variations.',
    longDescription: 'Modern minimalist 4-piece corporate workstation set presented in a fitted black presentation box.\n\n• Inclusions: White hardcover notebook, matching twist pen, metal key-shaped USB flash drive, and flip-top insulated travel coffee tumbler\n• 100% Customizable: Precision laser engraved and printed company brand name and logo across all items\n• Color Options: Multiple product and gift box color combinations available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_white_desk_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (White & Silver, Matte Black, Executive Slate)',
      'Inclusions': 'Hardcover A5 Notebook, Executive Twist Pen, Metal Key USB Flash Drive, Insulated Coffee Tumbler',
      'Drinkware': 'Double-Wall Insulated Stainless Steel Coffee Mug with Flip-Lock Lid & Carry Strap',
      'Packaging': 'Deluxe Matte Black Gift Box with High-Density Foam Inlay'
    },
    customizationOptions: [
      'Company brand name and logo printed on notebook and laser engraved on tumbler, pen, and USB',
      'Multiple product color combinations',
      'Custom box sleeve and onboarding insert card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-7',
    name: 'Royal Blue Travel & Desk Suite',
    slug: 'royal-blue-travel-desk-suite',
    description: 'Royal blue summit gift set with digital temperature bottle, mini USB desk fan, and compact umbrella. 100% customizable with brand name printing. Multiple vibrant color and accessory design options available.',
    longDescription: 'Contemporary 3-piece corporate gift suite presented in a vibrant royal blue presentation box.\n\n• Inclusions: Smart LED temperature display vacuum thermal flask, rechargeable portable mini fan, and windproof travel umbrella\n• 100% Customizable: Company brand name and corporate logo printable on flask, fan, and umbrella\n• Color Options: Multiple vibrant and executive colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_royal_blue_summit_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Royal Blue, Midnight Black, Crimson Red)',
      'Inclusions': 'Smart LED Temperature Flask (500ml), Portable USB Desk Fan, Compact Windproof Umbrella',
      'Bottle Feature': 'Touch-Activated Smart Digital LED Temperature Display Cap',
      'Packaging': 'Matching Royal Blue Rigid Presentation Box with Custom Cutout Slotting'
    },
    customizationOptions: [
      'Company brand name and corporate logo printed or laser engraved across all items',
      'Multiple color theme options',
      'Bespoke gift box sleeve with event branding'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-8',
    name: 'Executive Onboarding Backpack Suite',
    slug: 'executive-onboarding-backpack-suite',
    description: 'Complete employee welcome kit with laptop backpack, sling bag, thermal bottle, phone stand, cardholder, notebook, and stand. 100% customizable with brand name printing. Multiple backpack colors, bottle styles, and design options available with a bunch more variations.',
    longDescription: 'Comprehensive corporate welcome and new-hire onboarding kit packed in a presentation delivery box.\n\n• Inclusions: Navy laptop backpack, compact sling pouch, matte insulated bottle, mobile stand, metal cardholder, blue executive pen, bottle opener keychain, notebook, utility pouch, and foldable aluminum laptop stand\n• 100% Customizable: Company brand name and employee names printable across all suite items\n• Color Options: Multiple backpack and accessory colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_onboarding_backpack_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Navy Blue, Stealth Black, Oxford Grey)',
      'Inclusions': 'Laptop Backpack, Crossbody Sling, Thermal Bottle, Phone Stand, Card Case, Pen, Keychain, Notebook, Pouch, Laptop Riser',
      'Packaging': 'Heavy-Duty Corporate Delivery Shipping Box with Custom Labeling'
    },
    customizationOptions: [
      'Custom screen printing or embroidery on bags and laser engraving on metal accessories',
      'Individual new-hire name personalization',
      'Custom employee welcome letter insert'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-9',
    name: 'Botanical Eco Desk & Planter Suite',
    slug: 'botanical-eco-desk-planter-suite',
    description: 'Sustainable desk set with carved wooden organizer, tabletop plant, stylus pen, bamboo cup, and glass bottle in linen sleeve. 100% customizable with brand name printing. Multiple wood finishes, sleeve colors, and design options available.',
    longDescription: 'Organic and sustainable corporate desk hamper presented in an eco-friendly kraft gift box.\n\n• Inclusions: Carved natural beechwood phone and pen organizer, potted tabletop plant, wooden stylus pen, bamboo coffee cup with cork grip, and glass water bottle with linen sleeve and wood cap\n• 100% Customizable: Precision laser engraved company brand name on wood and bamboo items\n• Color Options: Multiple natural finishes and sleeve colors available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_botanical_eco_planter_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Natural Wood, Cork, Kraft Brown, Earth Tones)',
      'Inclusions': 'Carved Wooden Desk Organizer, Tabletop Potted Plant, Wooden Stylus Pen, Bamboo Cup with Cork Band, Glass Water Bottle with Linen Sleeve',
      'Materials': 'Natural Beechwood, Biodegradable Plant Pot, Glass, Eco-Linen, Sustainable Cork',
      'Packaging': 'Natural Kraft Lidded Presentation Box with Fitted Eco Compartments'
    },
    customizationOptions: [
      'Precision laser engraving of company brand name and logo on wooden organizer, cup, pen, and bottle cap',
      'Choice of natural linen sleeve colors',
      'Custom printed seed paper message card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-10',
    name: 'Executive Wireless Power Bank & Tech Suite',
    slug: 'executive-wireless-power-bank-tech-suite',
    description: '4-piece tech set with digital display power bank, slim wireless mouse, executive pen, and metal USB flash drive. 100% customizable with brand name printing. Multiple device colors and gadget design options available with a bunch more variations.',
    longDescription: 'Modern tech executive recognition hamper presented in a fitted matte black gift box.\n\n• Inclusions: High-capacity digital LED battery display power bank, ergonomic wireless mouse, executive twist pen with gold clip, and swivel metal USB drive\n• 100% Customizable: Company brand name and corporate logo precision printed and laser engraved\n• Color Options: Multiple finish and device color options available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_wireless_tech_powerbank_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Pure White & Gold, Midnight Black, Titanium Silver)',
      'Inclusions': 'Digital LED Display Power Bank, Ergonomic 2.4GHz Wireless Mouse, Twist Pen with Gold Accents, Swivel Metal USB Flash Drive',
      'Power Bank': 'High-Capacity Fast-Charging Battery with Real-Time Percentage Display',
      'Packaging': 'Deluxe Matte Black Gift Box with Fitted Velvet Compartments'
    },
    customizationOptions: [
      'Company brand name and corporate logo printed or laser engraved across all 4 devices',
      'Individual recipient name personalization',
      'Custom corporate outer sleeve and tech milestone card'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-11',
    name: 'Executive Commuter Backpack Suite',
    slug: 'executive-commuter-backpack-suite',
    description: 'Urban travel set with laptop backpack, crossbody sling bag, thermal bottle, and accessory pouch. 100% customizable with brand name printing. Multiple bag colors, bottle options, and design variations available with a bunch more choices.',
    longDescription: 'Sleek commuter and business travel ensemble designed for mobile professionals.\n\n• Inclusions: Weather-resistant laptop backpack with diagonal zip pockets, matching crossbody sling bag, double-wall thermal tumbler, and zipper utility pouch\n• 100% Customizable: Precision screen printed or embroidered corporate logo and brand name across all items\n• Color Options: Multiple fabric and bottle colorways available',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_commuter_backpack_suite.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Stealth Black, Navy Blue, Charcoal Grey)',
      'Inclusions': 'Laptop Backpack, Crossbody Sling Pouch, Double-Wall Thermal Tumbler, Zipper Accessory Bag',
      'Material': 'Water-Repellent Oxford Polyester with Heavy-Duty Smooth Zippers',
      'Packaging': 'Deluxe Corporate Shipping Box with Custom Labeling'
    },
    customizationOptions: [
      'Screen printing, heat transfer, or embroidery of corporate logo on backpack and sling',
      'Laser engraved brand name on thermal tumbler',
      'Custom corporate message card insert'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-12',
    name: 'Wooden Swivel USB Flash Drive',
    slug: 'wooden-swivel-usb-flash-drive',
    description: 'Natural grain eco-friendly wooden swivel USB drive with high-speed storage. 100% customizable with brand name printing. Multiple wood finishes, capacities, and design options available with a bunch more variations.',
    longDescription: 'Eco-conscious wooden swivel USB drive crafted from natural hardwood with a 360-degree rotating cap.\n\n• 100% Customizable: Crisp laser engraving of corporate logo and company brand name\n• Color Options: Multiple natural wood finish options available (Walnut, Maple, Bamboo)\n• High-Speed Performance: High-capacity reliable flash storage with universal USB compatibility',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_wooden_swivel_usb_drive.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Wood Finishes': 'Multiple Color Options Available (Natural Walnut, Golden Maple, Organic Bamboo)',
      'Cap Mechanism': '360-Degree Swiveling Protective Wooden Frame',
      'Interface': 'High-Speed USB 3.0 / 2.0 Universal Plug-and-Play',
      'Packaging': 'Eco-Friendly Kraft Gift Box or Wooden Sliding Presentation Case'
    },
    customizationOptions: [
      'Precision laser engraving of company logo and brand text on front and back',
      'Pre-loaded corporate presentation or digital catalog service',
      'Matching engraved wooden presentation box'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  },
  {
    id: 'prod-corp-13',
    name: 'Executive Leather & Metal Keychain',
    slug: 'executive-leather-metal-keychain',
    description: 'Premium leather and stainless steel keychains with engravable plates and bottle opener options. 100% customizable with brand name printing. Multiple leather colors, hardware finishes, and design options available with a bunch more variations.',
    longDescription: 'Durable executive keychains combining genuine leather, woven nylon, and brushed stainless steel hardware.\n\n• 100% Customizable: Precision laser engraved or debossed company brand name and monogram\n• Color Options: Multiple leather shades (Black, Tan, Brown, Blue) and metallic finishes available\n• Functional Designs: Options with built-in bottle openers, snap hooks, and polished branding tags',
    category: 'corporate',
    categoryName: 'Corporate Gifting',
    image: '/images/products/corp_executive_keychain_collection.png',
    price: null,
    priceFormatted: 'Custom Quote',
    specifications: {
      'Customization': '100% Customizable (Brand name and logo printable)',
      'Color Options': 'Multiple Color Options Available (Midnight Black, Cognac Tan, Classic Brown, Royal Blue)',
      'Hardware Styles': 'Polished Chrome Plate, Built-in Bottle Opener, Swivel Snap Hook, Woven Nylon Webbing',
      'Material': 'Full-Grain Vegan Leather & Brushed Zinc Alloy Hardware',
      'Packaging': 'Individual Protective Velvet Sleeve or Presentation Box'
    },
    customizationOptions: [
      'Precision laser engraved company brand name on metallic emblem plates',
      'Blind debossing or foil stamping on leather loops',
      'Individual recipient name personalization'
    ],
    active: true,
    featured: true,
    createdAt: '2026-09-03'
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [];