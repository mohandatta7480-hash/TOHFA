import React, { useState } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useGiftBox } from '../../context/GiftBoxContext';
import type { Product, Enquiry, EnquiryStatus, CategorySlug } from '../../types';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Inbox,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Search,
  X,
  ArrowUpRight
} from 'lucide-react';

interface AdminDashboardProps {
  navigate: (path: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigate }) => {
  const { user, isAuthenticated, logout } = useAdminAuth();
  const {
    products,
    categories,
    enquiries,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleProductActive,
    updateEnquiryStatus
  } = useGiftBox();

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'categories' | 'enquiries' | 'analytics' | 'settings'>('overview');

  // Product Modal State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    slug: '',
    description: '',
    longDescription: '',
    category: 'corporate' as CategorySlug,
    image: '',
    price: 1500,
    priceFormatted: 'Rs. 1,500',
    moq: 25,
    leadTime: '5 to 7 business days',
    badge: '',
    active: true,
    featured: false
  });

  // Enquiry Details Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState('');

  // Protect admin route
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  // Handle opening product modal
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      slug: '',
      description: '',
      longDescription: '',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      price: 1800,
      priceFormatted: 'Rs. 1,800',
      moq: 25,
      leadTime: '5 to 7 business days',
      badge: 'New',
      active: true,
      featured: false
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod: Product) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name,
      slug: prod.slug,
      description: prod.description,
      longDescription: prod.longDescription || '',
      category: prod.category,
      image: prod.image,
      price: prod.price || 0,
      priceFormatted: prod.priceFormatted,
      moq: prod.moq || 25,
      leadTime: prod.leadTime || '5 to 7 business days',
      badge: prod.badge || '',
      active: prod.active,
      featured: !!prod.featured
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = productForm.slug || productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const categoryName = categories.find((c) => c.slug === productForm.category)?.name || 'Corporate Gifting';

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        ...productForm,
        slug,
        categoryName,
        priceFormatted: `Rs. ${productForm.price.toLocaleString('en-IN')}`
      });
    } else {
      addProduct({
        ...productForm,
        slug,
        categoryName,
        priceFormatted: `Rs. ${productForm.price.toLocaleString('en-IN')}`,
        specifications: {
          'Origin': 'Artisanal Made in India',
          'Packaging': 'Luxury Gift Ready'
        },
        customizationOptions: ['Corporate Logo Debossing', 'Custom Sleeve'],
        active: productForm.active
      });
    }
    setIsProductModalOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Filtered Enquiries
  const filteredEnquiries = enquiries.filter((enq) => {
    if (statusFilter === 'all') return true;
    return enq.status === statusFilter;
  });

  // Calculate Metrics
  const totalEnquiriesCount = enquiries.length;
  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;
  const totalBoxesRequested = enquiries.reduce((acc, e) => acc + (e.numberOfBoxes || 0), 0);
  const activeProductsCount = products.filter((p) => p.active).length;

  return (
    <div className="min-h-screen bg-[#F7F2EC] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-[#141C33] text-[#F7F2EC] border-b border-[#A58266]/30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="TOHFA"
            className="w-9 h-9 rounded-full object-cover shadow-xs shrink-0"
          />
          <img
            src="/images/tohfa_wordmark.png"
            alt="TOHFA"
            className="h-6 w-auto object-contain brightness-0 invert opacity-90"
          />
          <span className="text-[10px] uppercase tracking-widest bg-[#501B25] px-2.5 py-1 font-semibold text-[#C7AC95]">
            Executive Dashboard
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden sm:block text-right">
            <p className="font-semibold text-[#F7F2EC]">{user?.name}</p>
            <p className="text-[10px] text-[#C7AC95]">{user?.email}</p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="text-xs bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#F7F2EC] px-3 py-1.5 transition-colors"
          >
            Public Site
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-xs bg-[#501B25] hover:bg-red-900 text-[#F7F2EC] px-3 py-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E4D7CB] overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'products'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'categories'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <FolderTree className="w-4 h-4" />
            <span>Categories (5)</span>
          </button>

          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'enquiries'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Gift Box Enquiries</span>
            {newEnquiriesCount > 0 && (
              <span className="bg-[#501B25] text-[#F7F2EC] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {newEnquiriesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'analytics'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'settings'
                ? 'border-[#501B25] text-[#501B25] bg-[#FAF7F2]'
                : 'border-transparent text-[#585656] hover:text-[#501B25]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#FAF7F2] p-5 border border-[#E4D7CB]">
                <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-semibold">Active Products</p>
                <p className="text-3xl font-serif font-bold text-[#501B25] mt-1">
                  {activeProductsCount}
                </p>
                <p className="text-[11px] text-[#585656] mt-1">Across 5 premium collections</p>
              </div>

              <div className="bg-[#FAF7F2] p-5 border border-[#E4D7CB]">
                <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-semibold">Total Enquiries</p>
                <p className="text-3xl font-serif font-bold text-[#141C33] mt-1">
                  {totalEnquiriesCount}
                </p>
                <p className="text-[11px] text-[#585656] mt-1">{newEnquiriesCount} requiring action</p>
              </div>

              <div className="bg-[#FAF7F2] p-5 border border-[#E4D7CB]">
                <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-semibold">Boxes Requested</p>
                <p className="text-3xl font-serif font-bold text-[#501B25] mt-1">
                  {totalBoxesRequested.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-[#585656] mt-1">Total volume pipeline</p>
              </div>

              <div className="bg-[#FAF7F2] p-5 border border-[#E4D7CB]">
                <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-semibold">Concierge SLA</p>
                <p className="text-3xl font-serif font-bold text-[#141C33] mt-1">
                  &lt; 2h
                </p>
                <p className="text-[11px] text-[#585656] mt-1">Average quote turnaround</p>
              </div>
            </div>

            {/* Recent Enquiries Table */}
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E4D7CB] pb-3">
                <h3 className="font-serif font-bold text-lg text-[#501B25]">
                  Recent Corporate Enquiries
                </h3>
                <button
                  onClick={() => setActiveTab('enquiries')}
                  className="text-xs text-[#501B25] hover:underline font-semibold"
                >
                  View All Enquiries &rarr;
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E4D7CB] text-[#A58266] uppercase text-[10px] tracking-wider">
                      <th className="py-2.5">Ref No.</th>
                      <th className="py-2.5">Client & Company</th>
                      <th className="py-2.5">Volume</th>
                      <th className="py-2.5">Target Date</th>
                      <th className="py-2.5">Status</th>
                      <th className="py-2.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4D7CB]/60">
                    {enquiries.slice(0, 5).map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#F7F2EC]">
                        <td className="py-3 font-semibold text-[#501B25]">
                          {enq.referenceNumber}
                        </td>
                        <td className="py-3">
                          <p className="font-semibold text-[#141C33]">{enq.customerName}</p>
                          <p className="text-[11px] text-[#585656]">{enq.company}</p>
                        </td>
                        <td className="py-3 font-semibold text-[#141C33]">
                          {enq.numberOfBoxes} units
                        </td>
                        <td className="py-3 text-[#585656]">
                          {enq.preferredDeliveryDate}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                              enq.status === 'New'
                                ? 'bg-amber-100 text-amber-900'
                                : enq.status === 'Quote Sent'
                                ? 'bg-blue-100 text-blue-900'
                                : enq.status === 'Completed'
                                ? 'bg-green-100 text-green-900'
                                : 'bg-[#E4D7CB] text-[#501B25]'
                            }`}
                          >
                            {enq.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => setSelectedEnquiry(enq)}
                            className="bg-[#501B25] text-[#F7F2EC] px-2.5 py-1 text-[11px] font-medium hover:bg-[#141C33]"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGER */}
        {activeTab === 'products' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#FAF7F2] p-4 border border-[#E4D7CB]">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search catalogue items by name..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] text-xs pl-9 pr-3 py-2 text-[#141C33] outline-none"
                />
              </div>

              <button
                onClick={handleOpenAddProduct}
                className="bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-4 py-2 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4 text-[#C7AC95]" />
                <span>Add New Product</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#E4D7CB]/40 border-b border-[#E4D7CB] text-[#A58266] uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-4">Item</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">MOQ</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4D7CB]/60">
                    {products
                      .filter((p) =>
                        productSearch
                          ? p.name.toLowerCase().includes(productSearch.toLowerCase())
                          : true
                      )
                      .map((p) => (
                        <tr key={p.id} className="hover:bg-[#F7F2EC]">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-10 h-10 object-cover bg-[#E4D7CB] shrink-0"
                              />
                              <div>
                                <p className="font-serif font-bold text-[#501B25] text-xs">{p.name}</p>
                                <p className="text-[10px] text-[#585656] line-clamp-1">{p.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-[11px] font-medium text-[#A58266] uppercase">
                            {p.categoryName || p.category}
                          </td>
                          <td className="py-3 px-4 font-semibold text-[#141C33]">
                            {p.priceFormatted}
                          </td>
                          <td className="py-3 px-4 text-[#585656]">
                            {p.moq} units
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => toggleProductActive(p.id)}
                              className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                p.active
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-stone-200 text-stone-600'
                              }`}
                            >
                              {p.active ? 'Active' : 'Inactive'}
                            </button>
                          </td>
                          <td className="py-3 px-4 text-right space-x-2">
                            <button
                              onClick={() => handleOpenEditProduct(p)}
                              className="text-[#501B25] hover:text-[#141C33] p-1 inline-block"
                              title="Edit Product"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Are you sure you want to remove "${p.name}"?`)) {
                                  deleteProduct(p.id);
                                }
                              }}
                              className="text-red-700 hover:text-red-900 p-1 inline-block"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORIES */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {categories.map((cat) => {
              const catCount = products.filter((p) => p.category === cat.slug).length;
              return (
                <div key={cat.id} className="bg-[#FAF7F2] border border-[#E4D7CB] overflow-hidden flex flex-col justify-between">
                  <div className="relative aspect-16/9 bg-[#E4D7CB]/40">
                    <img src={cat.coverImage} alt={cat.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-[#501B25] text-[#F7F2EC] text-[10px] uppercase font-bold px-2 py-0.5">
                      {catCount} Products
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#501B25]">{cat.name}</h3>
                    <p className="text-xs text-[#585656] leading-relaxed">{cat.description}</p>
                    <div className="pt-2 border-t border-[#E4D7CB] flex items-center justify-between text-xs">
                      <span className="text-[#A58266] uppercase text-[10px] font-semibold">Slug: {cat.slug}</span>
                      <button
                        onClick={() => navigate(`/catalogue/${cat.slug}`)}
                        className="text-[#501B25] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>View in Store</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 4: ENQUIRIES MANAGER */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4 animate-fade-in">
            {/* Filter by status */}
            <div className="flex items-center gap-2 bg-[#FAF7F2] p-3 border border-[#E4D7CB] overflow-x-auto">
              <span className="text-xs font-semibold text-[#501B25] uppercase tracking-wider mr-2">
                Status:
              </span>
              {['all', 'New', 'Contacted', 'Quote Sent', 'Completed', 'Archived'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold transition-colors border ${
                    statusFilter === st
                      ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                      : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Enquiries Table */}
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#E4D7CB]/40 border-b border-[#E4D7CB] text-[#A58266] uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-4">Enquiry Ref</th>
                      <th className="py-3 px-4">Customer & Company</th>
                      <th className="py-3 px-4">Contact Info</th>
                      <th className="py-3 px-4">Volume & Est Value</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4D7CB]/60">
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#F7F2EC]">
                        <td className="py-3 px-4 font-serif font-bold text-[#501B25]">
                          {enq.referenceNumber}
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-bold text-[#141C33]">{enq.customerName}</p>
                          <p className="text-[11px] text-[#A58266]">{enq.company}</p>
                        </td>
                        <td className="py-3 px-4 text-[#585656]">
                          <p>{enq.email}</p>
                          <p className="text-[11px]">{enq.phone}</p>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-bold text-[#141C33]">{enq.numberOfBoxes} Boxes</p>
                          <p className="text-[11px] text-[#585656]">{enq.estimatedValue || 'Custom Quote'}</p>
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={enq.status}
                            onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                            className="bg-[#F7F2EC] border border-[#E4D7CB] text-[11px] font-medium px-2 py-1 outline-none text-[#501B25]"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Quote Sent">Quote Sent</option>
                            <option value="Completed">Completed</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => setSelectedEnquiry(enq)}
                            className="bg-[#501B25] text-[#F7F2EC] px-3 py-1 text-xs font-semibold hover:bg-[#141C33]"
                          >
                            Inspect Box
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB] space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#501B25]">
                Category Share & Catalogue Distribution
              </h3>
              <div className="space-y-3 text-xs">
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.slug).length;
                  const pct = Math.round((count / products.length) * 100) || 0;
                  return (
                    <div key={cat.id} className="space-y-1">
                      <div className="flex justify-between font-medium">
                        <span className="text-[#141C33]">{cat.name}</span>
                        <span className="text-[#A58266]">{count} products ({pct}%)</span>
                      </div>
                      <div className="w-full bg-[#E4D7CB] h-2">
                        <div
                          className="bg-[#501B25] h-2 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB] space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#501B25]">
                Corporate Order Pipeline Summary
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#E4D7CB]">
                  <span className="text-[#585656]">Total Enquiries Processed:</span>
                  <span className="font-bold text-[#141C33]">{totalEnquiriesCount}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E4D7CB]">
                  <span className="text-[#585656]">Total Boxes Requested:</span>
                  <span className="font-bold text-[#141C33]">{totalBoxesRequested} units</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E4D7CB]">
                  <span className="text-[#585656]">Average Box Quantity per Order:</span>
                  <span className="font-bold text-[#141C33]">
                    {totalEnquiriesCount > 0 ? Math.round(totalBoxesRequested / totalEnquiriesCount) : 0} units
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E4D7CB]">
                  <span className="text-[#585656]">Most Popular Packaging:</span>
                  <span className="font-bold text-[#501B25]">Deep Burgundy Velvet Presentation Box</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB] max-w-2xl space-y-4 animate-fade-in text-xs">
            <h3 className="font-serif font-bold text-xl text-[#501B25]">
              Corporate System Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Corporate Concierge Notification Email
                </label>
                <input
                  type="email"
                  defaultValue="thetohfagifting.co@gmail.com"
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Default Currency Display
                </label>
                <input
                  type="text"
                  defaultValue="INR (Rs.)"
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Default Dispatch SLA Notice
                </label>
                <input
                  type="text"
                  defaultValue="5 to 7 business days from artwork signoff"
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <button
                onClick={() => alert('Settings updated successfully.')}
                className="bg-[#501B25] text-[#F7F2EC] px-4 py-2 font-semibold uppercase tracking-wider text-xs"
              >
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>

      {/* PRODUCT ADD/EDIT MODAL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#141C33]/60 backdrop-blur-xs"
            onClick={() => setIsProductModalOpen(false)}
          />
          <div className="relative bg-[#FAF7F2] border border-[#A58266]/40 shadow-2xl max-w-xl w-full p-6 space-y-4 z-10 animate-fade-in my-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4D7CB]">
              <h3 className="font-serif font-bold text-xl text-[#501B25]">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button onClick={() => setIsProductModalOpen(false)} className="p-1 text-[#501B25]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Category *
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as CategorySlug })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                  >
                    <option value="corporate">Corporate Gifting</option>
                    <option value="festive">Festive Gifting</option>
                    <option value="edible">Edible Gifting</option>
                    <option value="merchandise">Customizable Merchandise</option>
                    <option value="gadgets">Gadget Gifting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Price (INR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: parseInt(e.target.value) || 0 })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Image URL *
                </label>
                <input
                  type="url"
                  required
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                  Short Description *
                </label>
                <textarea
                  rows={2}
                  required
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    MOQ (Units)
                  </label>
                  <input
                    type="number"
                    value={productForm.moq}
                    onChange={(e) => setProductForm({ ...productForm, moq: parseInt(e.target.value) || 1 })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Badge / Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bestseller, Signature"
                    value={productForm.badge}
                    onChange={(e) => setProductForm({ ...productForm, badge: e.target.value })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] p-2 text-[#141C33]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.active}
                    onChange={(e) => setProductForm({ ...productForm, active: e.target.checked })}
                    className="accent-[#501B25]"
                  />
                  <span>Active in Catalogue</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                    className="accent-[#501B25]"
                  />
                  <span>Featured on Homepage</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#E4D7CB]">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 border border-[#E4D7CB] text-[#585656]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#501B25] text-[#F7F2EC] px-5 py-2 font-semibold uppercase tracking-wider text-xs"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ENQUIRY DETAILS INSPECT MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#141C33]/60 backdrop-blur-xs"
            onClick={() => setSelectedEnquiry(null)}
          />
          <div className="relative bg-[#FAF7F2] border border-[#A58266]/40 shadow-2xl max-w-2xl w-full p-6 space-y-4 z-10 animate-fade-in my-auto max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4D7CB]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A58266] font-semibold">
                  Enquiry Record
                </span>
                <h3 className="font-serif font-bold text-xl text-[#501B25]">
                  {selectedEnquiry.referenceNumber}
                </h3>
              </div>
              <button onClick={() => setSelectedEnquiry(null)} className="p-1 text-[#501B25]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-[#F7F2EC] p-3.5 border border-[#E4D7CB]">
              <div>
                <span className="text-[#585656]/70">Client:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.customerName}</p>
              </div>
              <div>
                <span className="text-[#585656]/70">Company:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.company}</p>
              </div>
              <div>
                <span className="text-[#585656]/70">Email:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.email}</p>
              </div>
              <div>
                <span className="text-[#585656]/70">Phone:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.phone}</p>
              </div>
              <div>
                <span className="text-[#585656]/70">Volume:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.numberOfBoxes} Boxes</p>
              </div>
              <div>
                <span className="text-[#585656]/70">Target Date:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.preferredDeliveryDate}</p>
              </div>
              <div className="col-span-2">
                <span className="text-[#585656]/70">Delivery Location:</span>
                <p className="font-bold text-[#141C33]">{selectedEnquiry.deliveryLocation}</p>
              </div>
            </div>

            {/* Attached products */}
            <div className="space-y-2 text-xs">
              <p className="font-semibold text-[#501B25] uppercase tracking-wider text-[11px]">
                Selected Products Inside Box ({selectedEnquiry.selectedProducts.length} items):
              </p>
              <div className="border border-[#E4D7CB] divide-y divide-[#E4D7CB]">
                {selectedEnquiry.selectedProducts.map((p, i) => (
                  <div key={i} className="p-2.5 flex items-center justify-between gap-3 bg-[#F7F2EC]">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.productName} className="w-10 h-10 object-cover" />
                      <div>
                        <p className="font-serif font-bold text-[#501B25]">{p.productName}</p>
                        <p className="text-[10px] text-[#A58266]">{p.category}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#141C33]">Qty: {p.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging Style */}
            {selectedEnquiry.boxStyle && (
              <div className="p-3 bg-[#F7F2EC] border border-[#E4D7CB] text-xs">
                <span className="text-[#585656]/70 block mb-0.5">Presentation Packaging:</span>
                <p className="font-semibold text-[#501B25]">{selectedEnquiry.boxStyle}</p>
              </div>
            )}

            {/* Branding Notes */}
            {selectedEnquiry.additionalRequirements && (
              <div className="p-3 bg-[#F7F2EC] border border-[#E4D7CB] text-xs">
                <span className="text-[#585656]/70 block mb-0.5">Customer Branding Instructions:</span>
                <p className="text-[#141C33]">{selectedEnquiry.additionalRequirements}</p>
              </div>
            )}

            {/* Status update */}
            <div className="pt-2 border-t border-[#E4D7CB] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#501B25]">Update Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => {
                    const nextStatus = e.target.value as EnquiryStatus;
                    updateEnquiryStatus(selectedEnquiry.id, nextStatus);
                    setSelectedEnquiry({ ...selectedEnquiry, status: nextStatus });
                  }}
                  className="bg-[#F7F2EC] border border-[#E4D7CB] p-1.5 font-semibold text-[#501B25]"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Quote Sent">Quote Sent</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="bg-[#501B25] text-[#F7F2EC] px-4 py-1.5 uppercase tracking-wider text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};