# Ice Cream Shop — Full-Stack E-Commerce · React · Redux Toolkit · Node.js · Express · MongoDB

A full-stack online store for an ice cream shop. Customers browse products, register and log in, and manage a shopping basket. Admins manage the product catalog.

The app has a **React + Redux Toolkit (RTK Query)** client and a **Node.js / Express** REST API backed by **MongoDB**, with JWT authentication and role-based access.

---

## Features

**Customers**
- Browse the product catalog and view single-product pages
- Register and log in (passwords hashed with bcrypt, sessions use JWT)
- Shopping basket: add products, update quantities, clear the basket

**Admin**
- Product management dashboard: add, edit and delete products (name, price, stock quantity, image)
- Admin-only API routes protected by JWT + role middleware

**Technical highlights**
- RTK Query API slices for products, auth and basket, with automatic caching
- Protected routes on both the client (custom `useAuth` hook, JWT decoding) and the server (middleware)
- PrimeReact UI components with a Hebrew (RTL) interface
- Mongoose schemas with validation and timestamps
- CORS allow-list and configuration through environment variables

---

## Tech stack

| Client | Server |
|---|---|
| React 19 | Node.js, Express 5 |
| Redux Toolkit + RTK Query | MongoDB + Mongoose |
| React Router 7 | JWT (`jsonwebtoken`), bcrypt |
| PrimeReact, PrimeFlex, PrimeIcons | dotenv, CORS |

---

## Project structure

```
├── node/                     # REST API
│   ├── server.js
│   ├── config/               # DB connection, CORS options
│   ├── routs/                # auth, product, basket routers
│   ├── controllers/
│   ├── middleware/           # registered-user & admin JWT guards
│   └── models/               # User, Product, Basket
└── react/                    # Client
    └── src/
        ├── app/              # Redux store + base API slice
        ├── components/       # Layout, Navbar
        └── features/
            ├── auth/         # Login, Register, authSlice, useAuth
            ├── products/     # Products, SingleProduct, ManageProducts
            └── basket/       # Basket
```

---

## API overview

| Method | Route | Access |
|---|---|---|
| `POST` | `/api/auth/register` · `/api/auth/login` | Public |
| `GET` | `/api/product` · `/api/product/:id` | Public |
| `POST` `PUT` `DELETE` | `/api/product` | Admin |
| `GET` `POST` `PUT` `DELETE` | `/api/basket` | Registered user |

---

## Getting started

### 1. Server

```bash
cd node
npm install
```

Copy `node/.env.example` to `node/.env` and fill in your values:

```env
DB_URI=mongodb://localhost:27017/ice-cream-shop
PORT=1111
TOKEN_PSWD=your_jwt_secret
```

```bash
npm run dev
```

### 2. Client

```bash
cd react
npm install
npm start
```

Open `http://localhost:3000`.
