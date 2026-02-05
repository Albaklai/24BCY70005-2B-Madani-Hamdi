'use client';

import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

export function CartSidebar() {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center text-xl font-bold z-40"
      >
        🛒
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white dark:bg-slate-900 shadow-xl z-40 flex flex-col">
            <div className="p-4 border-b dark:border-slate-700 flex items-center justify-between">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-400 py-8">
                  Your cart is empty
                </p>
              ) : (
                items.map((item) => (
                  <Card key={item.product.id} className="p-3">
                    <div className="flex gap-3">
                      <div className="text-4xl">{item.product.image}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          ${item.product.price.toFixed(2)} each
                        </p>
                        <div className="flex gap-2 items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-slate-700"
                          >
                            −
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-slate-700"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto px-2 py-1 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="font-semibold text-sm mt-2">
                          Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t dark:border-slate-700 p-4 space-y-3">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-indigo-600 dark:text-indigo-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
