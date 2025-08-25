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
    id: 'sports-bamboo-bottle',
    name: 'Sports Bamboo Bottle',
    image: '/images/products/SPORTS BAMBOO BOTTLE  .jpg',
    price: '799',
    category: 'bottles',
    isNew: true,
    description: 'Sports bottle made from sustainable bamboo - 500ML'
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
    id: 'bamboo-bottle-bamboo-cap',
    name: 'Bamboo Bottle with Bamboo Cap',
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
    id: 'bamboo-bottle-big-stainer',
    name: 'Bamboo Bottle with Big Stainer',
    image: '/images/products/BAMBOO BOTTLE  WITH LACE .jpg',
    price: '699',
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
    id: 'coffee-tumbler',
    name: 'Coffee Tumbler',
    image: '/images/products/TUMBLR.jpg',
    price: '749',
    category: 'bottles',
    description: 'Coffee tumbler made from bamboo - 450ML'
  },
  {
    id: 'beer-mug-tumbler',
    name: 'Beer Mug Tumbler',
    image: '/images/products/TUMBLR.jpg',
    price: '499',
    category: 'bottles',
    description: 'Beer mug style tumbler - 450ML'
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
    price: '299',
    category: 'office',
    description: 'Bamboo mobile amplifier - 10" Length'
  },
  {
    id: 'flat-mobile-stand',
    name: 'Flat Mobile Stand',
    image: '/images/products/FLATMOBILE STAND.jpg',
    price: '229',
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
    price: '699',
    category: 'office',
    description: 'Notebook with bamboo cover - 5.5"x 7.5", 200 Pages'
  },
  {
    id: 'diary-bamboo-pages',
    name: 'Diary with Bamboo Pages',
    image: '/images/products/DIARY WITH BAMBOO PAGES .jpg',
    price: '663',
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
    id: 'small-tray',
    name: 'Small Tray',
    image: '/images/products/SMALL TRAY .jpg',
    price: '269',
    category: 'utility',
    description: 'Small serving tray - 6" x 9.5" x 3"'
  },
  {
    id: 'strip-tray-small',
    name: 'Strip Tray Small',
    image: '/images/products/STRIP TRAY .jpg',
    price: '779',
    category: 'utility',
    description: 'Small strip tray - 13" X9"'
  },
  {
    id: 'strip-tray-big',
    name: 'Strip Tray Big',
    image: '/images/products/STRIP  TRAY(SMALL    BIG).jpg',
    price: '1289',
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
    id: 'pot-stand',
    name: 'Bamboo Pot Stand',
    image: '/images/products/POT STAND.jpg',
    price: '79',
    category: 'kitchen',
    description: 'Bamboo stand for cooking pots'
  },

  // Gifts & Mementos
  {
    id: 'memento',
    name: 'Bamboo Memento',
    image: '/images/products/MEMENTO .jpg',
    price: '669',
    category: 'gifts',
    description: 'Beautiful bamboo memento piece'
  },
  {
    id: 'memento-2',
    name: 'Bamboo Memento Design 2',
    image: '/images/products/MEMENTO 2.jpg',
    price: '429',
    category: 'gifts',
    description: 'Alternative memento design'
  },
  {
    id: 'memento-3',
    name: 'Bamboo Memento Design 3',
    image: '/images/products/MEMENTO 3.jpg',
    price: '1279',
    category: 'gifts',
    description: 'Premium memento design'
  },
  {
    id: 'memento-4',
    name: 'Bamboo Memento Design 4',
    image: '/images/products/MEMENTO 4.jpg',
    price: '489',
    category: 'gifts',
    description: 'Luxury memento piece'
  },
  {
    id: 'memento-box',
    name: 'Bamboo Memento Box',
    image: '/images/products/MEMENTO BOX.jpg',
    price: '3099',
    category: 'gifts',
    description: 'Bamboo box for storing mementos'
  },
  {
    id: 'memento-round',
    name: 'Round Bamboo Memento',
    image: '/images/products/MEMENTO ROUND.jpg',
    price: '1419',
    category: 'gifts',
    description: 'Circular bamboo memento'
  },
  {
    id: 'memento-tiger',
    name: 'Tiger Memento',
    image: '/images/products/MEMENTO TIGER.jpg',
    price: '1909',
    category: 'gifts',
    description: 'Tiger-themed bamboo memento'
  },
  {
    id: 'memento-tree',
    name: 'Tree Memento',
    image: '/images/products/MEMENTO TREE .jpg',
    price: '359',
    category: 'gifts',
    description: 'Tree-shaped bamboo memento'
  },
  {
    id: 'invitation-card',
    name: 'Bamboo Invitation Card',
    image: '/images/products/INVITATION CARD.jpg',
    price: '329',
    category: 'gifts',
    description: 'Eco-friendly bamboo invitation card'
  },
  {
    id: 'invitation-card-2',
    name: 'Bamboo Invitation Card Design 2',
    image: '/images/products/INVITATION CARD 2.jpg',
    price: '509',
    category: 'gifts',
    description: 'Alternative invitation card design'
  },
  {
    id: 'invitation-card-3',
    name: 'Bamboo Invitation Card Design 3',
    image: '/images/products/INVITATION CARD 3.jpg',
    price: '489',
    category: 'gifts',
    description: 'Premium invitation card design'
  },

