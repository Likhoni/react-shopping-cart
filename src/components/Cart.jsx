import { useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';
import CartItem from './CartItem.jsx';
import CartSummary from './CartSummary.jsx';

function Cart() {
  const { items, isOpen, closeCart } = useCart();

  // Close the drawer with the Escape key and lock page scroll while it is open
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`overlay ${isOpen ? 'is-visible' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <header className="drawer__header">
          <h2>Your cart</h2>
          <button type="button" className="drawer__close" onClick={closeCart} aria-label="Close cart">
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className="status">Your cart is empty. Add something you like.</p>
        ) : (
          <>
            <ul className="drawer__list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <CartSummary />
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;
