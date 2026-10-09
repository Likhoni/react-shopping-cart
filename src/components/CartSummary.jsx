import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/formatPrice.js';

function CartSummary() {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="summary">
      <div className="summary__row">
        <span>Total items</span>
        <strong>{totalItems}</strong>
      </div>
      <div className="summary__row summary__row--total">
        <span>Total price</span>
        <strong>{formatPrice(totalPrice)}</strong>
      </div>
      <button className="btn btn--primary" type="button">
        Proceed to checkout
      </button>
      <button className="btn btn--ghost" type="button" onClick={clearCart}>
        Clear cart
      </button>
    </div>
  );
}

export default CartSummary;
