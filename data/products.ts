export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  category: string;
  isNew?: boolean;
  isEcoFriendly?: boolean;
  description?: string;
  multiImage?: boolean;
  images?: string[];
}

export const productCategories = [
  { id: 'all', name: 'All Products', icon: '🏬' },
  { id: 'bottles', name: 'Bottles & Cups', icon: '🍼' },
  { id: 'decor', name: 'Home Décor', icon: '🎍' },
  { id: 'office', name: 'Office & Gifts', icon: '📝' },
  { id: 'utility', name: 'Daily Essentials', icon: '🧺' },
  { id: 'lighting', name: 'Lamps & Clocks', icon: '💡' },
];

export const products: Product[] = [
  // Multi-Image Products (now with correct categories)
  {
    id: 'photo-frame-10x8',
    name: 'Photo Frame (10"X8")',
    image: '/images/products/PHOTOFRAME 2.jpg',
    price: '469',
    category: 'decor',
    description: 'Beautiful 10"X8" bamboo photo frame with multiple design options',
  },
  {
    id: 'photo-frame-9x7',
    name: 'Photo Frame (7"X9")',
    image: '/slideimage/7x9 photo frame/IMG-20250725-WA0043.jpg',
    price: '859',
    category: 'decor',
    description: 'Beautiful 9"X7" bamboo photo frame with multiple design options',
    multiImage: true,
    images: [
      '/slideimage/7x9 photo frame/IMG-20250822-WA0034.jpg',
      '/slideimage/7x9 photo frame/Screenshot_20250828-152039.Maps.png'
    ]
  },
  {
    id: 'photo-frame-10x12',
    name: 'Photo Frame (10"X12")',
    image: '/slideimage/10x12 photo frame/IMG_20250721_134953119_HDR.jpg',
    price: '1100',
    category: 'decor',
    description: 'Elegant 10"X12" bamboo photo frame with multiple design options',
    multiImage: true,
    images: [ '/slideimage/10x12 photo frame/IMG_20250818_213310166_HDR.jpg' ]
  },
  {
    id: 'bamboo-tea-coaster-set-6',
    name: 'Bamboo Tea Coaster Set of 6',
    image: '/images/products/BAMBOO TEA COASTER SET OF 6 .jpg',
    price: '459',
    category: 'utility',
    description: 'Set of 6 beautiful bamboo tea coasters with multiple designs',
    multiImage: true,
    images :  [
      '/slideimage/Bamboo tea coaster set of 6/IMG-20250606-WA0031.jpg',
                  '/slideimage/Bamboo tea coaster set of 6/IMG-20250606-WA0032.jpg'
    ]
  },

  {
    id: 'diary-bamboo-pages',
    name: 'Diary with Bamboo Pages (6.1" X 8.5", 150 Pages)',
    image: '/images/products/DIARY WITH BAMBOO PAGES .jpg',
    price: '699',
    category: 'office',
    description: 'Premium diary with bamboo pages and multiple cover designs',
    multiImage: true,
    images:[ '/slideimage/Diary/IMG_20250710_200916431_HDR.jpg',
                  '/slideimage/Diary/IMG_20250828_144858738_HDR_AE.jpg',
                  '/slideimage/Diary/IMG_20250721_230820015_HDR_AE.jpg',
                  '/slideimage/Diary/IMG_20250828_144703398_AE.jpg',
                  '/slideimage/Diary/IMG_20250828_144714733_HDR_AE.jpg']
  },
  {
    id: 'bamboo-ganapati',
    name: 'Bamboo Ganapati (7" Height)',
    image: '/images/products/BAMBOO GANAPATI .jpg',
    price: '599',
    category: 'decor',
    description: 'Sacred bamboo Ganapati idol with multiple design variations',
    multiImage: true,
    images:[   '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111007003_AE.jpg',
                  '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111031079_AE.jpg',
                  '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111040082_AE.jpg',
                  '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111046657_AE.jpg',
                  '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111056511_HDR_AE.jpg',
                  '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111113892_HDR_AE.jpg']
  },
  {
    id: 'stylus-pen',
    name: 'Stylus Pen',
    image: '/slideimage/Stylus pen/stylus pen.jpg',
    price: '129',
    category: 'office',
    description: 'Stylus pen with multiple design options',
    multiImage: true,
    images:[  '/slideimage/Stylus pen/Bamboo-Pen-with-Stylus_2.jpg',
                  '/slideimage/Stylus pen/IMG_20240723_233511570_AE.jpg',
                  '/slideimage/Stylus pen/BambooPen5_1200x.jpg',
                  '/slideimage/Stylus pen/IMG_20240723_233555264_HDR_AE.jpg',
                  '/slideimage/Stylus pen/IMG_20240723_233615761_AE.jpg',
                  '/slideimage/Stylus pen/IMG_20240723_233623637_AE.jpg',
                  '/slideimage/Stylus pen/IMG_20240723_233634008_AE.jpg']
  },
  {
    id: 'two-pen-set-ink-ball',
    name: 'Two Pen Set (One Ink, One Ball)',
    image: '/slideimage/Two pen set one ink one ball @1199/IMG-20241230-WA0002.jpg',
    price: '1199',
    category: 'office',
    description: 'Set of two pens: one ink pen and one ball pen, with multiple design options',
    multiImage: true,
    images:[
      '/slideimage/Two pen set one ink one ball @1199/IMG_20250828_154100714_HDR_AE.jpg',
                  '/slideimage/Two pen set one ink one ball @1199/IMG_20250828_154126788_HDR_AE.jpg'  
    ]
  },

  {
    id: 'green-tea-bottle',
    name: 'Green Tea Bottle (500ML)',
    image: '/images/products/green-tea bottle.jpg',
    price: '849',
    category: 'bottles',
    description: 'Green tea bottle with multiple design variations',
    multiImage: true,
    images:[
        '/slideimage/Green tea bottle/61mklfrPHkL._SX679_.jpg',
                  '/slideimage/Green tea bottle/71iYjJZYcWL._SX679_.jpg',
                  '/slideimage/Green tea bottle/b st.jpg',
                  '/slideimage/Green tea bottle/big main.jpg'
    ]
  },
  {
    id: 'bamboo-sound-amplifier-mobile-holder',
    name: 'Bamboo Sound Amplifier & Mobile Holder',
    image: '/images/products/BAMBOO SOUND AMPLIFIER AND MOBILE HOLDER.jpg',
    price: '359',
    category: 'utility',
    description: 'Bamboo sound amplifier with mobile holder and multiple designs',
    multiImage: true,
    images:[
      '/slideimage/Bamboo sound amplifier & mobile holder/IMG-20250828-WA0103.jpg',
    ]
  },
  {
    id: 'bamboo-bottle-with-lace',
    name: 'BAMBOO BOTTLE WITH LACE (500ML)',
    image: '/slideimage/Lace Bottle/51gVNXSejKL._SX679_.jpg',
    price: '799',
    category: 'bottles',
    description: 'Bamboo bottle with lace design and multiple variations',
    multiImage: true,
    images:[
      '/slideimage/Lace Bottle/61mklfrPHkL._SX679_.jpg',
                  '/slideimage/Lace Bottle/71iYjJZYcWL._SX679_.jpg',
                  '/slideimage/Lace Bottle/71JsXhMMmkL._SX679_.jpg',
                  '/slideimage/Lace Bottle/615weOtGwuL._SX679_.jpg',
                  '/slideimage/Lace Bottle/6115tHjQeuL._SX679_.jpg',
                  '/slideimage/Lace Bottle/1699002520089.jpg',
                  '/slideimage/Lace Bottle/1699002520112.jpg',
                  '/slideimage/Lace Bottle/images.jpg'
    ]
  },
  {
    id: 'mobile-stand-1',
    name: 'Mobile Stand (7.5" X 3.5")',
    image: '/images/products/MOBILE STAND .jpg',
    price: '239',
    category: 'utility',
    description: 'Mobile stand with multiple design options',
    multiImage: true,
    images:[
      '/slideimage/Mobile Stand (7.5 X 3.5)/IMG-20250615-WA0017.jpg',
    ]
  },
  {
    id: 'name-plate-1',
    name: 'Name Plate (2.25" X 12")',
    image: '/images/products/NAME PLATE.jpg',
    price: '395',
    category: 'office',
    description: 'Name plate with multiple design variations',
    multiImage: true,
    images:[
      '/slideimage/Name plate with nail/IMG_20250827_142846365_HDR_AE.jpg',
                  '/slideimage/Name plate with nail/IMG_20250827_142850967_AE.jpg',
                  '/slideimage/Name plate with nail/IMG_20250827_142902056_HDR_AE.jpg',
                  '/slideimage/Name plate with nail/IMG_20250827_142918650_AE.jpg'
    ]
  },
  {
    id: 'panpuda',
    name: 'Panpuda (4" X 8" X 0.5")',
    image: '/images/products/PANPUDA.jpg',
    price: '789',
    category: 'utility',
    description: 'Traditional panpuda with multiple design options',
    multiImage: true,
    images:[
        '/slideimage/Paanpuda/IMG_20250828_125800346_HDR_AE.jpg',
                  '/slideimage/Paanpuda/IMG_20250828_125738963_HDR_AE.jpg',
                  '/slideimage/Paanpuda/IMG_20250828_125817907_HDR_AE.jpg'
    ]
  },
  {
    id: 'bamboo-bottle-regular',
    name: 'Bamboo Bottle Regular (500ML)',
    image: '/images/products/BAMBOO BOTTLE REGULAR  .jpg',
    price: '699',
    category: 'bottles',
    description: 'Regular bamboo bottle with multiple design variations',
    multiImage: true,
      images:[ '/slideimage/Regular bottle/61mklfrPHkL._SX679_.jpg',
                  '/slideimage/Regular bottle/71iYjJZYcWL._SX679_.jpg',
                  '/slideimage/Regular bottle/71JsXhMMmkL._SX679_.jpg',
                  '/slideimage/Regular bottle/615weOtGwuL._SX679_.jpg',
                  '/slideimage/Regular bottle/1699002520112.jpg',
                  '/slideimage/Regular bottle/1699002520159.jpg',
                  '/slideimage/Regular bottle/Image_Editor.png',
                  '/slideimage/Regular bottle/Screenshot_2024_0607_102913.jpg']
  },
  {
    id: 'bamboo-bottle-steel-handle',
    name: 'Bamboo Bottle with Steel Handle (500ML)',
    image: '/images/products/BAMBOO BOTTLE WITH STEEL HANDLE.jpg',
    price: '799',
    category: 'bottles',
    description: 'Bamboo bottle with steel handle and multiple designs',
    multiImage: true,
    images:[
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/61mklfrPHkL._SX679_.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/71iYjJZYcWL._SX679_.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/71JsXhMMmkL._SX679_.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/615weOtGwuL._SX679_.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/1699002520112.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/1699002520159.jpg',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/Image_Editor.png',
      '/slideimage/Bamboo Bottle with Steel Handle (500ML)/Screenshot_2024_0607_102913.jpg'
    ]
  
  },
  {
    id: 'premium-bamboo-pen',
    name: 'Premium Bamboo Pen',
    image: '/images/products/PREMIUM  BAMBOO  PEN .jpg',
    price: '339',
    category: 'office',
    description: 'Premium bamboo pen with multiple design options',

  },
  {
    id: 'sports-bamboo-bottle',
    name: 'Sports Bamboo Bottle (500ML)',
    image: '/images/products/SPORTS BAMBOO BOTTLE(1).jpg',
    price: '799',
    category: 'bottles',
    description: 'Sports bamboo bottle with multiple design variations',
    multiImage: true,
    images:['/slideimage/Sports Bamboo Bottle (500ML)/61mklfrPHkL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/71iYjJZYcWL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/71JsXhMMmkL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/615weOtGwuL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/1000124726.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/1699002520112.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/black cap.WEBP',
                '/slideimage/Sports Bamboo Bottle (500ML)/black.WEBP',
                '/slideimage/Sports Bamboo Bottle (500ML)/IMG_20240729_102928992_HDR_AE.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/IMG_20240729_102932525_HDR_AE.jpg']
  },
  {
    id: 'table-photo-frame',
    name: 'Table Photo Frame (10"X8")',
    image: '/images/products/_ TABLE PHOTO FRAME.jpg',
    price: '469',
    category: 'decor',
    description: 'Table photo frame with multiple design variations',
    multiImage: true,
    images:['/slideimage/Table photo frame/IMG-20250819-WA0066.jpg',
                '/slideimage/Table photo frame/IMG-20250819-WA0075.jpg']
  },
  {
    id: 'tumbler',
    name: 'Tumbler (450ML)',
    image: '/images/products/TUMBLR.jpg',
    price: '499',
    category: 'bottles',
    description: 'Tumbler with multiple design variations',
    multiImage: true,
    images:[ '/slideimage/tumblr/1699072435753.jpg',
                '/slideimage/tumblr/IMG_20240723_233934825_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_233941679_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_233958365_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_234039605_HDR_AE.jpg']
  },

  // Bottles & Cups

  {
    id: 'bottle-engraving-sample',
    name: 'Bottle Engraving Sample',
    image: '/images/products/_BOTTLE ENGRAVING SAMPLE.jpg',
    price: '989',
    category: 'bottles',
    description: 'Sample of custom engraving on bamboo bottle'
  },
  {
    id: 'bamboo-bottle-bamboo-cap',
    name: 'Bamboo Bottle with Bamboo Cap (500ML)',
    image: '/images/products/BAMBOO BOTTLE WITH BAMBOO CAP.jpg',
    price: '799',
    category: 'bottles',
    description: 'Eco-friendly bamboo bottle with a natural bamboo cap'
  },

  {
    id: 'bamboo-tea-cup',
    name: 'Bamboo Tea Cup with Bamboo Lid (250ML)',
    image: '/slideimage/Bamboo Tea Cup with Bamboo Lid (250ML)/bamboo-insulated-steel-coffee-travel-mug-with-handle-and-lid-500x500.jpeg',
    price: '499',
    category: 'bottles',
    description: 'Traditional bamboo tea cup with lid',
    multiImage: true,
    images: [
      '/slideimage/Bamboo Tea Cup with Bamboo Lid (250ML)/IMG_20240723_234145178_HDR_AE.jpg',
      '/slideimage/Bamboo Tea Cup with Bamboo Lid (250ML)/IMG_20240723_234224217_HDR_AE.jpg',
      '/slideimage/Bamboo Tea Cup with Bamboo Lid (250ML)/IMG_20240723_234236310_HDR_AE.jpg',
      '/slideimage/Bamboo Tea Cup with Bamboo Lid (250ML)/IMG_20240723_234251327_HDR_AE.jpg'
    ]
  },
  {
    id: 'eco-cup-wheat-fiber',
    name: 'Eco Cup - Wheat Fiber with Bamboo Lid (350ML)',
    image: '/images/products/_  ECO CUP MADE OF WHEAT FIBER WITH BAMBOO LID.jpg',
    price: '349',
    category: 'bottles',
    description: 'Sustainable wheat fiber cup with bamboo lid'
  },
  {
    id: 'coffee-tumbler-beer-mug',
    name: 'Coffee Tumbler Beer Mug (400ML)',
    image: '/images/products/_COFFEETUMBLRBEERMUG.jpg',
    price: '749',
    category: 'bottles',
    description: 'Bamboo coffee tumbler beer mug',
    multiImage: true,
    images: ['/slideimage/Coffee Tumbler Beer Mug (400ML)/IMG_20240723_234711958_HDR_AE.jpg',
                  '/slideimage/Coffee Tumbler Beer Mug (400ML)/IMG_20240723_234737570_HDR_AE.jpg',
                  '/slideimage/Coffee Tumbler Beer Mug (400ML)/IMG_20240723_234834204_HDR_AE.jpg',
                  '/slideimage/Coffee Tumbler Beer Mug (400ML)/IMG_20240723_234906770_HDR_AE.jpg']
  },
  {
    id : 'Gel Pen',
    name: 'Gel Pen',
    image: '/slideimage/Gel pen/IMG-20250718-WA0015.jpg',
    price: '199',
    category: 'office',
    description: 'Smooth writing gel pen with bamboo design',
    multiImage: true,
    images: [
      '/slideimage/Gel pen/IMG-20250718-WA0013.jpg',
      '/slideimage/Gel pen/IMG-20250718-WA0014.jpg'
    ]
  },
  {
    id: 'reusable-bamboo-straw',
    name: 'Reusable Bamboo Straw',
    image: '/images/products/REUSABLE BAMBOO STRAW.jpg',
    price: '15',
    category: 'bottles',
    description: 'Eco-friendly reusable bamboo drinking straw'
  },

  // Home Décor
  {
    id: 'single-national-flag',
    name: 'Single National Flag (16" Height)',
    image: '/images/products/SINGLE NATIONAL FLAG.jpg',
    price: '979',
    category: 'decor',
    isNew: true,
    description: 'Single national flag holder'
  },
  {
    id: 'twin-national-flag',
    name: 'Twin National Flag (8.5" Height)',
    image: '/images/products/TWIN NATIONAL FLAG .jpg',
    price: '709',
    category: 'decor',
    description: 'Twin national flag holder'
  },
  {
    id: 'twin-national-flag-small',
    name: 'Twin National Flag Small (4.7" Height)',
    image: '/images/products/TWIN NTIONAL FLAG SMAL.jpg',
    price: '139',
    category: 'decor',
    description: 'Small twin national flag holder'
  },
  {
    id: 'bamboo-charaka',
    name: 'Bamboo Charaka (10.3" X 5.5" X 4.3")',
    image: '/images/products/BAMBOO-CHARAKA.jpg',
    price: '389',
    category: 'decor',
    description: 'Decorative bamboo charaka'
  },
  {
    id: 'bamboo-peacock',
    name: 'Bamboo Peacock (10" Height)',
    image: '/images/products/BAMBOO PEACOCK.jpg',
    price: '559',
    category: 'decor',
    description: 'Handcrafted bamboo peacock'
  },
  {
    id: 'bamboo-tabala',
    name: 'Bamboo Tabala (5" X 6" X 8")',
    image: '/images/products/BAMBOO TABALA.jpg',
    price: '689',
    category: 'decor',
    description: 'Traditional bamboo tabla set'
  },
  {
    id: 'bamboo-ganpati',
    name: 'Bamboo Ganpati (7" Height)',
    image: '/images/products/BAMBOO GANAPATI .jpg',
    price: '599',
    category: 'decor',
    description: 'Sacred bamboo Ganapati idol'
  },
  {
    id: 'bamboo-veena',
    name: 'Bamboo Veena (3" X 4" X 9")',
    image: '/images/products/BAMBOO-VEENA.jpg',
    price: '509',
    category: 'decor',
    description: 'Decorative bamboo veena'
  },
  {
    id: 'bamboo-dholak',
    name: 'Bamboo Dholak (2" X 2" X 5")',
    image: '/images/products/BAMBOO DHOLAK.jpg',
    price: '159',
    category: 'decor',
    description: 'Miniature bamboo dholak'
  },
  {
    id: 'bamboo-talwar',
    name: 'Bamboo Talwar',
    image: '/images/products/BAMBOO TALWAR.jpg',
    price: '539',
    category: 'decor',
    description: 'Traditional bamboo sword'
  },
  {
    id: 'bamboo-dhal-talwar',
    name: 'Bamboo Dhal & Talwar',
    image: '/images/products/BAMBOO DHAL & TALWAR.jpg',
    price: '3389',
    category: 'decor',
    description: 'Traditional bamboo shield and sword set'
  },
  {
    id: 'bamboo-bullock-cart',
    name: 'Bamboo Bullock Cart (13" X 10")',
    image: '/images/products/BAMBOO BULLOCK CART.jpg',
    price: '1159',
    category: 'decor',
    description: 'Miniature bamboo bullock cart'
  },
  {
    id: 'bamboo-tribal-face',
    name: 'Bamboo Tribal Face (4" X 11")',
    image: '/images/products/BAMBOO TRIBAL FACE.jpg',
    price: '269',
    category: 'decor',
    description: 'Traditional tribal face mask'
  },
  {
    id: 'bamboo-tribal-mask',
    name: 'Bamboo Tribal Mask (4" X 9")',
    image: '/images/products/BAMBOO TRIBAL MASK .jpg',
    price: '289',
    category: 'decor',
    description: 'Authentic tribal mask'
  },
  {
    id: 'harine-candle-holder',
    name: 'Harine Candle Holder (4" X 3")',
    image: '/images/products/HARINE CANDLE HOLDER.jpg',
    price: '109',
    category: 'decor',
    description: 'Traditional candle holder'
  },
  {
    id: 'flat-planter',
    name: 'Flat Planter (12" Length)',
    image: '/images/products/FLAT PLANTER PLANT-2 .jpg',
    price: '159',
    category: 'decor',
    description: 'Flat bamboo planter'
  },
  {
    id: 'flower-vase',
    name: 'Flower Vase (11" Height)',
    image: '/images/products/Flower-vase.png',
    price: '201',
    category: 'decor',
    description: 'Bamboo flower vase'
  },
  {
    id: 'table-flower-vase',
    name: 'Table Flower Vase (10" Height)',
    image: '/images/products/TABLE FLOWER VASE .jpg',
    price: '101',
    category: 'decor',
    description: 'Table bamboo flower vase'
  },
  {
    id: 'wall-flower-vase',
    name: 'Wall Flower Vase (11" X 11")',
    image: '/images/products/WALL FLOWER VASE .jpg',
    price: '449',
    category: 'decor',
    description: 'Wall-mounted flower vase'
  },
  {
    id: 'insence-stick-holder',
    name: 'Incense Stick Holder with Non-Burning Cloth (9" X 1.3")',
    image: '/images/products/INSENCE STICK HOLDER WITH NON BURNING CLOTH  .jpg',
    price: '399',
    category: 'decor',
    description: 'Bamboo incense holder'
  },

  // Office & Gifts
  {
    id: 'file-folder',
    name: 'Bamboo File Folder',
    image: '/images/products/FILE FOLDER.jpg',
    price: '857',
    category: 'office',
    isNew: true,
    description: 'A4 size bamboo file folder'
  },
  {
    id: 'file-folder-tray',
    name: 'File Folder Tray (14" X 16")',
    image: '/images/products/FILE FOLDER TRAY.jpg',
    price: '1401',
    category: 'office',
    description: 'Bamboo file folder tray'
  },
  {
    id: 'table-organizer-1',
    name: 'Table Organizer 1 (9" X 5")',
    image: '/images/products/TABLE ORGANISER.jpg',
    price: '469',
    category: 'office',
    description: 'Bamboo table organizer'
  },
  {
    id: 'table-organizer-2',
    name: 'Table Organizer 2 (9" X 5")',
    image: '/images/products/TABLE ORGANISER (1).jpg',
    price: '469',
    category: 'office',
    description: 'Alternative table organizer'
  },
  {
    id: 'desk-organizer',
    name: 'Desk Organizer (2" X 5" X 4")',
    image: '/images/products/DESK  ORGANISER .jpg',
    price: '759',
    category: 'office',
    description: 'Premium desk organizer with multiple design variations'
  },
  {
    id: 'Desk Organizer 5',
    name: 'Desk Organizer 5',
    image: '/slideimage/Desk organizer 05/IMG_20250818_112715124_HDR_AE.jpg',
    price: '759',
    category: 'office',
    description: 'Premium desk organizer with multiple design variations',
    multiImage: true,
    images:[
       '/slideimage/Desk organizer 05/IMG_20250818_204742000_HDR.jpg',
                  '/slideimage/Desk organizer 05/IMG_20250818_204755883_HDR.jpg'
    ]
  },
  {
    id: 'Desk Organizer 6',
    name: 'Desk Organizer 6',
    image: '/slideimage/Desk organizer 06/IMG_20250827_142935914_HDR_AE.jpg',
    price: '759',
    category: 'office',
    description: 'Premium desk organizer with multiple design variations',
    multiImage: true,
    images:[
      '/slideimage/Desk organizer 06/IMG_20250827_142949741_HDR_AE.jpg',
                  '/slideimage/Desk organizer 06/IMG_20250827_143006890_AE.jpg',
                  '/slideimage/Desk organizer 06/IMG_20250827_143012404_AE.jpg'
    ]
  },
  {
    id: 'mobile-amplifier',
    name: 'Mobile Amplifier (10" Length)',
    image: '/images/products/MOBILE AMPLIFIER .jpg',
    price: '229',
    category: 'office',
    description: 'Bamboo mobile amplifier'
  },
  {
    id: 'flat-mobile-stand',
    name: 'Flat Mobile Stand (7.5" Height)',
    image: '/images/products/FLATMOBILE STAND.jpg',
    price: '239',
    category: 'office',
    description: 'Flat mobile stand'
  },
  {
    id: 'tree-mobile-stand',
    name: 'Tree Mobile Stand (5" Height, 4" Diameter)',
    image: '/images/products/TREEMOBILE STAND.jpg',
    price: '239',
    category: 'office',
    description: 'Tree-shaped mobile stand'
  },
  {
    id: 'home-name-plate-2',
    name: 'Home Name Plate (13.5" X 7.5")',
    image: '/images/products/HOME NAME PLATE.jpg',
    price: '639',
    category: 'office',
    description: 'Home name plate'
  },
  {
    id: 'home-name-plate-1',
    name: 'Home Name Plate Large (16" X 7.5")',
    image: '/images/products/Home-name-plate.jpg',
    price: '679',
    category: 'office',
    description: 'Large home name plate'
  },
  {
    id: 'notebook',
    name: 'Bamboo Notebook (5.5" X 7.5", 200 Pages)',
    image: '/images/products/NOTEBOOK .jpg',
    price: '663',
    category: 'office',
    description: 'Notebook with bamboo cover'
  },
  {
    id: 'diary-bamboo-pages',
    name: 'Diary with Bamboo Pages (6.1" X 8.5", 150 Pages)',
    image: '/images/products/DIARY WITH BAMBOO PAGES .jpg',
    price: '699',
    category: 'office',
    description: 'Diary with bamboo paper'
  },
  {
    id: 'panpuda',
    name: 'Panpuda (4" X 8" X 0.5")',
    image: '/images/products/PANPUDA.jpg',
    price: '789',
    category: 'office',
    description: 'Bamboo panpuda'
  },
  {
    id: 'camera-pen-stand',
    name: 'Camera Pen Stand (5" X 3" X 2.25")',
    image: '/images/products/CAMERA PEN STAND.jpg',
    price: '359',
    category: 'office',
    description: 'Camera-shaped pen stand'
  },
  {
    id: 'ludo-pen-stand',
    name: 'Ludo Pen Stand (5" X 5" X 5")',
    image: '/images/products/LUDO PEN STAND.jpg',
    price: '399',
    category: 'office',
    description: 'Ludo-themed pen stand'
  },
  {
    id: 'pencil-pen-stand',
    name: 'Pencil Pen Stand (8" Height)',
    image: '/images/products/PENCIL PEN STAND.jpg',
    price: '455',
    category: 'office',
    description: 'Pencil-shaped pen stand'
  },
  {
    id: 'pen-stand',
    name: 'Pen Stand (5" Height)',
    image: '/images/products/PEN STAND.jpg',
    price: '190',
    category: 'office',
    description: 'Classic pen stand'
  },
  {
    id: 'paperweight',
    name: 'Bamboo Paperweight (3" X 1")',
    image: '/images/products/PAPERWEIGHT.jpg',
    price: '149',
    category: 'office',
    description: 'Decorative paperweight'
  },
  {
    id: 'bamboo-visiting-cards',
    name: 'Bamboo Visiting Cards (3.5" X 2")',
    image: '/images/products/BAMBOO VISITING CARDS .jpg',
    price: '49',
    category: 'office',
    description: 'Eco-friendly visiting cards'
  },
  {
    id: 'laptop-stand',
    name: 'Bamboo Laptop Stand (10.5" X 1.5")',
    image: '/images/products/LAPTOP STAND.jpg',
    price: '304',
    category: 'office',
    description: 'Ergonomic laptop stand'
  },
  {
    id: 'memento-1',
    name: 'Memento 1 (13" X 6")',
    image: '/images/products/MEMENTO .jpg',
    price: '669',
    category: 'office',
    description: 'Bamboo memento'
  },
  {
    id: 'memento-2',
    name: 'Memento 2 (12" X 5")',
    image: '/images/products/MEMENTO 2.jpg',
    price: '429',
    category: 'office',
    description: 'Memento design 2'
  },
  {
    id: 'memento-3',
    name: 'Memento 3 (14" X 9")',
    image: '/images/products/MEMENTO 3.jpg',
    price: '1279',
    category: 'office',
    description: 'Premium memento'
  },
  {
    id: 'memento-4',
    name: 'Memento 4 (12" X 6")',
    image: '/images/products/MEMENTO 4.jpg',
    price: '489',
    category: 'office',
    description: 'Memento design 4'
  },
  {
    id: 'memento-box',
    name: 'Memento Box (13" X 6")',
    image: '/images/products/MEMENTO BOX.jpg',
    price: '3099',
    category: 'office',
    description: 'Memento storage box'
  },
  {
    id: 'memento-round',
    name: 'Memento Round (14" X 5")',
    image: '/images/products/MEMENTO ROUND.jpg',
    price: '1419',
    category: 'office',
    description: 'Round memento'
  },
  {
    id: 'memento-tiger',
    name: 'Memento Tiger (14" X 9")',
    image: '/images/products/MEMENTO TIGER.jpg',
    price: '1909',
    category: 'office',
    description: 'Tiger memento'
  },
  {
    id: 'memento-tree',
    name: 'Memento Tree (10" X 6")',
    image: '/images/products/MEMENTO TREE .jpg',
    price: '359',
    category: 'office',
    description: 'Tree memento'
  },
  {
    id: 'invitation-card-1',
    name: 'Invitation Card 1 (11" X 12")',
    image: '/images/products/INVITATION CARD.jpg',
    price: '329',
    category: 'office',
    description: 'Bamboo invitation card'
  },
  {
    id: 'invitation-card-2',
    name: 'Invitation Card 2 (6" X 13")',
    image: '/images/products/INVITATION CARD 2.jpg',
    price: '509',
    category: 'office',
    description: 'Invitation card design 2'
  },
  {
    id: 'invitation-card-3',
    name: 'Invitation Card 3 (6" X 8")',
    image: '/images/products/INVITATION CARD 3.jpg',
    price: '489',
    category: 'office',
    description: 'Invitation card design 3'
  },
  {
    id: 'hexagonal-pen',
    name: 'Hexagonal Pen',
    image: '/images/products/hexagonal-pen.jpg',
    price: '150',
    category: 'office',
    description: 'Hexagonal bamboo pen'
  },
  {
    id: 'double-ring-pen',
    name: 'Double Ring Pen',
    image: '/images/products/DOUBLE RING PEN.jpg',
    price: '129',
    category: 'office',
    description: 'Bamboo pen with double rings'
  },
  {
    id: 'premium-pen-artificial-diamond',
    name: 'Premium Pen with Artificial Diamond',
    image: '/images/products/PREMIUM PEN SAMAI BIG  SMAI-BIG  WITH ARTIFICIAL DIAMOND BOX.jpg',
    price: '449',
    category: 'office',
    description: 'Premium pen with artificial diamond'
  },
  {
    id: 'premium-bamboo-ink-pen',
    name: 'Premium Bamboo Ink Pen with Box',
    image: '/images/products/PREMIUM BAMBOO INK PEN WITH BAMBOO BOX.jpg',
    price: '749',
    category: 'office',
    description: 'Premium ink pen with bamboo box'
  },
  {
    id: 'single-pen-standup-box',
    name: 'Single Pen with Standup Box',
    image: '/slideimage/Single pen with standup box @699/IMG_20250828_154756131_HDR_AE.jpg',
    price: '699',
    category: 'office',
    description: 'Single pen with standup box',
    multiImage: true,
    images:[
      '/slideimage/Single pen with standup box @699/IMG_20250828_154800293_HDR_AE.jpg',
                  '/slideimage/Single pen with standup box @699/IMG_20250828_154806482_AE.jpg',
                  '/slideimage/Single pen with standup box @699/IMG_20250828_154814967_AE.jpg'
    ]
  },
  {
    id: 'premium-bamboo-pen-box',
    name: 'Premium Bamboo Pen with Box',
    image: '/images/products/_ PREMIUM BAMBOO PEN WITH BAMBOO BOX.jpg',
    price: '699',
    category: 'office',
    description: 'Premium pen with bamboo box'
  },
  {
    id: 'premium-cap-rotation-pen',
    name: 'Premium Cap Rotation Bamboo Pen',
    image: '/images/products/PREMIUM CAP ROTATION   BAMBOO NANDHA DEEP  BAMBOO PEN WITH BAMBOO.jpg',
    price: '699',
    category: 'office',
    description: 'Premium pen with rotating cap'
  },
  {
    id: 'artificial-diamond-pen-box',
    name: 'Artificial Diamond Pen with Box',
    image: '/images/products/ARTIFICIAL DIAMOND  PEN WITH BAMBOO  BOX.jpg',
    price: '799',
    category: 'office',
    description: 'Diamond pen with bamboo box'
  },

  // Daily Essentials
  {
    id: 'calendar',
    name: 'Bamboo Calendar (3" X 2" X 1")',
    image: '/images/products/CALANDER .jpg',
    price: '349',
    category: 'utility',
    description: 'Bamboo wall calendar'
  },
  {
    id: 'bamboo-badge',
    name: 'Bamboo Badge (2" X 1")',
    image: '/images/products/_BADGE  .jpg',
    price: '39',
    category: 'utility',
    description: 'Eco-friendly badge'
  },
  {
    id: 'fridge-magnet',
    name: 'Bamboo Fridge Magnet (3.6" X 2")',
    image: '/images/products/_FRIDGE MAGNET .jpg',
    price: '100',
    category: 'utility',
    description: 'Decorative fridge magnet'
  },
  {
    id: 'bamboo-cutlery-set',
    name: 'Bamboo Cutlery Set',
    image: '/images/products/BAMBOO CUTLERY SET.jpg',
    price: '359',
    category: 'utility',
    description: 'Complete bamboo cutlery set'
  },
  {
    id: 'bamboo-tea-coaster-set',
    name: 'Bamboo Tea Coaster Set of 6',
    image: '/images/products/BAMBOO TEA COASTER SET OF 6 .jpg',
    price: '459',
    category: 'utility',
    description: 'Set of 6 bamboo tea coasters'
  },
  {
    id: 'bamboo-sound-amplifier',
    name: 'Bamboo Sound Amplifier & Mobile Holder',
    image: '/images/products/BAMBOO SOUND AMPLIFIER AND MOBILE HOLDER.jpg',
    price: '359',
    category: 'utility',
    description: 'Sound amplifier with mobile holder'
  },
  {
    id: 'small-elephant-tea-coaster',
    name: 'Small Elephant Tea Coaster (7" X 5")',
    image: '/images/products/SMALL ELEPHANT TEA COASTER.jpg',
    price: '579',
    category: 'utility',
    description: 'Elephant design tea coaster',
    multiImage: true,
    images:[
      '/slideimage/Small elephant tea coaster/IMG_20250828_155336613_HDR_AE.jpg',
                  '/slideimage/Small elephant tea coaster/IMG_20250828_155344064_HDR_AE.jpg',
                  '/slideimage/Small elephant tea coaster/IMG_20250828_155351092_HDR_AE.jpg',
                  '/slideimage/Small elephant tea coaster/IMG_20250828_155359973_HDR_AE.jpg'
    ]
  },
  {
    id: 'bullock-cart-tea-coaster',
    name: 'Bullock Cart Tea Coaster (10" X 7")',
    image: '/images/products/BULLOCK CART TEA COASTER.jpg',
    price: '869',
    category: 'utility',
    description: 'Bullock cart tea coaster'
  },
  {
    id: 'tea-coaster',
    name: 'Tea Coaster (4" X 4")',
    image: '/images/products/TEA COASTER.jpg',
    price: '539',
    category: 'utility',
    description: 'Classic tea coaster'
  },
  {
    id: 'horse-tea-coaster',
    name: 'Horse Tea Coaster (10" X 4")',
    image: '/images/products/HORSE TEA COASTER.jpg',
    price: '879',
    category: 'utility',
    description: 'Horse design tea coaster'
  },
  {
    id: 'fruit-tray',
    name: 'Fruit Tray (11" X 9")',
    image: '/images/products/FRUIT TRAY.jpg',
    price: '449',
    category: 'utility',
    description: 'Bamboo fruit serving tray'
  },

  {
    id: 'strip-tray-small',
    name: 'Small Tray (13" X 9")',
    image: '/images/products/SMALL TRAY .jpg',
    price: '269',
    category: 'utility',
    description: 'Small strip tray'
  },
  {
    id: 'strip-tray-big',
    name: 'Strip Tray Small | Big',
    image: '/images/products/STRIP  TRAY(SMALL    BIG).jpg',
    price: '779|1289',
    category: 'utility',
    description: 'Large strip tray - 12" X18"'
  },
  {
    id: 'silver-tray',
    name: 'Silver Tray (13" X 5")',
    image: '/images/products/SLIVER TRAY  TRY-SLIVR.jpg',
    price: '709',
    category: 'utility',
    description: 'Silver finish tray'
  },
  {
    id: 'strip-tray-3',
    name: 'Strip Tray (13" X 9.5" X 3")',
    image: '/images/products/STRIP TRAY .jpg',
    price: '819',
    category: 'utility',
    description: 'Medium strip tray'
  },
  {
    id: 'travel-karanda',
    name: 'Travel Karanda',
    image: '/images/products/TRAVEL KARANDA.jpg',
    price: '169',
    category: 'utility',
    description: 'Portable karanda for travel - 1.5"X5"'
  },
  {
    id: 'karanda',
    name: 'Karanda',
    image: '/images/products/KARANDA.jpg',
    price: '139',
    category: 'utility',
    description: 'Traditional bamboo karanda - 7"X3"'
  },
  {
    id: 'pipal-karanda',
    name: 'Pipal Karanda',
    image: '/images/products/PIPAL KARANDA  KRND-PIP.jpg',
    price: '149',
    category: 'utility',
    description: 'Pipal leaf design karanda - 3.5"X5"'
  },
  {
    id: 'key-chains',
    name: 'Key Chains (45-60mm)',
    image: '/images/products/KEY CHAINS  KY-CHNS.jpg',
    price: '82',
    category: 'utility',
    description: 'Bamboo key chains'
  },
  {
    id: 'key-chains-100',
    name: 'Key Chains Premium',
    image: '/images/products/KEY CHAINS  KY-CHNS 2.jpg',
    price: '100',
    category: 'utility',
    description: 'Premium bamboo key chains'
  },
  {
    id: 'photo-key-chain',
    name: 'Photo Key Chain',
    image: '/images/products/Photo KEY CHAIN.jpg',
    price: '150',
    category: 'utility',
    description: 'Photo key chain'
  },
  {
    id: 'bell-key-holder',
    name: 'Bell Key Holder (8" X 3.5")',
    image: '/images/products/BELL KEY HOLDER.jpg',
    price: '169',
    category: 'utility',
    description: 'Bell-shaped key holder'
  },
  {
    id: 'elephant-key-holder',
    name: 'Elephant Key Holder (11" X 7")',
    image: '/images/products/ELEPHANTKEY HOLDER .jpg',
    price: '479',
    category: 'utility',
    description: 'Elephant key holder'
  },
  {
    id: 'guitar-key-holder',
    name: 'Guitar Key Holder (14" X 7")',
    image: '/images/products/GUITAR KEY HOLDER  KY-HL-GTR .jpg',
    price: '479',
    category: 'utility',
    description: 'Guitar-shaped key holder'
  },
  {
    id: 'learn-cubes',
    name: 'Learn Cubes (3" X 3")',
    image: '/images/products/LEARN CUBES.jpg',
    price: '450',
    category: 'utility',
    description: 'Educational learning cubes'
  },
  {
    id: 'sarota',
    name: 'Sarota (11" Length)',
    image: '/images/products/SAROTA.jpg',
    price: '59',
    category: 'utility',
    description: 'Bamboo sarota for kitchen'
  },
  {
    id: 'chimta',
    name: 'Chimta (8" Length)',
    image: '/images/products/CHIMTA.jpg',
    price: '59',
    category: 'utility',
    description: 'Bamboo chimta tongs'
  },
  {
    id: 'pot-stand',
    name: 'Pot Stand (6" X 6" X 2")',
    image: '/images/products/POT STAND.jpg',
    price: '79',
    category: 'utility',
    description: 'Bamboo pot stand'
  },
  {
    id: 'soft-tooth-brush',
    name: 'Soft Tooth Brush',
    image: '/images/products/SOFT TOOTH BRUSH  .jpg',
    price: '44',
    category: 'utility',
    description: 'Bamboo toothbrush with soft bristles'
  },
  {
    id: 'hard-tooth-brush',
    name: 'Hard Tooth Brush',
    image: '/images/products/_HARD TOOTH BRUSH.jpg',
    price: '40',
    category: 'utility',
    description: 'Bamboo toothbrush with hard bristles'
  },
  {
    id: 'lily-comb',
    name: 'Lily Comb (7.5" X 2")',
    image: '/images/products/_LILY COMB  .jpg',
    price: '139',
    category: 'utility',
    description: 'Lily bamboo comb'
  },
  {
    id: 'beard-comb',
    name: 'Beard Comb (3.5" X 2.4")',
    image: '/images/products/_ BEARD COMB .jpg',
    price: '69',
    category: 'utility',
    description: 'Bamboo beard comb'
  },
  {
    id: 'pocket-comb',
    name: 'Pocket Comb (5.5" X 1.5")',
    image: '/images/products/POCKET COMB.jpg',
    price: '49',
    category: 'utility',
    description: 'Compact pocket comb'
  },
  {
    id: 'handle-comb',
    name: 'Handle Comb (7.5" X 2")',
    image: '/images/products/HANDLE COMB.jpg',
    price: '139',
    category: 'utility',
    description: 'Bamboo comb with handle'
  },
  {
    id: 'shampoo-comb',
    name: 'Shampoo Comb (6.5" X 2.5")',
    image: '/images/products/_SHAMPOO COMB.jpg',
    price: '79',
    category: 'utility',
    description: 'Shampoo comb'
  },

  // Lamps & Clocks
  {
    id: 'hanging-lamp-2',
    name: 'Hanging Lamp',
    image: '/images/products/HANGING LAMP2.jpg',
    price: '1019',
    category: 'lighting',
    isNew: true,
    description: 'Hanging bamboo lamp - dia 7" x 10"ht'
  },
  {
    id: 'hanging-lamp-1',
    name: 'Hanging Lamp Design-2',
    image: '/images/products/HANGING LAMP.jpg',
    price: '829',
    category: 'lighting',
    description: 'Large hanging lamp - 14" x 14"'
  },
  {
    id: 'hanging-lamp-3',
    name: 'Hanging Lamp Design 3',
    image: '/images/products/HANGINGLAMP.jpg',
    price: '699',
    category: 'lighting',
    description: 'Hanging lamp variant - 14" x 14"'
  },
  {
    id: 'electric-lamp-2',
    name: 'Electric Lamp',
    image: '/images/products/ELECTRICLAMP.jpg',
    price: '589',
    category: 'lighting',
    description: 'Electric bamboo lamp - 7" x 10"ht'
  },
  {
    id: 'electric-lamp-1',
    name: 'Electric Lamp 2',
    image: '/images/products/ELECTRICLAMP (1).jpg',
    price: '479',
    category: 'lighting',
    description: 'Small electric lamp - dia 3" x 10"'
  },
  {
    id: 'bamboo-silver-lamp-3',
    name: 'Bamboo Silver Lamp',
    image: '/images/products/BAMBOO SLIVER LAMP.jpg',
    price: '789',
    category: 'lighting',
    description: 'Silver bamboo lamp - dia 6" x 13" ht'
  },
  {
    id: 'candle-set-1',
    name: 'HARINE CANDLE HOLDER',
    image: '/images/products/HARINE CANDLE HOLDER.jpg',
    price: '109',
    category: 'lighting',
    description: 'Bamboo candle set - 8"x8"x2"ht'
  },
  {
    id: 'shivaji-wall-clock',
    name: 'Shivaji Wall Clock (24" X 10" X 3")',
    image: '/images/products/SHIVAJI WALL CLOCK .jpg',
    price: '1529',
    category: 'lighting',
    description: 'Shivaji themed wall clock'
  },
  {
    id: 'anchor-wall-clock',
    name: 'Anchor Wall Clock',
    image: '/images/products/ANCHOR WALL CLOCK.jpg',
    price: '2869',
    category: 'lighting',
    description: 'Anchor design wall clock - 14"x12"x3"'
  },
  {
    id: 'tribal-table-clock',
    name: 'Tribal Table Clock',
    image: '/images/products/TRABAL TABLE CLOCK.jpg',
    price: '1829',
    category: 'lighting',
    description: 'Tribal table clock - 13" X9"'
  },
  {
    id: 'ganesh-wall-clock',
    name: 'Ganesh Wall Clock',
    image: '/images/products/GANESH WALL CLOCK .jpg',
    price: '889',
    category: 'lighting',
    description: 'Ganesh wall clock - 14"X6"'
  },
  {
    id: 'table-clock',
    name: 'Table Clock',
    image: '/images/products/TABLE CLOCK.jpg',
    price: '559',
    category: 'lighting',
    description: 'Classic table clock - 6"X6"'
  },
  {
    id: 'train-wall-clock',
    name: 'Train Wall Clock',
    image: '/images/products/TRAIN WALL CLOCK .jpg',
    price: '849',
    category: 'lighting',
    description: 'Train wall clock - 13"x13"x3"'
  },
  {
    id: 'wall-clock',
    name: 'Wall Clock',
    image: '/images/products/WALL CLOCK .jpg',
    price: '749',
    category: 'lighting',
    description: 'Classic wall clock - 10" X 10"'
  },
  {
    id: 'octagonal-wall-clock',
    name: 'Octagonal Wall Clock',
    image: '/images/products/OCTAGONAL WALL CLOCK.jpg',
    price: '1009',
    category: 'lighting',
    description: 'Octagonal wall clock - 12"X 12"'
  },
  {
    id: 'clock-round',
    name: 'Round Clock',
    image: '/images/products/CLOCK ROUND.jpg',
    price: '249',
    category: 'lighting',
    description: 'Small round clock - 4"x4"'
  },
  {
    id: 'photo-frame-3',
    name: 'Photo Frame',
    image: '/images/products/PHOTOFRAME.jpg',
    price: '859',
    category: 'lighting',
    description: 'Bamboo photo frame - 9"X7"'
  },
  {
    id: 'big-photo-frame',
    name: 'Big Photo Frame',
    image: '/images/products/BIG PHOTO.jpg',
    price: '2469',
    category: 'lighting',
    description: 'Large photo frame - 20"X16"'
  },
];