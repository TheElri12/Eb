// Mock data for Elias Richter's Birthday Wishlist

export const wishlistItems = [
  {
    id: '1',
    title: 'Professional Camera Lens',
    description: 'Canon EF 50mm f/1.8 STM Lens for portrait photography',
    category: 'Photography',
    priority: 'High',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
    added: '2025-01-08',
    purchased: false
  },
  {
    id: '2',
    title: 'Mechanical Keyboard',
    description: 'Keychron K2 Wireless Mechanical Keyboard with RGB backlight',
    category: 'Technology',
    priority: 'Medium',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
    added: '2025-01-07',
    purchased: false
  },
  {
    id: '3',
    title: 'Premium Coffee Beans',
    description: 'Single Origin Ethiopian Coffee Beans - Light Roast',
    category: 'Food & Drinks',
    priority: 'Low',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    added: '2025-01-06',
    purchased: true
  },
  {
    id: '4',
    title: 'Noise-Cancelling Headphones',
    description: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    category: 'Technology',
    priority: 'High',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    added: '2025-01-05',
    purchased: false
  },
  {
    id: '5',
    title: 'Plant Care Kit',
    description: 'Complete indoor plant care set with tools and fertilizers',
    category: 'Lifestyle',
    priority: 'Medium',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    added: '2025-01-04',
    purchased: false
  }
];

export const categories = [
  'All Categories',
  'Technology',
  'Photography', 
  'Food & Drinks',
  'Lifestyle',
  'Books',
  'Sports',
  'Travel'
];

export const priorities = ['High', 'Medium', 'Low'];