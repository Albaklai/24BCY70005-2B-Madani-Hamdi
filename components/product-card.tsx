'use client';

import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isInStock = product.stock > 0;
  const stockStatus = isInStock ? '✓ In Stock' : '✕ Out of Stock';
  const stockColor = isInStock ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        <span className="text-7xl drop-shadow-lg">{product.image}</span>
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold ${stockColor}`}>
          {stockStatus}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge 
            variant="secondary"
            className="w-fit capitalize"
          >
            {product.category === 'clothing' ? '👕 Clothing' : '⚡ Electronics'}
          </Badge>
          <Badge className={`${isInStock ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500'}`}>
            {product.stock} {product.stock === 1 ? 'item' : 'items'} left
          </Badge>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2 border-t dark:border-slate-700">
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per item</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border-none bg-transparent text-gray-900 dark:text-gray-100"
            />
            <button
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              +
            </button>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full"
          variant={isAdded ? 'default' : 'default'}
        >
          {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </Card>
  );
}
