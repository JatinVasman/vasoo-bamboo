'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import ToastNotification from '../components/ToastNotification';

export interface ProductListItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: string;
  originalPrice?: string;
}

interface ProductListContextType {
  items: ProductListItem[];
  addItem: (product: Omit<ProductListItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearList: () => void;
  getTotalItems: () => number;
  getTotalValue: () => number;
  generateWhatsAppMessage: () => string;
  sendToWhatsApp: () => void;
}

const ProductListContext = createContext<ProductListContextType | undefined>(undefined);

export const useProductList = () => {
  const context = useContext(ProductListContext);
  if (!context) {
    throw new Error('useProductList must be used within a ProductListProvider');
  }
  return context;
};

interface ProductListProviderProps {
  children: ReactNode;
}

export const ProductListProvider: React.FC<ProductListProviderProps> = ({ children }) => {
  const [items, setItems] = useState<ProductListItem[]>([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const addItem = (product: Omit<ProductListItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        showToast(`${product.name} quantity updated!`);
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showToast(`${product.name} added to inquiry list!`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearList = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalValue = () => {
    return items.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    const header = `🛒 Cart Summary:\n\n`;
    
    const productList = items
      .map((item, index) => {
        const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
        const totalItemPrice = itemPrice * item.quantity;
        return `${index + 1}. ${item.name} (x${item.quantity}) - ₹${totalItemPrice}`;
      })
      .join('\n');
    
    const totalValue = getTotalValue();
    const footer = `\n-----------------\nTotal: ₹${totalValue}\n\nHello Vasoo Bamboo Arts,\n\nI am interested in the above products. Please provide me with more details including availability and delivery information.\n\nThank you!`;
    
    return header + productList + footer;
  };

  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    if (!message) return;

    // Properly encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    // Use the correct WhatsApp API format
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918484988228&text=${encodedMessage}`;
    
    // Debug: Log the message and URL for testing
    console.log('WhatsApp Message:', message);
    console.log('WhatsApp URL:', whatsappUrl);
    
    // Open WhatsApp in a new tab/window
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback if popup is blocked
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <ProductListContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearList,
        getTotalItems,
        getTotalValue,
        generateWhatsAppMessage,
        sendToWhatsApp,
      }}
    >
      {children}
      <ToastNotification
        isVisible={toastVisible}
        message={toastMessage}
        type="success"
        onClose={() => setToastVisible(false)}
      />
    </ProductListContext.Provider>
  );
};
