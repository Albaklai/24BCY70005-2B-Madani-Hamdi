'use client';

import { useState } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { CartSidebar } from '@/components/cart-sidebar';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'clothing' | 'electronics'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur dark:bg-slate-950/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                🛍️ Store Hub
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clothes & Electronics
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </Button>
              <Button
                variant={selectedCategory === 'clothing' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('clothing')}
              >
                👕 Clothing
              </Button>
              <Button
                variant={selectedCategory === 'electronics' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('electronics')}
              >
                ⚡ Electronics
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              No products found
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}
