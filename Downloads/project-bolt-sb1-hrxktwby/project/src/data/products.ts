export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
}

export const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Books',
  'Sports',
  'Toys',
  'Beauty',
  'Automotive',
  'Health',
  'Kitchen'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    rating: 4.5,
    reviewCount: 324,
    inStock: true,
    features: ['Noise Cancellation', '30-hour Battery', 'Wireless Charging', 'Premium Sound Quality']
  },
  {
    id: '2',
    name: 'Smartphone Pro Max',
    price: 999.99,
    originalPrice: 1199.99,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Latest flagship smartphone with advanced camera system and lightning-fast performance.',
    rating: 4.8,
    reviewCount: 1250,
    inStock: true,
    features: ['Triple Camera System', '5G Ready', 'Face ID', '256GB Storage']
  },
  {
    id: '3',
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    description: 'Comfortable 100% cotton t-shirt available in multiple colors and sizes.',
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    features: ['100% Cotton', 'Machine Washable', 'Multiple Colors', 'Comfortable Fit']
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '5',
    name: 'Modern Coffee Maker',
    price: 129.99,
    originalPrice: 169.99,
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Kitchen',
    description: 'Programmable coffee maker with thermal carafe and auto-brew feature.',
    rating: 4.4,
    reviewCount: 234,
    inStock: true,
    features: ['Programmable', 'Thermal Carafe', 'Auto Shut-off', '12-cup Capacity']
  },
  {
    id: '6',
    name: 'Bestselling Novel',
    price: 14.99,
    originalPrice: 19.99,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    description: 'Award-winning fiction novel that topped bestseller lists worldwide.',
    rating: 4.7,
    reviewCount: 1823,
    inStock: true,
    features: ['Bestseller', 'Award Winner', 'Paperback', 'New Release']
  },
  {
    id: '7',
    name: 'Professional Running Shoes',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    description: 'High-performance running shoes with advanced cushioning and support.',
    rating: 4.5,
    reviewCount: 445,
    inStock: true,
    features: ['Advanced Cushioning', 'Breathable Material', 'Durable Sole', 'Lightweight']
  },
  {
    id: '8',
    name: 'Luxury Skincare Set',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    description: 'Complete skincare routine with moisturizer, cleanser, and serum.',
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    features: ['Natural Ingredients', 'Anti-aging', 'Dermatologist Tested', 'Complete Set']
  },
  {
    id: '9',
    name: 'Gaming Laptop',
    price: 1299.99,
    originalPrice: 1599.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'High-performance gaming laptop with RTX graphics and fast processor.',
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    features: ['RTX Graphics', '16GB RAM', 'SSD Storage', 'RGB Keyboard']
  },
  {
    id: '10',
    name: 'Denim Jeans',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    description: 'Classic fit denim jeans made from premium cotton blend.',
    rating: 4.1,
    reviewCount: 234,
    inStock: true,
    features: ['Premium Denim', 'Classic Fit', 'Multiple Sizes', 'Durable']
  },
  {
    id: '11',
    name: 'Wireless Mouse',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    features: ['Wireless', 'Ergonomic Design', 'Long Battery', 'Precision Tracking']
  },
  {
    id: '12',
    name: 'Indoor Plant Pot',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    description: 'Decorative ceramic plant pot perfect for indoor plants and herbs.',
    rating: 4.2,
    reviewCount: 123,
    inStock: true,
    features: ['Ceramic Material', 'Drainage Holes', 'Decorative Design', 'Multiple Sizes']
  },
  {
    id: '13',
    name: 'Yoga Mat',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    description: 'Non-slip yoga mat with extra cushioning for comfortable workouts.',
    rating: 4.6,
    reviewCount: 789,
    inStock: true,
    features: ['Non-slip Surface', 'Extra Cushioning', 'Eco-friendly', 'Portable']
  },
  {
    id: '14',
    name: 'Kids Building Blocks',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys',
    description: 'Educational building blocks set for creative play and learning.',
    rating: 4.8,
    reviewCount: 456,
    inStock: true,
    features: ['Educational', 'Safe Materials', 'Creative Play', '100+ Pieces']
  },
  {
    id: '15',
    name: 'Car Phone Mount',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automotive',
    description: 'Universal car phone mount with 360-degree rotation and secure grip.',
    rating: 4.3,
    reviewCount: 234,
    inStock: true,
    features: ['360° Rotation', 'Universal Fit', 'Secure Grip', 'Easy Installation']
  },
  {
    id: '16',
    name: 'Vitamin D Supplements',
    price: 19.99,
    originalPrice: 24.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health',
    description: 'High-quality vitamin D3 supplements for bone and immune health.',
    rating: 4.5,
    reviewCount: 678,
    inStock: true,
    features: ['High Potency', '90 Capsules', 'Third-party Tested', 'Non-GMO']
  },
  {
    id: '17',
    name: 'Stainless Steel Water Bottle',
    price: 27.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Kitchen',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.',
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    features: ['24hr Cold', 'BPA Free', 'Leak Proof', '32oz Capacity']
  },
  {
    id: '18',
    name: 'Makeup Brush Set',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    description: 'Professional makeup brush set with synthetic bristles and storage case.',
    rating: 4.4,
    reviewCount: 345,
    inStock: true,
    features: ['Synthetic Bristles', '12 Brushes', 'Storage Case', 'Professional Quality']
  },
  {
    id: '19',
    name: 'Bluetooth Speaker',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    features: ['360° Sound', 'Waterproof', '12hr Battery', 'Portable Design']
  },
  {
    id: '20',
    name: 'Winter Jacket',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    description: 'Warm winter jacket with insulation and water-resistant exterior.',
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    features: ['Insulated', 'Water Resistant', 'Multiple Pockets', 'Adjustable Hood']
  },
  {
    id: '21',
    name: 'LED Desk Lamp',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    description: 'Adjustable LED desk lamp with touch controls and USB charging port.',
    rating: 4.3,
    reviewCount: 456,
    inStock: true,
    features: ['Touch Controls', 'USB Charging', 'Adjustable', 'Energy Efficient']
  },
  {
    id: '22',
    name: 'Cookbook Collection',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    description: 'Collection of 3 bestselling cookbooks with over 300 recipes.',
    rating: 4.7,
    reviewCount: 789,
    inStock: true,
    features: ['3 Books', '300+ Recipes', 'Step-by-step', 'Full Color Photos']
  },
  {
    id: '23',
    name: 'Tennis Racket',
    price: 119.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    description: 'Professional tennis racket with carbon fiber frame and comfortable grip.',
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    features: ['Carbon Fiber', 'Professional Grade', 'Comfortable Grip', 'Lightweight']
  },
  {
    id: '24',
    name: 'Remote Control Car',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys',
    description: 'High-speed remote control car with rechargeable battery and LED lights.',
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    features: ['High Speed', 'Rechargeable', 'LED Lights', '2.4GHz Remote']
  }
];

export const featuredProducts = products.slice(0, 4);
export const trendingProducts = products.slice(8, 12);