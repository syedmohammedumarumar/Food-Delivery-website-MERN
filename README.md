# 🍕 Food Delivery Platform - MERN Stack Application

> A full-stack food delivery web application with user ordering, admin management, and payment integration.

## 🌐 Live Links (Try It Now!)

| Platform | Live Link |
|----------|-----------|
| 🛒 **Customer Frontend** | [https://food-del-frontend-4tz5.onrender.com/](https://food-del-frontend-4tz5.onrender.com/) |
| 📊 **Admin Dashboard** | [https://food-del-admin-ssn3.onrender.com/](https://food-del-admin-ssn3.onrender.com/) |

---

## 📋 Project Overview

A comprehensive food delivery platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects customers with food vendors. The system includes a customer-facing frontend for browsing and ordering food, an admin panel for managing inventory and orders, and a robust backend API with payment processing capabilities.

---

## ✨ Key Features

### 👥 **Customer Features**
- **User Authentication** - Secure signup/login with JWT authentication
- **Browse Food Menu** - Explore categorized food items with images and descriptions
- **Shopping Cart** - Add/remove items with real-time cart updates
- **Advanced Search & Filter** - Filter food by category and price
- **Place Orders** - Seamless checkout process
- **Payment Integration** - Stripe integration for secure payments
- **Order Tracking** - View order history and current order status
- **Order Verification** - Email verification for placed orders
- **Responsive Design** - Optimized for desktop and mobile devices

### 🛠️ **Admin Panel Features**
- **Food Management** - Add, update, and delete food items
- **Image Upload** - Upload food images directly to server
- **Order Management** - View and manage all customer orders
- **Order Status Updates** - Update order status (processing, out for delivery, delivered)
- **Analytics Dashboard** - Real-time order and sales data
- **Inventory Control** - Track available food items
- **Toast Notifications** - Real-time feedback for user actions

### 🔧 **Technical Features**
- **RESTful API** - Clean and organized API endpoints
- **Database Security** - Encrypted passwords with bcrypt
- **CORS Enabled** - Secure cross-origin requests
- **File Upload** - Multer integration for image uploads
- **Error Handling** - Comprehensive error management
- **Environment Configuration** - Secure configuration with dotenv

---

## 🏗️ Architecture & Tech Stack

### **Frontend (Customer & Admin)**
- **React 18.3** - UI library with hooks
- **React Router DOM 7.1** - Client-side routing
- **Vite 6.0** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **CSS3** - Custom styling and responsive design
- **ESLint** - Code quality and linting

### **Backend**
- **Node.js & Express.js 4.21** - Server and API framework
- **MongoDB & Mongoose 8.9** - NoSQL database and ODM
- **JWT (jsonwebtoken 9.0)** - Authentication & authorization
- **Bcrypt 5.1** - Password encryption
- **Stripe 17.5** - Payment processing
- **Multer 1.4** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request parsing middleware
- **Nodemon** - Development server with auto-reload
- **Dotenv** - Environment variable management

### **Deployment**
- **Frontend** - Deployed on Render.com (optimized builds)
- **Admin Panel** - Deployed on Render.com
- **Backend** - Deployed on Render.com
- **Database** - MongoDB Cloud Atlas

---

## 📁 Project Structure

```
food-delivery-website/
├── frontend/                 # Customer-facing React app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar/      # Navigation bar
│   │   │   ├── LoginPopup/  # Authentication modal
│   │   │   ├── FoodDisplay/ # Food items listing
│   │   │   ├── Cart/        # Shopping cart component
│   │   │   ├── Footer/      # Footer component
│   │   │   └── AppDownload/ # App promotion
│   │   ├── pages/           # Page components
│   │   │   ├── Home/        # Landing page
│   │   │   ├── Cart/        # Cart page
│   │   │   ├── PlaceOrder/  # Checkout page
│   │   │   ├── Verify/      # Payment verification
│   │   │   └── MyOrders/    # Order history
│   │   ├── context/         # React Context for state management
│   │   ├── App.jsx          # Main app component
│   │   └── index.css        # Global styles
│   └── package.json
│
├── admin/                    # Admin dashboard React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/      # Admin navigation
│   │   │   └── Sidebar/     # Navigation sidebar
│   │   ├── pages/           # Admin pages
│   │   │   ├── Add/         # Add new food item
│   │   │   ├── List/        # List all food items
│   │   │   └── Orders/      # Manage orders
│   │   └── App.jsx
│   └── package.json
│
├── backend/                  # Node.js Express API
│   ├── config/
│   │   └── db.js           # Database connection
│   ├── controllers/        # Business logic
│   │   ├── foodController.js
│   │   ├── userController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   └── auth.js         # JWT authentication
│   ├── models/             # Database schemas
│   │   ├── foodModel.js
│   │   ├── userModel.js
│   │   └── orderModel.js
│   ├── routes/             # API endpoints
│   │   ├── foodRoute.js
│   │   ├── userRoute.js
│   │   ├── cartRoute.js
│   │   └── orderRoute.js
│   ├── uploads/            # Uploaded images
│   ├── server.js           # Entry point
│   └── package.json
│
└── README.md               # Documentation
```

---

## 🚀 Core API Endpoints

### **User Endpoints** (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - User login with credentials
- `POST /logout` - User logout

### **Food Endpoints** (`/api/food`)
- `GET /list` - Get all food items
- `POST /add` - Add new food (Admin only)
- `POST /remove` - Remove food item (Admin only)

### **Cart Endpoints** (`/api/cart`)
- `POST /add` - Add item to cart
- `POST /remove` - Remove item from cart
- `POST /get` - Get user's cart

### **Order Endpoints** (`/api/order`)
- `POST /place` - Place new order
- `POST /verify` - Verify payment
- `POST /userorders` - Get user's orders
- `GET /list` - Get all orders (Admin only)
- `POST /status` - Update order status (Admin only)

### **Image Endpoints**
- `GET /images/:filename` - Retrieve uploaded images

---

## 🔐 Security & Authentication

- **JWT Authentication** - Token-based secure authentication
- **Password Encryption** - Bcrypt hashing with salt rounds
- **Protected Routes** - Admin routes require authentication
- **CORS Configuration** - Restricted cross-origin access
- **Environment Variables** - Sensitive data kept in `.env` file
- **Input Validation** - Server-side validation on all endpoints

---

## 💳 Payment Integration

- **Stripe API** - Secure payment processing
- **Order Verification** - Verify successful transactions
- **Order Status Tracking** - Real-time order status updates
- **Multiple Payment Attempts** - Retry mechanism for failed payments

---

## 🎯 User Workflows

### **Customer Journey**
1. Browse homepage with featured items
2. Explore food menu by categories
3. Add favorite items to cart
4. Review cart and modify quantities
5. Proceed to checkout
6. Complete payment via Stripe
7. Receive order confirmation
8. Track order in "My Orders" section
9. View order status updates

### **Admin Workflow**
1. Login to admin dashboard
2. Add new food items with images and details
3. View all orders in real-time
4. Update order status as it progresses
5. Manage food inventory
6. Monitor sales and order analytics

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn package manager

### **Backend Setup**
```bash
cd backend
npm install

# Create .env file with:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_KEY=your_stripe_key

npm run server  # Start development server
```

### **Frontend Setup**
```bash
cd Frontend
npm install
npm run dev
```

### **Admin Setup**
```bash
cd admin
npm install
npm run dev
```

---

## 💡 Key Implementation Highlights

### **State Management**
- React Context API for global state (cart, user data)
- Persistent storage using localStorage
- Real-time state synchronization across components

### **Database Design**
- **Users**: Stores user credentials and cart data
- **Foods**: Food items with images, prices, and descriptions
- **Orders**: Order details with items, amounts, and status
- **Cart Items**: Tracked per user with quantities

### **Responsive UI/UX**
- Mobile-first responsive design
- Smooth animations and transitions
- Interactive food cards with hover effects
- Clean and intuitive navigation

### **Error Handling**
- Graceful error messages for users
- Validation on form submissions
- Network error recovery
- Toast notifications for user feedback

---

## 🎓 Learning Outcomes & Skills Demonstrated

This project demonstrates proficiency in:

✅ **Full-Stack Development** - Building complete web applications  
✅ **MERN Stack** - Proficient with MongoDB, Express, React, Node.js  
✅ **RESTful API Design** - Clean, scalable API architecture  
✅ **Database Design** - Schema modeling and relationships  
✅ **Authentication & Authorization** - JWT-based security  
✅ **Payment Integration** - Third-party API integration (Stripe)  
✅ **State Management** - React Context and hooks  
✅ **File Upload Handling** - Image management with Multer  
✅ **Responsive Design** - Mobile-first development  
✅ **Deployment** - Production deployment on Render  
✅ **Git & Version Control** - Project management  
✅ **Problem Solving** - Debugging and optimization  

---

## 🔄 Workflow & Development Process

- **Version Control** - Git for collaboration and version history
- **Development Server** - Vite for fast hot module replacement
- **Code Quality** - ESLint configuration for consistent code
- **Auto-reload** - Nodemon for backend development
- **Build Optimization** - Optimized production builds with Vite

---

## 📊 Performance & Scalability

- **Optimized Queries** - MongoDB indexing for fast retrieval
- **Pagination** - Handle large datasets efficiently
- **Image Optimization** - Compressed images for faster loading
- **Caching** - Browser and server-side caching
- **Load Balancing** - Render deployment handles traffic distribution

---

## 🌟 Future Enhancements

- Real-time order notifications with WebSockets
- User reviews and ratings system
- Multi-restaurant support
- Advance food reservation
- Loyalty program and discounts
- AI-powered food recommendations
- Mobile app version (React Native)
- Analytics dashboard
- Delivery tracking with maps

---

## 📝 Conclusion

This Food Delivery Platform is a production-ready full-stack application showcasing modern web development practices. It demonstrates the ability to build scalable, secure, and user-friendly applications using the MERN stack with real-world features like payment processing and order management.

**Ready to scale to production with millions of transactions!** 🚀

---

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities, feel free to reach out!

**Happy coding!**