// Musical Instruments
{
  id: 'bamboo-tabala',
  name: 'Bamboo Tabala',
  image: '/images/products/BAMBOO TABALA.jpg',
  price: '689',        // Updated from 2499
  category: 'musical',
  description: 'Traditional bamboo tabala drums'
},
{
  id: 'bamboo-dholak',
  name: 'Bamboo Dholak',
  image: '/images/products/BAMBOO DHOLAK.jpg',
  price: '159',        // Updated from 1899
  category: 'musical',
  description: 'Bamboo dholak for traditional music'
},
{
  id: 'bamboo-sound-amplifier',
  name: 'Bamboo Sound Amplifier & Mobile Holder',
  image: '/images/products/BAMBOO SOUND AMPLIFIER AND MOBILE HOLDER.jpg',
  price: '359',        // Updated from 799
  category: 'musical',
  description: 'Bamboo sound amplifier with mobile holder'
},
{
  id: 'mobile-amplifier',
  name: 'Mobile Amplifier',
  image: '/images/products/MOBILE AMPLIFIER .jpg',
  price: '299',        // Updated from 599
  category: 'musical',
  description: 'Bamboo mobile phone amplifier'
},

// Clocks & Timepieces
{
  id: 'wall-clock',
  name: 'Bamboo Wall Clock',
  image: '/images/products/WALL CLOCK .jpg',
  price: '749',        // Updated from 1299
  category: 'clocks',
  description: 'Classic bamboo wall clock'
},
{
  id: 'table-clock',
  name: 'Bamboo Table Clock',
  image: '/images/products/TABLE CLOCK.jpg',
  price: '559',        // Updated from 999
  category: 'clocks',
  description: 'Elegant bamboo table clock'
},
{
  id: 'clock-round',
  name: 'Round Bamboo Clock',
  image: '/images/products/CLOCK ROUND.jpg',
  price: '249',        // Updated from 899
  category: 'clocks',
  description: 'Circular bamboo clock design'
},
{
  id: 'octagonal-wall-clock',
  name: 'Octagonal Wall Clock',
  image: '/images/products/OCTAGONAL WALL CLOCK.jpg',
  price: '1009',       // Already matches catalog
  category: 'clocks',
  description: 'Unique octagonal bamboo wall clock'
},
{
  id: 'ganesh-wall-clock',
  name: 'Ganesh Wall Clock',
  image: '/images/products/GANESH WALL CLOCK .jpg',
  price: '599',        // Updated from 1799
  category: 'clocks',
  description: 'Ganesh-themed bamboo wall clock'
},
{
  id: 'shivaji-wall-clock',
  name: 'Shivaji Wall Clock',
  image: '/images/products/SHIVAJI WALL CLOCK .jpg',
  price: '1529',       // Updated from 1899
  category: 'clocks',
  description: 'Shivaji-themed bamboo wall clock'
},
{
  id: 'train-wall-clock',
  name: 'Train Wall Clock',
  image: '/images/products/TRAIN WALL CLOCK .jpg',
  price: '849',        // Updated from 1599
  category: 'clocks',
  description: 'Train-themed bamboo wall clock'
},
{
  id: 'tribal-table-clock',
  name: 'Tribal Table Clock',
  image: '/images/products/TRABAL TABLE CLOCK.jpg',
  price: '1829',       // Updated from 1199
  category: 'clocks',
  description: 'Tribal design bamboo table clock'
},
{
  id: 'anchor-wall-clock',
  name: 'Anchor Wall Clock',
  image: '/images/products/ANCHOR WALL CLOCK.jpg',
  price: '2869',       // Already matches catalog
  category: 'clocks',
  description: 'Anchor-themed bamboo wall clock'
},

