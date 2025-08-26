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
    id: 'sports-bamboo-bottle',
    name: 'Sports Bamboo Bottle',
    image: '/images/products/SPORTS BAMBOO BOTTLE  .jpg',
    price: '799',
    category: 'bottles',
    isNew: true,
    description: 'Sports bottle made from sustainable bamboo - 500ML'
  },
  {
    id: 'bamboo-bottle-bamboo-cap',
    name: 'Bamboo Bottle with Bamboo Cap',
    image: '/images/products/BAMBOO BOTTLE WITH BAMBOO CAP.jpg',
    price: '629',
    category: 'bottles',
    description: 'Eco-friendly bamboo bottle with a natural bamboo cap - 500ML'
  },
  {
    id: 'bamboo-bottle-steel-handle',
    name: 'Bamboo Bottle with Steel Handle',
    image: '/images/products/BAMBOO BOTTLE WITH STEEL HANDLE.jpg',
    price: '799',
    category: 'bottles',
    description: 'Durable bamboo bottle with stainless steel handle - 500ML'
  },
  {
    id: 'BAMBOO BOTTLE  WITH LACE ',
    name: 'BAMBOO BOTTLE  WITH LACE ',
    image: '/images/products/BAMBOO BOTTLE  WITH LACE .jpg',
    price: '799',
    category: 'bottles',
    description: 'Bamboo bottle with bamboo cap - 500ML'
  },
  {
    id: 'bamboo-bottle-regular',
    name: 'Bamboo Bottle Regular',
    image: '/images/products/BAMBOO BOTTLE REGULAR  .jpg',
    price: '699',
    category: 'bottles',
    description: 'Regular bamboo water bottle for daily use - 500ML'
  },
  {
    id: 'SPORTS BAMBOO BOTTLE   (1)',
    name: 'Sports Bamboo Bottle',
    image: '/images/products/SPORTS BAMBOO BOTTLE(1).jpg',
    price: '799',
    category: 'bottles',
    description: 'Bamboo bottle with big stainer - 500ML'
  },
  {
    id: 'bamboo-tea-cup',
    name: 'Bamboo Tea Cup with Bamboo Lid',
    image: '/images/products/_  BAMBOO TEA CUP .jpg',
    price: '499',
    category: 'bottles',
    description: 'Traditional bamboo tea cup with lid - 250ML'
  },
  {
    id: 'eco-cup-wheat-fiber',
    name: 'Eco Cup - Wheat Fiber with Bamboo Lid',
    image: '/images/products/_  ECO CUP MADE OF WHEAT FIBER WITH BAMBOO LID.jpg',
    price: '349',
    category: 'bottles',
    description: 'Sustainable wheat fiber cup with bamboo lid - 350ML'
  },
  {
    id: 'tumbler',
    name: 'Tumbler',
    image: '/images/products/TUMBLR.jpg',
    price: '499',
    category: 'bottles',
    description: 'Coffee tumbler made from bamboo - 450ML'
  },
  {
    id: 'coffee-tumbler-beer-mug',
    name: 'Coffee Tumbler Beer Mug',
    image: '/images/products/_COFFEETUMBLRBEERMUG.jpg',
    price: '749',
    category: 'bottles',
    description: 'Bamboo coffee tumbler beer mug - 400ML'
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
    name: 'Single National Flag',
    image: '/images/products/SINGLE NATIONAL FLAG.jpg',
    price: '979',
    category: 'decor',
    isNew: true,
    description: 'Single national flag holder - 16" Height'
  },
  {
    id: 'twin-national-flag',
    name: 'Twin National Flag',
    image: '/images/products/TWIN NATIONAL FLAG .jpg',
    price: '709',
    category: 'decor',
    description: 'Twin national flag holder - 8.5" Height'
  },
  {
    id: 'twin-national-flag-small',
    name: 'Twin National Flag Small',
    image: '/images/products/TWIN NTIONAL FLAG SMAL.jpg',
    price: '139',
    category: 'decor',
    description: 'Small twin national flag holder - 4.7" Height'
  },
  {
    id: 'bamboo-charaka',
    name: 'Bamboo Charaka',
    image: '/images/products/BAMBOO-CHARAKA.jpg',
    price: '389',
    category: 'decor',
    description: 'Decorative bamboo charaka - 10.3" x 5.5" x 4.3"'
  },
  {
    id: 'bamboo-peacock',
    name: 'Bamboo Peacock',
    image: '/images/products/BAMBOO PEACOCK.jpg',
    price: '559',
    category: 'decor',
    description: 'Handcrafted bamboo peacock - 10" Height'
  },
  {
    id: 'bamboo-tabala',
    name: 'Bamboo Tabala',
    image: '/images/products/BAMBOO TABALA.jpg',
    price: '689',
    category: 'decor',
    description: 'Traditional bamboo tabla set - 5" x 6" x 8"'
  },
  {
    id: 'bamboo-ganapati',
    name: 'Bamboo Ganapati',
    image: '/images/products/BAMBOO GANAPATI .jpg',
    price: '599',
    category: 'decor',
    description: 'Sacred bamboo Ganapati idol - 7" Height'
  },
  {
    id: 'bamboo-veena',
    name: 'Bamboo Veena',
    image: '/images/products/BAMBOO-VEENA.jpg',
    price: '509',
    category: 'decor',
    description: 'Decorative bamboo veena - 3" x 4" x 9"'
  },
  {
    id: 'bamboo-dholak',
    name: 'Bamboo Dholak',
    image: '/images/products/BAMBOO DHOLAK.jpg',
    price: '159',
    category: 'decor',
    description: 'Miniature bamboo dholak - 2" x 2" x 5"'
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
    name: 'Bamboo Bullock Cart',
    image: '/images/products/BAMBOO BULLOCK CART.jpg',
    price: '1159',
    category: 'decor',
    description: 'Miniature bamboo bullock cart - 13" X 10"'
  },
  {
    id: 'bamboo-tribal-face',
    name: 'Bamboo Tribal Face',
    image: '/images/products/BAMBOO TRIBAL FACE.jpg',
    price: '269',
    category: 'decor',
    description: 'Traditional tribal face mask - 4" x 11"'
  },
  {
    id: 'bamboo-tribal-mask',
    name: 'Bamboo Tribal Mask',
    image: '/images/products/BAMBOO TRIBAL MASK .jpg',
    price: '289',
    category: 'decor',
    description: 'Authentic tribal mask - 4" x 9"'
  },
  {
    id: 'harine-candle-holder',
    name: 'Harine Candle Holder',
    image: '/images/products/HARINE CANDLE HOLDER.jpg',
    price: '109',
    category: 'decor',
    description: 'Traditional candle holder - 4" X 3"'
  },
  {
    id: 'flat-planter',
    name: 'Flat Planter',
    image: '/images/products/FLAT PLANTER PLANT-2 .jpg',
    price: '159',
    category: 'decor',
    description: 'Flat bamboo planter - 12" Length'
  },
  {
    id: 'flower-vase',
    name: 'Flower Vase',
    image: '/images/products/Flower-vase.png',
    price: '201',
    category: 'decor',
    description: 'Bamboo flower vase - 11" Height'
  },
  {
    id: 'table-flower-vase',
    name: 'Table Flower Vase',
    image: '/images/products/TABLE FLOWER VASE .jpg',
    price: '101',
    category: 'decor',
    description: 'Table bamboo flower vase - 10" Height'
  },
  {
    id: 'wall-flower-vase',
    name: 'Wall Flower Vase',
    image: '/images/products/WALL FLOWER VASE .jpg',
    price: '449',
    category: 'decor',
    description: 'Wall-mounted flower vase - 11"X11"'
  },
  {
    id: 'planter-plant-1',
    name: 'Planter Plant-1',
    image: '/images/products/PLANTER  PLANT-1.jpg',
    price: '89',
    category: 'decor',
    description: 'Small bamboo planter - 5" Height'
  },
  {
    id: 'insence-stick-holder',
    name: 'Incense Stick Holder with Non-Burning Cloth',
    image: '/images/products/INSENCE STICK HOLDER WITH NON BURNING CLOTH  .jpg',
    price: '399',
    category: 'decor',
    description: 'Bamboo incense holder - 9"X1.3"'
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
    id: 'desk-organizer',
    name: 'Desk Organizer',
    image: '/images/products/DESK  ORGANISER .jpg',
    price: '759',
    category: 'office',
    description: 'Bamboo desk organizer - 2"X5"X4"'
  },
  {
    id: 'file-folder-tray',
    name: 'File Folder Tray',
    image: '/images/products/FILE FOLDER TRAY.jpg',
    price: '1401',
    category: 'office',
    description: 'Bamboo file folder tray - 14"x16"'
  },
  {
    id: 'table-organizer-1',
    name: 'Table Organizer 1',
    image: '/images/products/TABLE ORGANISER.jpg',
    price: '469',
    category: 'office',
    description: 'Bamboo table organizer - 9"X5"'
  },
  {
    id: 'table-organizer-2',
    name: 'Table Organizer 2',
    image: '/images/products/TABLE ORGANISER (1).jpg',
    price: '469',
    category: 'office',
    description: 'Alternative table organizer - 9"x5"'
  },
  {
    id: 'mobile-amplifier',
    name: 'Mobile Amplifier',
    image: '/images/products/MOBILE AMPLIFIER .jpg',
    price: '229',
    category: 'office',
    description: 'Bamboo mobile amplifier - 10" Length'
  },
  {
    id: 'flat-mobile-stand',
    name: 'Flat Mobile Stand',
    image: '/images/products/FLATMOBILE STAND.jpg',
    price: '239',
    category: 'office',
    description: 'Flat mobile stand - 7.5" Height'
  },
  {
    id: 'tree-mobile-stand',
    name: 'Tree Mobile Stand',
    image: '/images/products/TREEMOBILE STAND.jpg',
    price: '239',
    category: 'office',
    description: 'Tree-shaped mobile stand - 5"Ht, 4"Dia'
  },
  {
    id: 'mobile-stand-1',
    name: 'Mobile Stand',
    image: '/images/products/MOBILE STAND .jpg',
    price: '239',
    category: 'office',
    description: 'Classic mobile stand - 7.5" x 3.5"'
  },
  {
    id: 'home-name-plate-2',
    name: 'Home Name Plate',
    image: '/images/products/HOME NAME PLATE.jpg',
    price: '639',
    category: 'office',
    description: 'Home name plate - 13.5" x 7.5"'
  },
  {
    id: 'name-plate-1',
    name: 'Name Plate',
    image: '/images/products/NAME PLATE.jpg',
    price: '395',
    category: 'office',
    description: 'Bamboo name plate - 2.25" x 12"'
  },
  {
    id: 'home-name-plate-1',
    name: 'Home Name Plate Large',
    image: '/images/products/HOME NAME PLATE (1).jpg',
    price: '679',
    category: 'office',
    description: 'Large home name plate - 16" x 7.5"'
  },
  {
    id: 'notebook',
    name: 'Bamboo Notebook',
    image: '/images/products/NOTEBOOK .jpg',
    price: '663',
    category: 'office',
    description: 'Notebook with bamboo cover - 5.5"x 7.5", 200 Pages'
  },
  {
    id: 'diary-bamboo-pages',
    name: 'Diary with Bamboo Pages',
    image: '/images/products/DIARY WITH BAMBOO PAGES .jpg',
    price: '699',
    category: 'office',
    description: 'Diary with bamboo paper - 6.1"x 8.5", 150 Pages'
  },
  {
    id: 'panpuda',
    name: 'Panpuda',
    image: '/images/products/PANPUDA.jpg',
    price: '789',
    category: 'office',
    description: 'Bamboo panpuda - 4"X8"X.5"'
  },
  {
    id: 'camera-pen-stand',
    name: 'Camera Pen Stand',
    image: '/images/products/CAMERA PEN STAND.jpg',
    price: '359',
    category: 'office',
    description: 'Camera-shaped pen stand - 5" x 3" x 2.25"'
  },
  {
    id: 'ludo-pen-stand',
    name: 'Ludo Pen Stand',
    image: '/images/products/LUDO PEN STAND.jpg',
    price: '399',
    category: 'office',
    description: 'Ludo-themed pen stand - 5" x 5" x 5"'
  },
  {
    id: 'pencil-pen-stand',
    name: 'Pencil Pen Stand',
    image: '/images/products/PENCIL PEN STAND.jpg',
    price: '455',
    category: 'office',
    description: 'Pencil-shaped pen stand - 8" Height'
  },
  {
    id: 'pen-stand',
    name: 'Pen Stand',
    image: '/images/products/PEN STAND.jpg',
    price: '190',
    category: 'office',
    description: 'Classic pen stand - 5" Height'
  },
  {
    id: 'paperweight',
    name: 'Bamboo Paperweight',
    image: '/images/products/PAPERWEIGHT.jpg',
    price: '149',
    category: 'office',
    description: 'Decorative paperweight - 3"x1"'
  },
  {
    id: 'bamboo-visiting-cards',
    name: 'Bamboo Visiting Cards',
    image: '/images/products/BAMBOO VISITING CARDS .jpg',
    price: '49',
    category: 'office',
    description: 'Eco-friendly visiting cards - 3.5"X2"'
  },
  {
    id: 'laptop-stand',
    name: 'Bamboo Laptop Stand',
    image: '/images/products/LAPTOP STAND.jpg',
    price: '304',
    category: 'office',
    description: 'Ergonomic laptop stand - 10.5" X1.5"'
  },
  {
    id: 'memento-1',
    name: 'Memento 1',
    image: '/images/products/MEMENTO .jpg',
    price: '669',
    category: 'office',
    description: 'Bamboo memento - 13"X6"'
  },
  {
    id: 'memento-2',
    name: 'Memento 2',
    image: '/images/products/MEMENTO 2.jpg',
    price: '429',
    category: 'office',
    description: 'Memento design 2 - 12"X5"'
  },
  {
    id: 'memento-3',
    name: 'Memento 3',
    image: '/images/products/MEMENTO 3.jpg',
    price: '1279',
    category: 'office',
    description: 'Premium memento - 14"X9"'
  },
  {
    id: 'memento-4',
    name: 'Memento 4',
    image: '/images/products/MEMENTO 4.jpg',
    price: '489',
    category: 'office',
    description: 'Memento design 4 - 12"X6"'
  },
  {
    id: 'memento-box',
    name: 'Memento Box',
    image: '/images/products/MEMENTO BOX.jpg',
    price: '3099',
    category: 'office',
    description: 'Memento storage box - 13"X6"'
  },
  {
    id: 'memento-round',
    name: 'Memento Round',
    image: '/images/products/MEMENTO ROUND.jpg',
    price: '1419',
    category: 'office',
    description: 'Round memento - 14"X5"'
  },
  {
    id: 'memento-tiger',
    name: 'Memento Tiger',
    image: '/images/products/MEMENTO TIGER.jpg',
    price: '1909',
    category: 'office',
    description: 'Tiger memento - 14"X9"'
  },
  {
    id: 'memento-tree',
    name: 'Memento Tree',
    image: '/images/products/MEMENTO TREE .jpg',
    price: '359',
    category: 'office',
    description: 'Tree memento - 10"X6"'
  },
  {
    id: 'invitation-card-1',
    name: 'Invitation Card 1',
    image: '/images/products/INVITATION CARD.jpg',
    price: '329',
    category: 'office',
    description: 'Bamboo invitation card - 11"X12"'
  },
  {
    id: 'invitation-card-2',
    name: 'Invitation Card 2',
    image: '/images/products/INVITATION CARD 2.jpg',
    price: '509',
    category: 'office',
    description: 'Invitation card design 2 - 6"X13"'
  },
  {
    id: 'invitation-card-3',
    name: 'Invitation Card 3',
    image: '/images/products/INVITATION CARD 3.jpg',
    price: '489',
    category: 'office',
    description: 'Invitation card design 3 - 6"X8"'
  },
  {
    id: 'stylus-pen',
    name: 'Stylus Pen',
    image: '/images/products/STYLUS PEN.jpg',
    price: '129',
    category: 'office',
    description: 'Bamboo stylus pen'
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
    id: 'premium-bamboo-pen',
    name: 'Premium Bamboo Pen',
    image: '/images/products/PREMIUM  BAMBOO  PEN .jpg',
    price: '339',
    category: 'office',
    description: 'Premium quality bamboo pen'
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
    name: 'Bamboo Calendar',
    image: '/images/products/CALANDER .jpg',
    price: '349',
    category: 'utility',
    description: 'Bamboo wall calendar - 3"X2"X1"'
  },
  {
    id: 'bamboo-badge',
    name: 'Bamboo Badge',
    image: '/images/products/_BADGE  .jpg',
    price: '39',
    category: 'utility',
    description: 'Eco-friendly badge - 2"X1"'
  },
  {
    id: 'fridge-magnet',
    name: 'Bamboo Fridge Magnet',
    image: '/images/products/_FRIDGE MAGNET .jpg',
    price: '100',
    category: 'utility',
    description: 'Decorative fridge magnet - 3.6"X2"'
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
    id: 'table-photo-frame',
    name: 'Table Photo Frame',
    image: '/images/products/_ TABLE PHOTO FRAME.jpg',
    price: '449',
    category: 'utility',
    description: 'Table photo frame - 100X100 MM'
  },
  {
    id: 'small-elephant-tea-coaster',
    name: 'Small Elephant Tea Coaster',
    image: '/images/products/SMALL ELEPHANT TEA COASTER.jpg',
    price: '579',
    category: 'utility',
    description: 'Elephant design tea coaster - 7"X5"'
  },
  {
    id: 'bullock-cart-tea-coaster',
    name: 'Bullock Cart Tea Coaster',
    image: '/images/products/BULLOCK CART TEA COASTER.jpg',
    price: '869',
    category: 'utility',
    description: 'Bullock cart tea coaster - 10"X7"'
  },
  {
    id: 'tea-coaster',
    name: 'Tea Coaster',
    image: '/images/products/TEA COASTER.jpg',
    price: '539',
    category: 'utility',
    description: 'Classic tea coaster - 4"X4"'
  },
  {
    id: 'horse-tea-coaster',
    name: 'Horse Tea Coaster',
    image: '/images/products/HORSE TEA COASTER.jpg',
    price: '879',
    category: 'utility',
    description: 'Horse design tea coaster - 10"X4"'
  },
  {
    id: 'fruit-tray',
    name: 'Fruit Tray',
    image: '/images/products/FRUIT TRAY.jpg',
    price: '449',
    category: 'utility',
    description: 'Bamboo fruit serving tray - 11"X9"'
  },

  {
    id: 'strip-tray-small',
    name: 'Small Tray',
    image: '/images/products/SMALL TRAY .jpg',
    price: '269',
    category: 'utility',
    description: 'Small strip tray - 13" X9"'
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
    name: 'Silver Tray',
    image: '/images/products/SLIVER TRAY  TRY-SLIVR.jpg',
    price: '709',
    category: 'utility',
    description: 'Silver finish tray - 13"X5"'
  },
  {
    id: 'strip-tray-3',
    name: 'Strip Tray',
    image: '/images/products/STRIP TRAY .jpg',
    price: '819',
    category: 'utility',
    description: 'Medium strip tray - 13" x 9.5" x 3"'
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
    name: 'Key Chains',
    image: '/images/products/KEY CHAINS  KY-CHNS.jpg',
    price: '82',
    category: 'utility',
    description: 'Bamboo key chains - 45 to 60mm'
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
    name: 'Bell Key Holder',
    image: '/images/products/BELL KEY HOLDER.jpg',
    price: '169',
    category: 'utility',
    description: 'Bell-shaped key holder - 8"X3.5"'
  },
  {
    id: 'elephant-key-holder',
    name: 'Elephant Key Holder',
    image: '/images/products/ELEPHANTKEY HOLDER .jpg',
    price: '479',
    category: 'utility',
    description: 'Elephant key holder - 11"X7"'
  },
  {
    id: 'guitar-key-holder',
    name: 'Guitar Key Holder',
    image: '/images/products/GUITAR KEY HOLDER  KY-HL-GTR .jpg',
    price: '479',
    category: 'utility',
    description: 'Guitar-shaped key holder - 14"X7"'
  },
  {
    id: 'learn-cubes',
    name: 'Learn Cubes',
    image: '/images/products/LEARN CUBES.jpg',
    price: '450',
    category: 'utility',
    description: 'Educational learning cubes - 3" x 3"'
  },
  {
    id: 'sarota',
    name: 'Sarota',
    image: '/images/products/SAROTA.jpg',
    price: '59',
    category: 'utility',
    description: 'Bamboo sarota for kitchen - 11"'
  },
  {
    id: 'chimta',
    name: 'Chimta',
    image: '/images/products/CHIMTA.jpg',
    price: '59',
    category: 'utility',
    description: 'Bamboo chimta tongs - 8"'
  },
  {
    id: 'pot-stand',
    name: 'Pot Stand',
    image: '/images/products/POT STAND.jpg',
    price: '79',
    category: 'utility',
    description: 'Bamboo pot stand - 6" x6" x2"'
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
    name: 'Lily Comb',
    image: '/images/products/_LILY COMB  .jpg',
    price: '139',
    category: 'utility',
    description: 'Lily bamboo comb - 7.5"X2"'
  },
  {
    id: 'beard-comb',
    name: 'Beard Comb',
    image: '/images/products/_ BEARD COMB .jpg',
    price: '69',
    category: 'utility',
    description: 'Bamboo beard comb - 3.5"X2.4"'
  },
  {
    id: 'pocket-comb',
    name: 'Pocket Comb',
    image: '/images/products/POCKET COMB.jpg',
    price: '49',
    category: 'utility',
    description: 'Compact pocket comb - 5.5"X1.5"'
  },
  {
    id: 'handle-comb',
    name: 'Handle Comb',
    image: '/images/products/HANDLE COMB.jpg',
    price: '139',
    category: 'utility',
    description: 'Bamboo comb with handle - 7.5"X2"'
  },
  {
    id: 'shampoo-comb',
    name: 'Shampoo Comb',
    image: '/images/products/_SHAMPOO COMB.jpg',
    price: '79',
    category: 'utility',
    description: 'Shampoo comb - 6.5"X2.5"'
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
    id: 'glass-lamp',
    name: 'Glass Lamp',
    image: '/images/products/GLASS LAMP.jpg',
    price: '329',
    category: 'lighting',
    description: 'Glass and bamboo combination lamp'
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
    name: 'Shivaji Wall Clock',
    image: '/images/products/SHIVAJI WALL CLOCK .jpg',
    price: '1529',
    category: 'lighting',
    description: 'Shivaji themed wall clock - 24"x10"x3"'
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
  {
    id: 'photo-frame-4',
    name: 'Photo Frame ',
    image: '/images/products/PHOTOFRAME 2.jpg',
    price: '469',
    category: 'lighting',
    description: 'Medium photo frame - 10"X12"'
  },
  {
    id: 'photo-frame-2',
    name: 'Table Photo Frame',
    image: '/images/products/_ TABLE PHOTO FRAME.jpg',
    price: '469',
    category: 'lighting',
    description: 'Small photo frame - 10"X8"'
  }
];