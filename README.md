# 🛍️ MERN E-commerce Application  

A single-page e-commerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js) featuring authentication, item management, cart persistence, order placement, and role-based access.  

---

## 🚀 Features  
- **Authentication & Authorization**  
  - JWT-based signup/login  
  - Role-based access (Admin & User)  

- **Items Management**  
  - Browse items with filters (price, category)  
  - Admin can add, update, and delete items  

- **Cart**  
  - Add, update, and remove items  
  - Cart persists after logout/login  

- **Orders**  
  - Place orders using saved addresses  
  - View order history & details  
  - Admin can update order status  

- **Address Management**  
  - Save, update, and delete addresses  
  - Set default address  

- **Modern UI**  
  - React + Redux + shadCN components  
  - Responsive design & eye-catching palette  

---

## 📂 Project Structure  

### Backend  
```
backend/  
 ├── models/ (User, Item, Cart, Address, Order)  
 ├── controllers/  
 ├── routes/  
 ├── middleware/  
 ├── server.js  
```

### Frontend  
```
frontend/  
 ├── src/  
 │   ├── components/  
 │   ├── pages/ (Signup, Login, Items, ItemDetail, Cart, Address, Orders, OrderDetail, AdminDashboard)  
 │   ├── redux/ (store.js, slices/)  
 │   ├── utils/ (api.js, auth.js)  
 │   ├── App.jsx  
 │   ├── main.jsx  
```  

---

## ⚙️ Installation  

1. **Clone repo**  
```bash
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
```

2. **Backend setup**  
```bash
cd backend
npm install
```

Create `.env` file:  
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:  
```bash
npm run dev
```

3. **Frontend setup**  
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧪 API Endpoints  

- **Auth:** `/api/auth/signup`, `/api/auth/login`, `/api/auth/me`  
- **Items:** `/api/items` (CRUD + filters)  
- **Cart:** `/api/cart` (add, update, remove, clear)  
- **Address:** `/api/address` (CRUD)  
- **Orders:** `/api/orders` (place, view, update)  

---

## 👨‍💻 Tech Stack  
- **Frontend:** React, Redux Toolkit, shadCN UI, TailwindCSS  
- **Backend:** Node.js, Express, MongoDB, JWT  
- **Other:** bcrypt, dotenv, mongoose  

---

## 📌 Future Enhancements  
- Payment gateway integration  
- Product reviews & ratings  
- Wishlist functionality  