// Additional Items
{
  id: 'bamboo-visiting-cards',
  name: 'Bamboo Visiting Cards',
  image: '/images/products/BAMBOO VISITING CARDS .jpg',
  price: '49',         // Updated from 299
  category: 'office',
  description: 'Eco-friendly bamboo visiting cards'
},
{
  id: 'single-national-flag',
  name: 'Single National Flag',
  image: '/images/products/SINGLE NATIONAL FLAG.jpg',
  price: '979',        // Updated from 199
  category: 'decor',
  description: 'Bamboo national flag holder'
},
{
  id: 'twin-national-flag',
  name: 'Twin National Flag',
  image: '/images/products/TWIN NATIONAL FLAG .jpg',
  price: '709',        // Updated from 299
  category: 'decor',
  description: 'Dual national flag bamboo holder'
},
{
  id: 'twin-national-flag-small',
  name: 'Twin National Flag Small',
  image: '/images/products/TWIN NTIONAL FLAG SMAL.jpg',
  price: '139',        // Updated from 249
  category: 'decor',
  description: 'Small twin national flag holder'
},
{
  id: 'calendar',
  name: 'Bamboo Calendar',
  image: '/images/products/CALANDER .jpg',
  price: '349',        // Updated from 399
  category: 'office',
  description: 'Bamboo wall calendar'
},
{
  id: 'flat-planter-plant',
  name: 'Flat Planter Plant',
  image: '/images/products/FLAT PLANTER PLANT-2 .jpg',
  price: '159',        // Updated from 599
  category: 'decor',
  description: 'Flat bamboo planter for plants'
},
{
  id: 'flat-planter-plant-2',
  name: 'Flat Planter Plant Design 2',
  image: '/images/products/FLAT PLANTER PLANT-2  (1).jpg',
  price: '159',        // Updated from 649
  category: 'decor',
  description: 'Alternative flat planter design'
},
{
  id: 'planter-plant',
  name: 'Bamboo Planter Plant',
  image: '/images/products/PLANTER  PLANT-1.jpg',
  price: '89',         // Updated from 699
  category: 'decor',
  description: 'Traditional bamboo plant pot'
},
{
  id: 'tea-coaster',
  name: 'Bamboo Tea Coaster',
  image: '/images/products/TEA COASTER.jpg',
  price: '539',        // Updated from 199
  category: 'kitchen',
  description: 'Bamboo coaster for tea cups'
},
{
  id: 'bamboo-tea-coaster-set',
  name: 'Bamboo Tea Coaster Set of 6',
  image: '/images/products/BAMBOO TEA COASTER SET OF 6 .jpg',
  price: '459',        // Updated from 899
  category: 'kitchen',
  description: 'Set of 6 bamboo tea coasters'
},
{
  id: 'bullock-cart-tea-coaster',
  name: 'Bullock Cart Tea Coaster',
  image: '/images/products/BULLOCK CART TEA COASTER.jpg',
  price: '869',        // Already matches catalog
  category: 'kitchen',
  description: 'Bullock cart design tea coaster'
},
{
  id: 'horse-tea-coaster',
  name: 'Horse Tea Coaster',
  image: '/images/products/HORSE TEA COASTER.jpg',
  price: '879',        // Updated from 299
  category: 'kitchen',
  description: 'Horse design tea coaster'
},
{
  id: 'small-elephant-tea-coaster',
  name: 'Small Elephant Tea Coaster',
  image: '/images/products/SMALL ELEPHANT TEA COASTER.jpg',
  price: '579',        // Updated from 249
  category: 'kitchen',
  description: 'Small elephant design tea coaster'
},
{
  id: 'insence-stick-holder',
  name: 'Incense Stick Holder with Non-Burning Cloth',
  image: '/images/products/INSENCE STICK HOLDER WITH NON BURNING CLOTH  .jpg',
  price: '399',        // Updated from 199
  category: 'decor',
  description: 'Bamboo incense stick holder'
}
]