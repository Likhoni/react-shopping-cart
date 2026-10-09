import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/formatPrice.js';

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.title} />

      <div className="cart-item__info">
        <h4 className="cart-item__title">{item.title}</h4>
        <p className="cart-item__price">{formatPrice(item.price)}</p>

        <div className="cart-item__controls">
          <div className="qty">
            <button
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              −
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>
          </div>

          <button
            className="link-danger"
            type="button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <p className="cart-item__subtotal">
        {formatPrice(item.price * item.quantity)}
      </p>
    </li>
  );
}

export default CartItem;
