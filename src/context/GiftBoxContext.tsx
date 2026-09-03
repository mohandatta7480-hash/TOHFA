import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, Category, GiftBoxItem, Enquiry, EnquiryStatus, ToastMessage } from '../types';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_ENQUIRIES } from '../data/initialData';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
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
  isDatabaseConnected: boolean;
  
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

// Helper to map Supabase database record to TypeScript Enquiry interface
const mapSupabaseToEnquiry = (row: any): Enquiry => ({
  id: row.id,
  referenceNumber: row.reference_number || row.referenceNumber || '',
  customerName: row.customer_name || row.customerName || '',
  company: row.company || '',
  email: row.email || '',
  phone: row.phone || '',
  numberOfBoxes: Number(row.number_of_boxes || row.numberOfBoxes || 1),
  deliveryLocation: row.delivery_location || row.deliveryLocation || '',
  preferredDeliveryDate: row.preferred_delivery_date || row.preferredDeliveryDate || '',
  additionalRequirements: row.additional_requirements || row.additionalRequirements || '',
  selectedProducts: row.selected_products || row.selectedProducts || [],
  boxStyle: row.box_style || row.boxStyle || 'Deep Burgundy Velvet Presentation Box',
  status: (row.status as EnquiryStatus) || 'New',
  adminNotes: row.admin_notes || row.adminNotes || '',
  createdAt: row.created_at || row.createdAt || new Date().toISOString(),
  estimatedValue: row.estimated_value || row.estimatedValue || 'Custom Quote'
});

export const GiftBoxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Products state with localStorage sync
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_products_v20');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  // Categories state
  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);

  // Enquiries state with Supabase cloud fetch & localStorage sync fallback
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_enquiries_v20');
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  // Gift box items
  const [giftBoxItems, setGiftBoxItems] = useState<GiftBoxItem[]>(() => {
    try {
      const saved = localStorage.getItem('tohfa_giftbox_v20');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedBoxStyle, setSelectedBoxStyle] = useState<string>('Deep Burgundy Velvet Presentation Box');
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  // Supabase Real-time Cloud Sync
  useEffect(() => {
    const client = supabase;
    if (!isSupabaseConfigured || !client) return;

    let isMounted = true;

    // 1. Fetch live enquiries on mount
    const fetchLiveEnquiries = async () => {
      try {
        const { data, error } = await client
          .from('enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.warn('Supabase fetch notice:', error.message);
          return;
        }

        if (data && isMounted) {
          const mapped = data.map(mapSupabaseToEnquiry);
          setEnquiries(mapped);
        }
      } catch (err) {
        console.warn('Supabase connection error:', err);
      }
    };

    fetchLiveEnquiries();

    // 2. Real-time subscription to new customer enquiries
    const channel = client
      .channel('realtime_enquiries')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'enquiries' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newEnq = mapSupabaseToEnquiry(payload.new);
            setEnquiries((prev) => {
              if (prev.some((e) => e.id === newEnq.id || e.referenceNumber === newEnq.referenceNumber)) {
                return prev;
              }
              return [newEnq, ...prev];
            });
          } else if (payload.eventType === 'UPDATE') {
            const updated = mapSupabaseToEnquiry(payload.new);
            setEnquiries((prev) =>
              prev.map((e) => (e.id === updated.id ? updated : e))
            );
          } else if (payload.eventType === 'DELETE') {
            setEnquiries((prev) => prev.filter((e) => e.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      client.removeChannel(channel);
    };
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('tohfa_products_v20', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('tohfa_enquiries_v20', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('tohfa_giftbox_v20', JSON.stringify(giftBoxItems));
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

    const enquiryId = `enq-${Date.now()}`;
    const newEnquiry: Enquiry = {
      id: enquiryId,
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

    // Save to local state immediately
    setEnquiries((prev) => [newEnquiry, ...prev]);
    clearGiftBox();

    // Sync to Supabase Cloud Database if configured
    if (isSupabaseConfigured && supabase) {
      supabase.from('enquiries').insert([
        {
          id: enquiryId,
          reference_number: referenceNumber,
          customer_name: data.customerName,
          company: data.company,
          email: data.email,
          phone: data.phone,
          number_of_boxes: data.numberOfBoxes,
          delivery_location: data.deliveryLocation,
          preferred_delivery_date: data.preferredDeliveryDate,
          additional_requirements: data.additionalRequirements,
          selected_products: selectedProducts,
          box_style: selectedBoxStyle,
          status: 'New',
          admin_notes: '',
          estimated_value: estimatedValue,
          created_at: new Date().toISOString()
        }
      ]).then(({ error }) => {
        if (error) console.warn('Supabase insert notice:', error.message);
      });
    }

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

    // Sync status change to Supabase Cloud Database if configured
    if (isSupabaseConfigured && supabase) {
      const updatePayload: Record<string, any> = { status };
      if (adminNotes !== undefined) {
        updatePayload.admin_notes = adminNotes;
      }
      supabase.from('enquiries').update(updatePayload).eq('id', enquiryId).then(({ error }) => {
        if (error) console.warn('Supabase status update error:', error.message);
      });
    }

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
        isDatabaseConnected: isSupabaseConfigured,
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