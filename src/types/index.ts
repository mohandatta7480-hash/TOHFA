export type CategorySlug = 
  | 'corporate'
  | 'festive'
  | 'edible'
  | 'merchandise'
  | 'gadgets';

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  coverImage: string;
  active: boolean;
  productCount?: number;
  featuredHighlight?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: CategorySlug;
  categoryName?: string;
  image: string;
  secondaryImages?: string[];
  price: number | null; // Price in INR or null for bespoke quote
  priceFormatted: string;
  specifications: Record<string, string>;
  customizationOptions: string[];
  moq?: number; // Optional Minimum Order Quantity
  leadTime?: string; // Optional Lead Time
  badge?: string;
  dimensions?: string;
  weight?: string;
  active: boolean;
  featured?: boolean;
  createdAt: string;
}

export interface GiftBoxItem {
  productId: string;
  product: Product;
  quantity: number;
  customizationNote?: string;
}

export interface GiftBox {
  id: string;
  items: GiftBoxItem[];
  boxStyle?: string;
  ribbonColor?: string;
  customGreetingCard?: {
    enabled: boolean;
    recipientName?: string;
    message?: string;
  };
  createdAt: string;
}

export type EnquiryStatus = 'New' | 'Contacted' | 'Quote Sent' | 'Completed' | 'Archived';

export interface EnquirySelectedProduct {
  productId: string;
  productName: string;
  category: string;
  quantity: number;
  image: string;
  priceFormatted: string;
}

export interface Enquiry {
  id: string;
  referenceNumber: string;
  customerName: string;
  company: string;
  email: string;
  phone: string;
  numberOfBoxes: number;
  deliveryLocation: string;
  preferredDeliveryDate: string;
  additionalRequirements: string;
  selectedProducts: EnquirySelectedProduct[];
  boxStyle?: string;
  status: EnquiryStatus;
  adminNotes?: string;
  createdAt: string;
  estimatedValue?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'Super Admin' | 'Catalogue Manager' | 'Corporate Concierge';
  lastLogin?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'burgundy';
}