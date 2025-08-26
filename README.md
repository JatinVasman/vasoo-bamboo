<<<<<<< HEAD
# 🎋 Vasoo Bamboo Arts

> A modern, sustainable e-commerce website showcasing handcrafted bamboo products with eco-friendly design principles.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 🌟 Features

✨ **Modern Design**: Clean, minimalist interface with bamboo-inspired aesthetics  
📱 **Responsive Layout**: Fully responsive design optimized for all devices  
🛍️ **Product Showcase**: Interactive product catalog with filtering capabilities  
💬 **WhatsApp Integration**: Direct product inquiry through WhatsApp  
🎭 **Smooth Animations**: Framer Motion powered interactions  
♿ **Accessibility**: WCAG compliant design with proper contrast ratios

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Language |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Animations |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/JatinVasman/vasoo-bamboo-arts.git
cd vasoo-bamboo-arts

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Screenshots

### 🏠 Homepage
Clean, modern design with bamboo-inspired aesthetics and smooth animations.

### 🛍️ Products Page
Interactive product catalog with premium filtering and cart functionality.

### 📱 Mobile Experience
Fully responsive design optimized for all devices.

## 📁 Project Structure

```
vasoo-bamboo/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── AnimatedButton.tsx
│   ├── CategoryCard.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductListCart.tsx
│   ├── SectionTitle.tsx
│   └── ToastNotification.tsx
├── contexts/              # React contexts
│   └── ProductListContext.tsx
├── public/               # Static assets
│   └── images/           # Image assets
└── styles/               # Additional styles
```

## 🎨 Design System

### Color Palette

- **Primary Colors**:
  - Bamboo Brown: `#8D6E63` - Headers, navigation, primary text
  - Eco Green: `#4CAF50` - Buttons, highlights, CTAs
  - Beige: `#F5F5DC` - Background, cards, containers

- **Typography**:
  - Headers: Playfair Display (serif)
  - Body Text: Poppins (sans-serif)

### Components

All components follow a consistent design pattern with:
- Proper hover states and animations
- Accessible color contrast ratios
- Mobile-first responsive design
- TypeScript for type safety

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Featured product categories
- About preview section
- Sustainability features showcase

### Products Page (`/products`)
- Premium filter navigation with smooth animations
- Product grid with hover effects
- Category-based filtering
- Add to inquiry cart functionality

### About Page (`/about`)
- Company story and mission
- Team and craftsmanship showcase
- Timeline of achievements
- Values and sustainability commitment

### Contact Page (`/contact`)
- Contact form with validation
- Business information
- Location details
- WhatsApp quick contact

## 🛒 Shopping Cart Features

- **Product Inquiry System**: Add products to inquiry list
- **WhatsApp Integration**: Send product list via WhatsApp
- **Price Calculation**: Automatic total calculation
- **Responsive Modal**: Beautiful cart preview with animations

## 📱 WhatsApp Integration

The website includes a sophisticated WhatsApp integration that:
- Formats product inquiries professionally
- Includes pricing and quantities
- Calculates totals automatically
- Sends formatted messages to business WhatsApp

Format Example:
```
🛒 Cart Summary:

1. Bamboo Water Bottle (x2) - ₹1798
2. Decorative Vase (x1) - ₹1899
-----------------
Total: ₹3697

Hello Vasoo Bamboo Arts,
I am interested in the above products...
```

## 🎯 Performance Optimizations

- **Next.js App Router**: Latest routing system for optimal performance
- **Image Optimization**: Next.js Image component for lazy loading
- **Code Splitting**: Automatic code splitting for faster load times
- **CSS Optimization**: Tailwind CSS with purging for minimal bundle size

## 🔧 Customization

### Adding New Products

1. Add product data to the products array in `/app/products/page.tsx`
2. Include product images in `/public/images/products/`
3. Follow the existing ProductCard interface

### Modifying Colors

Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  'bamboo-brown': '#8D6E63',
  'eco-green': '#4CAF50',
  'beige': '#F5F5DC',
  // Add your custom colors
}
```

### WhatsApp Configuration

Update the phone number in `contexts/ProductListContext.tsx`:
```typescript
const whatsappUrl = `https://api.whatsapp.com/send?phone=918484988228&text=${encodedMessage}`;
```

## 🌍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email vasoo.bamboo@gmail.com or contact +91 90279 18860.

---

**Made with 🌱 for sustainable living** | Vasoo Bamboo Arts © 2025
=======
# vasoo-bamboo-arts
>>>>>>> 9f21d306ca95d9649fe83be5ddad7b4b2ef94f68
