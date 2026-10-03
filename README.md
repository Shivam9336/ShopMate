<div align="center">

# 🛍️ ShopMate

**A full-stack MERN e-commerce platform with a customer storefront, Razorpay payments, and a complete admin dashboard.**

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?logo=razorpay&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)

</div>

<!--
  Tip: add a screenshot or GIF here once you have one, e.g.
  ![ShopMate preview](docs/preview.png)
-->

---

## 📑 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Demo Admin Account](#-demo-admin-account)
- [Application Routes](#-application-routes)
- [API Overview](#-api-overview)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Security Notes](#-security-notes)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About

ShopMate is a demo e-commerce application built on the MERN stack. Customers can browse and search products, fill a cart, check out with Razorpay (or a demo checkout), and track their orders. Admins get a dashboard to manage products, orders, and users, and to view store statistics.

It's a good reference project for learning how a production-style MERN app fits together: JWT authentication, role-based authorization, image uploads, payment verification, and a Redux-powered cart.

---

## ✨ Features

### 🛒 Customers
- Responsive storefront with home, shop, and product detail pages
- Product search by name
- Shopping cart and checkout flow
- Registration, login, and profile
- Order history and order confirmation page
- Razorpay payments, plus a demo checkout option
- Informational pages: About, Return Policy, Disclaimer

### 🔧 Admins
- Dashboard with order, product, user, and revenue statistics
- Create, edit, and delete products
- Product image uploads via Cloudinary
- View all orders and update order status
- User directory

### ⚙️ Platform
- JWT authentication with bcrypt password hashing
- Role-based route protection (customer vs. admin)
- Transactional email support via Nodemailer
- Seed script for a demo admin and sample products

---

## 🧰 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React, React Router, Redux Toolkit, Create React App |
| **Backend** | Node.js, Express |
| **Database** | MongoDB, Mongoose |
| **Auth** | JSON Web Tokens, bcryptjs |
| **Uploads** | Multer, Cloudinary |
| **Payments** | Razorpay |
| **Email** | Nodemailer (Gmail SMTP) |
| **Dev tooling** | Nodemon, concurrently |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A [Cloudinary](https://cloudinary.com/) account (for product image uploads)
- [Razorpay](https://razorpay.com/) test credentials (for the payment integration)
- Gmail SMTP credentials (only if you need email features)

### 1. Clone the repository

```bash
git clone https://github.com/Shivam9336/ShopMate.git
cd ShopMate
```

### 2. Install dependencies

```bash
npm run install-all
```

This installs dependencies for the root project, `backend/`, and `frontend/`.

### 3. Configure environment variables

Create `backend/.env` using the table in the [next section](#-environment-variables).

### 4. (Optional) Seed demo data

> ⚠️ **Destructive:** this deletes all existing `User` and `Product` records in the configured database. Only run it against a disposable development database.

```bash
npm run seed
```

### 5. Start the app

```bash
npm run dev
```

| Service | URL |
| --- | --- |
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |

During development, the frontend proxies API requests to `http://localhost:5000`.

---

## 🔐 Environment Variables

Create a file at `backend/.env`:

```env
# Server
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
MONGO_URI=your_mongodb_connection_string

# Auth
JWT_SECRET=your_long_random_jwt_secret

# Cloudinary (product images)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay (payments)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email (optional)
GMAIL_USER=your_email_address
GMAIL_PASS=your_email_app_password
```

| Variable | Required | Purpose |
| --- | :---: | --- |
| `MONGO_URI` | ✅ | MongoDB connection string |
| `JWT_SECRET` | ✅ | Secret used to sign auth tokens |
| `PORT` | – | Backend port (default `5000`) |
| `FRONTEND_URL` | – | Allowed frontend origin |
| `CLOUDINARY_*` | For image uploads | Admin product image uploads |
| `RAZORPAY_*` | For payments | Creating and verifying payments |
| `GMAIL_USER`, `GMAIL_PASS` | For email | Nodemailer SMTP (use an app password) |

> Never commit `.env` files. Use test credentials while developing.

---

## 📜 Scripts

Run these from the repository root:

| Command | Description |
| --- | --- |
| `npm run install-all` | Install root, backend, and frontend dependencies |
| `npm run dev` | Run frontend and backend together |
| `npm run start:backend` | Run the backend with Nodemon |
| `npm run start:frontend` | Run the frontend dev server |
| `npm run build` | Build the frontend for production |
| `npm start` | Start the backend only |
| `npm run seed` | Replace users and products with demo seed data ⚠️ |

From `frontend/`, the standard Create React App scripts are also available:

```bash
npm start
npm run build
npm test
```

> The backend does not currently have an automated test suite.

---

## 👤 Demo Admin Account

The seed script creates a local/demo administrator:

| Field | Value |
| --- | --- |
| Email | `admin@shopmate.com` |
| Password | `admin` |

> ⚠️ These credentials are public. Use them only locally or in a disposable demo environment, and change or remove them before any public deployment.

---

## 🗺️ Application Routes

### Customer

| Path | Description |
| --- | --- |
| `/` | Home and featured products |
| `/shop` | Product catalog and search |
| `/product/:id` | Product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |
| `/login` | Login |
| `/register` | Registration |
| `/profile` | Profile and order history |
| `/ordersuccess` | Order confirmation |
| `/about` | About |
| `/return` | Return policy |
| `/disclaimer` | Disclaimer |

### Admin

| Path | Description |
| --- | --- |
| `/admin` | Dashboard |
| `/admin/add-product` | Add a product |
| `/admin/products` | Manage products |
| `/admin/edit-product/:id` | Edit a product |
| `/admin/orders` | Manage orders |
| `/admin/users` | User directory |

---

## 🔌 API Overview

| Route group | Purpose |
| --- | --- |
| `/api/auth` | Registration and login; admin user listing |
| `/api/products` | List and retrieve products; admin product management |
| `/api/orders` | Create orders, fetch customer orders; admin order management |
| `/api/payment` | Create Razorpay orders and verify payments |
| `/api/analytics` | Admin dashboard statistics |

Protected routes require a valid JWT. Admin operations additionally require an admin account.

---

## 🗂️ Project Structure

```text
ShopMate/
├── backend/
│   ├── config/          # MongoDB and Cloudinary configuration
│   ├── controllers/     # API request handlers
│   ├── middleware/      # Authentication and admin authorization
│   ├── models/          # Mongoose models
│   ├── routes/          # Express API routes
│   ├── utils/           # Shared utilities (e.g. email)
│   ├── seed.js          # Demo admin and product seed data
│   └── server.js        # Backend entry point
└── frontend/
    ├── public/
    └── src/
        ├── admin/       # Admin pages
        ├── components/  # Shared UI components
        ├── context/     # Authentication context
        ├── pages/       # Customer-facing pages
        ├── redux/       # Store and cart state
        └── styles/      # CSS styles
```

---

## 🌐 Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```
   The output is written to `frontend/build/`.
2. Set `NODE_ENV=production` in your hosting environment. In production mode, the backend serves the built frontend.
3. Provide all required environment variables in your host's settings (not in committed files).
4. Start the server:
   ```bash
   npm start
   ```

Before going live: use a production database, switch to live Razorpay keys, and replace the demo admin credentials.

---

## 🔒 Security Notes

- Never commit `.env` files, API keys, database credentials, or real user data.
- The seeded admin credentials are public demo credentials and are **not** suitable for production.
- `npm run seed` is destructive to existing users and products. Never run it against production.
- Use a separate development database and test payment credentials while developing.

---

## 🧭 Roadmap

Ideas for future improvements:

- [ ] Automated tests for the backend and frontend
- [ ] Product categories, filters, and sorting
- [ ] Reviews and ratings
- [ ] Wishlist
- [ ] Pagination on shop and admin lists
- [ ] Order confirmation and status-update emails
- [ ] Password reset flow

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 👨‍💻 Author

**Shivam** · [@Shivam9336](https://github.com/Shivam9336)

If you found this project useful, consider giving it a ⭐ on [GitHub](https://github.com/Shivam9336/ShopMate).