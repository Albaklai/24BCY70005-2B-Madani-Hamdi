export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'electronics';
  image: string;
  description: string;
  stock: number;
}

export const products: Product[] = [
  // Clothing
  {
    id: 'cloth-1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    category: 'clothing',
    image: '👔',
    description: 'Comfortable and versatile white t-shirt for everyday wear',
    stock: 50,
  },
  {
    id: 'cloth-2',
    name: 'Blue Denim Jeans',
    price: 59.99,
    category: 'clothing',
    image: '👖',
    description: 'Premium denim jeans with perfect fit',
    stock: 35,
  },
  {
    id: 'cloth-3',
    name: 'Black Leather Jacket',
    price: 149.99,
    category: 'clothing',
    image: '🧥',
    description: 'Stylish black leather jacket for a classic look',
    stock: 20,
  },
  {
    id: 'cloth-4',
    name: 'Summer Dress',
    price: 49.99,
    category: 'clothing',
    image: '👗',
    description: 'Lightweight summer dress perfect for warm weather',
    stock: 45,
  },
  {
    id: 'cloth-5',
    name: 'Sports Hoodie',
    price: 69.99,
    category: 'clothing',
    image: '🧦',
    description: 'Comfortable hoodie for sports and casual wear',
    stock: 40,
  },
  
  // Electronics
  {
    id: 'elec-1',
    name: 'Wireless Headphones',
    price: 89.99,
    category: 'electronics',
    image: '🎧',
    description: 'High-quality wireless headphones with noise cancellation',
    stock: 25,
  },
  {
    id: 'elec-2',
    name: 'Smartphone',
    price: 799.99,
    category: 'electronics',
    image: '📱',
    description: 'Latest smartphone with advanced camera and processor',
    stock: 15,
  },
  {
    id: 'elec-3',
    name: 'Laptop',
    price: 1299.99,
    category: 'electronics',
    image: '💻',
    description: 'Powerful laptop for work and entertainment',
    stock: 10,
  },
  {
    id: 'elec-4',
    name: 'Smartwatch',
    price: 299.99,
    category: 'electronics',
    image: '⌚',
    description: 'Advanced smartwatch with fitness tracking',
    stock: 30,
  },
  {
    id: 'elec-5',
    name: 'Wireless Charger',
    price: 49.99,
    category: 'electronics',
    image: '🔌',
    description: 'Fast wireless charging pad for your devices',
    stock: 60,
  },
  {
    id: 'elec-6',
    name: 'Portable Speaker',
    price: 129.99,
    category: 'electronics',
    image: '🔊',
    description: 'Portable Bluetooth speaker with excellent sound quality',
    stock: 40,
  },
];
