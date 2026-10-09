# ShopCart - React Shopping Cart

A responsive shopping cart built with React, Vite and the Context API.

## Features

- Product grid with image, title, category and price
- Category filter and live search
- Add to cart, increase or decrease quantity, remove items, clear cart
- Real-time total item count and total price
- Cart saved in localStorage
- Mobile-first layout for phones, tablets and desktops

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build`

## Structure

```
src/
├── components/   Navbar, CategoryFilter, ProductGrid, ProductCard, Cart, CartItem, CartSummary
├── context/      CartContext (useReducer + Context API)
├── data/         Local mock products (fallback)
├── hooks/        useProducts (fetches from fakestoreapi.com)
├── utils/        formatPrice
├── App.jsx
└── main.jsx
```
