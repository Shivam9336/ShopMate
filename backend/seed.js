const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shopmate.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Leather Analog Wristwatch',
        description: 'A timeless everyday watch with a clean dial and comfortable leather strap.',
        price: 129.99,
        category: 'Accessories',
        stock: 22,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.6,
        numReviews: 37
      },
      {
        name: 'Compact Travel Backpack',
        description: 'A lightweight backpack with practical storage for commutes and weekend trips.',
        price: 64.50,
        category: 'Accessories',
        stock: 40,
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.4,
        numReviews: 31
      },
      {
        name: 'Ceramic Table Lamp',
        description: 'A warm, understated accent light for a bedside table or reading nook.',
        price: 79.00,
        category: 'Home',
        stock: 18,
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.3,
        numReviews: 16
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'A reusable insulated bottle that keeps drinks cold or hot on the go.',
        price: 28.99,
        category: 'Accessories',
        stock: 65,
        imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.7,
        numReviews: 53
      },
      {
        name: 'Classic Aviator Sunglasses',
        description: 'Lightweight sunglasses with a versatile frame for everyday wear.',
        price: 54.00,
        category: 'Accessories',
        stock: 27,
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.1,
        numReviews: 19
      },
      {
        name: 'Modern Ceramic Planter',
        description: 'A simple decorative planter that brings a touch of greenery to your space.',
        price: 34.99,
        category: 'Home',
        stock: 33,
        imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 28
      },
      {
        name: 'Portable Bluetooth Speaker',
        description: 'A compact wireless speaker with clear sound for home and outdoor listening.',
        price: 89.99,
        category: 'Electronics',
        stock: 24,
        imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.6,
        numReviews: 42
      },
      {
        name: 'Soft Knit Throw Blanket',
        description: 'A cozy textured throw blanket for relaxing on the sofa or adding warmth to a bedroom.',
        price: 48.50,
        category: 'Home',
        stock: 29,
        imageUrl: 'https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.4,
        numReviews: 21
      },
      {
        name: 'Everyday Canvas Tote Bag',
        description: 'A durable reusable tote with room for daily essentials, books, or groceries.',
        price: 22.00,
        category: 'Accessories',
        stock: 45,
        imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 17
      },
      {
        name: 'Polarized Sport Sunglasses',
        description: 'Lightweight polarized sunglasses designed for comfortable outdoor activities.',
        price: 39.95,
        category: 'Accessories',
        stock: 36,
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.3,
        numReviews: 26
      }
    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
