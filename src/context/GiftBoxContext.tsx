import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, Category, GiftBoxItem, Enquiry, EnquiryStatus, ToastMessage } from '../types';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_ENQUIRIES } from '../data/initialData';
import confetti from 'canvas-confetti';

interface GiftBoxContextType {
  products: Product[];
  categories: Category[];
  enquiries: Enquiry[];
  giftBoxItems: GiftBoxItem[];
  selectedItemCount: number;
  totalQuantityCount: number;
  selectedBoxStyle: string;
  setSelectedBoxStyle: (style: string) => void;
  toast: ToastMessage | null;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'burgundy') => void;
  hideToast: () => void;
  
  // Gift Box actions
  addToGiftBox: (product: Product, quantity?: number) => void;
  removeFromGiftBox: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearGiftBox: () => void;
  isInGiftBox: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
  
  // Enquiry actions
  submitEnquiry: (data: {
    customerName: string;
    company: string;
    email: string;
    phone: string;
    numberOfBoxes: number;
    deliveryLocation: string;
    preferredDeliveryDate: string;
    additionalRequirements: string;
  }) => { success: boolean; referenceNumber: string; enquiry: Enquiry };
  
  // Admin catalogue actions
  addProduct: (productData: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  toggleProductActive: (productId: string) => void;
  updateEnquiryStatus: (enquiryId: string, status: EnquiryStatus, adminNotes?: string) => void;
  
  // Modal / Drawer state for single product detail
  viewingProduct: Product | null;
  setViewingProduct: (product: Product | null) => void;
}

const GiftBoxContext = createContext<GiftBoxContextType | undefined>(undefined);

export const GiftBoxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Products state with localStorage sync
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_products_v13');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  // Categories state
  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);

  // Enquiries state with localStorage sync
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_enquiries_v13');
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  // Gift box items
  const [giftBoxItems, setGiftBoxItems] = useState<GiftBoxItem[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_giftbox_v13');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedBoxStyle, setSelectedBoxStyle] = useState<string>('Deep Burgundy Velvet Presentation Box');
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('tohfa_products_v13', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('tohfa_enquiries_v13', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('tohfa_giftbox_v13', JSON.stringify(giftBoxItems));
  }, [giftBoxItems]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'burgundy' = 'burgundy') => {
    const id = Date.now().toString();
    setToast({ id, title, message, type });
    setTimeout(() => {
      setToast((curr) => (curr?.id === id ? null : curr));
    }, 4000);
  };

  const hideToast = () => setToast(null);

  const addToGiftBox = (product: Product, quantity = 1) => {
    setGiftBoxItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId: product.id, product, quantity }];
    });

    showToast('Added to Gift Box', `${product.name} has been added to your custom box.`, 'burgundy');
  };

  const removeFromGiftBox = (productId: string) => {
    setGiftBoxItems((prev) => prev.filter((item) => item.productId !== productId));
    showToast('Item Removed', 'Product removed from your gift box.', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromGiftBox(productId);
      return;
    }
    setGiftBoxItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearGiftBox = () => {
    setGiftBoxItems([]);
  };

  const isInGiftBox = (productId: string) => {
    return giftBoxItems.some((item) => item.productId === productId);
  };

  const getItemQuantity = (productId: string) => {
    const item = giftBoxItems.find((i) => i.productId === productId);
    return item ? item.quantity : 0;
  };

  const selectedItemCount = giftBoxItems.length;
  const totalQuantityCount = giftBoxItems.reduce((acc, item) => acc + item.quantity, 0);

  const submitEnquiry = (data: {
    customerName: string;
    company: string;
    email: string;
    phone: string;
    numberOfBoxes: number;
    deliveryLocation: string;
    preferredDeliveryDate: string;
    additionalRequirements: string;
  }) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `TF-2026-${randomSuffix}`;

    const selectedProducts = giftBoxItems.map((item) => ({
      productId: item.productId,
      productName: item.product.name,
      category: item.product.categoryName || item.product.category,
      quantity: item.quantity,
      image: item.product.image,
      priceFormatted: item.product.priceFormatted
    }));

    // Calculate approximate estimated value
    const totalUnitValue = giftBoxItems.reduce((acc, item) => {
      const price = item.product.price || 1500;
      return acc + price * item.quantity;
    }, 0);
    const totalEst = totalUnitValue * (data.numberOfBoxes || 1);
    const estimatedValue = `Rs. ${totalEst.toLocaleString('en-IN')}`;

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      referenceNumber,
      customerName: data.customerName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      numberOfBoxes: data.numberOfBoxes,
      deliveryLocation: data.deliveryLocation,
      preferredDeliveryDate: data.preferredDeliveryDate,
      additionalRequirements: data.additionalRequirements,
      selectedProducts,
      boxStyle: selectedBoxStyle,
      status: 'New',
      createdAt: new Date().toISOString(),
      estimatedValue
    };

    setEnquiries((prev) => [newEnquiry, ...prev]);
    clearGiftBox();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#501B25', '#A58266', '#C7AC95', '#141C33']
      });
    } catch {
      // Fallback silent
    }

    return { success: true, referenceNumber, enquiry: newEnquiry };
  };

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const id = `prod-custom-${Date.now()}`;
    const newProduct: Product = {
      ...productData,
      id,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast('Product Added', `${newProduct.name} added to the catalogue.`, 'success');
  };

  const updateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    showToast('Product Updated', `${updated.name} changes saved.`, 'success');
  };

  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    showToast('Product Deleted', 'The product has been removed from catalogue.', 'info');
  };

  const toggleProductActive = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, active: !p.active } : p))
    );
  };

  const updateEnquiryStatus = (enquiryId: string, status: EnquiryStatus, adminNotes?: string) => {
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === enquiryId
          ? {
              ...e,
              status,
              adminNotes: adminNotes !== undefined ? adminNotes : e.adminNotes
            }
          : e
      )
    );
    showToast('Status Updated', `Enquiry marked as ${status}.`, 'success');
  };

  return (
    <GiftBoxContext.Provider
      value={{
        products,
        categories,
        enquiries,
        giftBoxItems,
        selectedItemCount,
        totalQuantityCount,
        selectedBoxStyle,
        setSelectedBoxStyle,
        toast,
        showToast,
        hideToast,
        addToGiftBox,
        removeFromGiftBox,
        updateQuantity,
        clearGiftBox,
        isInGiftBox,
        getItemQuantity,
        submitEnquiry,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductActive,
        updateEnquiryStatus,
        viewingProduct,
        setViewingProduct
      }}
    >
      {children}
    </GiftBoxContext.Provider>
  );
};

export const useGiftBox = () => {
  const context = useContext(GiftBoxContext);
  if (!context) {
    throw new Error('useGiftBox must be used within a GiftBoxProvider');
  }
  return context;
};