import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shopcart:items';

// Pure reducer: every cart change goes through one of these actions
function cartReducer(items, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = items.find((item) => item.id === action.product.id);
      if (existing) {
        return items.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...action.product, quantity: 1 }];
    }
    case 'INCREASE':
      return items.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE':
      return items
        .map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    case 'REMOVE':
      return items.filter((item) => item.id !== action.id);
    case 'CLEAR':
      return [];
    default:
      return items;
  }
}

// Restores a previously saved cart, ignoring corrupted storage
function loadInitialItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadInitialItems);
  const [isOpen, setIsOpen] = useState(false);

  // Persist the cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be unavailable (private mode); the cart still works in memory
    }
  }, [items]);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items,
      totalItems,
      totalPrice,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart: (product) => dispatch({ type: 'ADD', product }),
      increaseQuantity: (id) => dispatch({ type: 'INCREASE', id }),
      decreaseQuantity: (id) => dispatch({ type: 'DECREASE', id }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE', id }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Convenience hook for consuming the cart anywhere in the tree
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }
  return context;
}
